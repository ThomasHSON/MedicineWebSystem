let drugSelectorState = {
  deviceItems: [],
  filteredDeviceItems: [],
  medicationGroups: [],
  selectedDrugs: [],
  appliedDrugs: [],
  searchTerm: '',
  currentPage: 1,
  pageSize: 10,
  sortField: null,
  sortDirection: 'asc',
  isLoading: false,
  currentStation: '',
};

async function getBaseUrl() {
  // 使用全域變數 session_url 推斷 API Server 位址
  if (typeof session_url !== 'undefined' && session_url) {
    const baseUrl = session_url.replace('/api/session', '');
    return baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  }

  console.error('session_url not initialized. Call LoadAPIServer() first.');
  return null;
}

async function fetchAppliedOrders() {
  try {
    const baseUrl = await getBaseUrl();
    if (!baseUrl) {
      console.error('Could not determine API base URL');
      return;
    }

    const fullUrl = `${baseUrl}api/medRequestApply/get_AllRequest`;
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });

    const data = await response.json();

    if (data && data.Code === 200 && data.Data && Array.isArray(data.Data)) {
      const appliedGuids = [];
      data.Data.forEach(order => {
        const orderGuid = order.OrderlistGuid || order.OrderlistGUID || order.GUID;
        if (orderGuid) {
          appliedGuids.push(orderGuid);
        }
      });

      drugSelectorState.appliedDrugs = appliedGuids;
    }
  } catch (error) {
    console.error('Error fetching applied orders:', error);
  }
}

async function fetchDeviceItems(stationName) {
  try {
    if (!stationName) {
      console.error('Station name not provided');
      return [];
    }

    drugSelectorState.isLoading = true;

    const baseUrl = await getBaseUrl();
    if (!baseUrl) {
      console.error('Could not determine API base URL');
      drugSelectorState.isLoading = false;
      return [];
    }

    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];

    const requestPayload = {
      ValueAry: [stationName, '配方機', dateStr]
    };

    const fullUrl = `${baseUrl}api/order/get_by_ward_bagtype_day`;

    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestPayload)
    });

    const data = await response.json();

    if (data && data.Code === 200 && data.Data) {
      const mappedData = data.Data.map(item => ({
        ...item,
        病歷號: item.PATCODE,
        病人姓名: item.PATNAME,
        病房: item.WARD,
        床號: item.BEDNO,
        單次劑量: item.SD,
        單位: item.DUNIT,
        途徑: item.RROUTE,
        頻率: item.FREQ
      }));

      drugSelectorState.deviceItems = mappedData;
      drugSelectorState.filteredDeviceItems = mappedData;
      drugSelectorState.currentStation = stationName;
      drugSelectorState.currentPage = 1;

      // 獲取已申請的醫令列表
      await fetchAppliedOrders();

      drugSelectorState.isLoading = false;
      return mappedData;
    }

    drugSelectorState.isLoading = false;
    return [];
  } catch (error) {
    console.error('Error fetching device items:', error);
    // 如果出錯，使用假資料進行測試
    const testData = generateMockData(stationName);
    drugSelectorState.deviceItems = testData;
    drugSelectorState.filteredDeviceItems = testData;
    drugSelectorState.currentStation = stationName;
    drugSelectorState.currentPage = 1;
    drugSelectorState.isLoading = false;
    return testData;
  }
}


function filterDeviceItems() {
  const searchLower = drugSelectorState.searchTerm.toLowerCase();
  drugSelectorState.filteredDeviceItems = drugSelectorState.deviceItems.filter(item =>
    (item.病歷號 && item.病歷號.toLowerCase().includes(searchLower)) ||
    (item.病人姓名 && item.病人姓名.toLowerCase().includes(searchLower))
  );
  drugSelectorState.currentPage = 1;
  updateDrugSelectorUI();
}

function sortDeviceItems(field) {
  if (drugSelectorState.sortField === field) {
    drugSelectorState.sortDirection = drugSelectorState.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    drugSelectorState.sortField = field;
    drugSelectorState.sortDirection = 'asc';
  }

  const sorted = [...drugSelectorState.filteredDeviceItems].sort((a, b) => {
    const aVal = String(a[field] || '');
    const bVal = String(b[field] || '');
    const cmp = aVal.localeCompare(bVal, 'zh-TW', { numeric: true });
    return drugSelectorState.sortDirection === 'asc' ? cmp : -cmp;
  });

  drugSelectorState.filteredDeviceItems = sorted;
  drugSelectorState.currentPage = 1;
  updateDrugSelectorUI();
}

function toggleDrug(guid) {
  const index = drugSelectorState.selectedDrugs.indexOf(guid);
  if (index > -1) {
    drugSelectorState.selectedDrugs.splice(index, 1);
  } else {
    drugSelectorState.selectedDrugs.push(guid);
  }
  updateDrugSelectorUI();
}

function removeDrug(guid) {
  const index = drugSelectorState.selectedDrugs.indexOf(guid);
  if (index > -1) {
    drugSelectorState.selectedDrugs.splice(index, 1);
  }
  updateDrugSelectorUI();
}

function selectAllDrugs() {
  const startIdx = (drugSelectorState.currentPage - 1) * drugSelectorState.pageSize;
  const endIdx = startIdx + drugSelectorState.pageSize;
  const pageItems = drugSelectorState.filteredDeviceItems.slice(startIdx, endIdx);

  pageItems.forEach(item => {
    if (!drugSelectorState.selectedDrugs.includes(item.GUID)) {
      drugSelectorState.selectedDrugs.push(item.GUID);
    }
  });
  updateDrugSelectorUI();
}

function clearSelection() {
  drugSelectorState.selectedDrugs = [];
  updateDrugSelectorUI();
}

async function handleExport() {
  if (drugSelectorState.selectedDrugs.length === 0) {
    alert('請先選擇醫令');
    return;
  }

  if (!stationSelectorState.selectedStation) {
    alert('請先選擇護理站');
    return;
  }

  try {
    const success = await submitApplicationRequests(
      drugSelectorState.selectedDrugs,
      stationSelectorState.selectedStation
    );

    if (success) {
      alert('新增換領單成功');
      drugSelectorState.selectedDrugs = [];

      // 重新獲取已申請的醫令列表，使新申請的醫令立即反灰
      await fetchAppliedOrders();
      updateDrugSelectorUI();
    } else {
      alert('新增換領單失敗，請稍後重試');
    }
  } catch (error) {
    console.error('Error submitting application:', error);
    alert('提交過程出錯：' + error.message);
  }
}

async function handleEditApplication() {
  await showEditApplicationModal();
}

async function fetchMedRequestApplies(statusFilter = 'all') {
  try {
    const baseUrl = await getBaseUrl();
    if (!baseUrl) {
      console.error('Could not determine API base URL');
      return [];
    }

    // API: get_AllRequest 返回所有訂單及其申請單信息
    // 返回對象結構：
    // - medrequestGuid: medRequestApply 的主鍵（用於編輯詳情）
    // - OrderlistGuid: order_list 的 GUID
    // - GUID: order_list 的 GUID
    // - 其他 order_list 的字段
    const fullUrl = `${baseUrl}api/medRequestApply/get_AllRequest`;
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });

    const data = await response.json();

    if (data && data.Code === 200 && data.Data && Array.isArray(data.Data)) {
      // 解析返回的訂單資料，從備註欄提取申請號
      let orders = data.Data.map(order => {
        let requestNo = '';

        // 從備註欄提取申請號（格式：申請號|原備註）
        if (order.備註 || order.NOTE) {
          const noteStr = order.備註 || order.NOTE || '';
          const parts = noteStr.split('|');
          if (parts.length > 0) {
            requestNo = parts[0];
          }
        }

        return {
          ...order,
          requestNo: requestNo
        };
      });

      // 按狀態篩選
      if (statusFilter === 'posted') {
        orders = orders.filter(order => order.狀態 === '已過帳' || order.STATE === '已過帳');
      } else if (statusFilter === 'unposted') {
        orders = orders.filter(order => order.狀態 === '未過帳' || order.STATE === '未過帳');
      }
      // 'all' 時不篩選

      return orders;
    }
    return [];
  } catch (error) {
    console.error('Error fetching med request applies:', error);
    return [];
  }
}

async function showEditApplicationModal() {
  // Create modal overlay
  const modal = document.createElement('div');
  modal.id = 'edit-application-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
  `;

  // Create modal content
  const content = document.createElement('div');
  content.style.cssText = `
    background-color: white;
    border-radius: 8px;
    width: 98%;
    height: 95vh;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  `;

  // Header
  const header = document.createElement('div');
  header.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px;
    border-bottom: 1px solid #e5e7eb;
    background-color: #f9fafb;
    gap: 20px;
  `;

  const titleDiv = document.createElement('div');
  titleDiv.style.cssText = `
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
  `;

  const title = document.createElement('h2');
  title.textContent = '編輯換領單申請詳情';
  title.style.cssText = `
    margin: 0;
    font-size: 28px;
    font-weight: 600;
    color: #1f2937;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  `;
  titleDiv.appendChild(title);

  // 狀態篩選下拉框
  const statusSelect = document.createElement('select');
  statusSelect.style.cssText = `
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    background-color: white;
    cursor: pointer;
    min-width: 120px;
  `;
  statusSelect.innerHTML = `
    <option value="all">全部</option>
    <option value="posted">已過帳</option>
    <option value="unposted">未過帳</option>
  `;
  titleDiv.appendChild(statusSelect);

  header.appendChild(titleDiv);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = `
    background: none;
    border: none;
    font-size: 32px;
    color: #6b7280;
    cursor: pointer;
    padding: 0;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
  `;
  closeBtn.onmouseover = () => closeBtn.style.color = '#1f2937';
  closeBtn.onmouseout = () => closeBtn.style.color = '#6b7280';
  closeBtn.onclick = () => modal.remove();
  header.appendChild(closeBtn);

  content.appendChild(header);

  // Body
  const body = document.createElement('div');
  body.style.cssText = `
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `;

  // Show loading state while fetching
  const loadingDiv = document.createElement('div');
  loadingDiv.style.cssText = `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
  `;
  loadingDiv.textContent = '查詢申請單資料中...';
  body.appendChild(loadingDiv);

  content.appendChild(body);
  modal.appendChild(content);
  document.body.appendChild(modal);

  // Fetch applies data (default to 'all' status)
  const allApplies = await fetchMedRequestApplies('all');

  // Remove loading div
  body.removeChild(loadingDiv);

  if (allApplies.length === 0) {
    const emptyDiv = document.createElement('div');
    emptyDiv.style.cssText = `
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #6b7280;
    `;
    emptyDiv.textContent = '查無申請單資料';
    body.appendChild(emptyDiv);
  } else {
    // Create table container
    const tableContainer = document.createElement('div');
    tableContainer.style.cssText = `
      flex: 1;
      overflow-y: auto;
      padding: 20px;
    `;

    // Function to generate table rows
    const generateTableRows = (applies) => {
      let html = '';
      applies.forEach(order => {
        const requestNo = order.requestNo || order.RequestNo || '-';
        const patCode = order.PATCODE || order.病歷號 || '-';
        const patName = order.PATNAME || order.病人姓名 || '-';
        const drugCode = order.CODE || order.藥品碼 || '-';
        const drugName = order.NAME || order.藥品名稱 || '-';
        const createdTime = order.CT_TIME || order.產出時間 || '-';
        const status = order.狀態 || order.STATE || '-';
        const orderlistGuid = order.OrderlistGuid || order.GUID;
        const medRequestApplyGuid = order.medrequestGuid;
        // medrequestGuid: medRequestApply 的主鍵（用於編輯詳情）
        // orderlistGuid: order_list 的 GUID（用於標記已申請訂單）


        // Color coding for status
        let statusColor = '#1f2937';
        if (status === '已過帳') {
          statusColor = '#059669';
        } else if (status === '未過帳') {
          statusColor = '#d97706';
        }

        html += `
          <tr style="border-bottom: 1px solid #f3f4f6;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
            <td style="padding: 16px; font-size: 16px; color: #1f2937; word-wrap: break-word; white-space: normal; overflow-wrap: break-word; word-break: break-word;">${requestNo}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937; word-wrap: break-word; white-space: normal; overflow-wrap: break-word; word-break: break-word;">${patCode}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937; word-wrap: break-word; white-space: normal; overflow-wrap: break-word; word-break: break-word;">${patName}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937; word-wrap: break-word; white-space: normal; overflow-wrap: break-word; word-break: break-word;">${drugCode}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937; word-wrap: break-word; white-space: normal; overflow-wrap: break-word; word-break: break-word; min-width: 180px;">${drugName}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937; word-wrap: break-word; white-space: normal; overflow-wrap: break-word; word-break: break-word;">${createdTime}</td>
            <td style="padding: 16px; text-align: center; font-size: 14px; color: ${statusColor};">${status}</td>
            <td style="padding: 16px; text-align: center; vertical-align: middle;">
              <button onclick="editMedRequestApply('${medRequestApplyGuid}')" style="
                padding: 8px 12px;
                background-color: #2563eb;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-weight: 500;
                font-size: 14px;
                font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                transition: background-color 0.2s;
                white-space: nowrap;
                width: 100%;
                min-width: fit-content;
              " onmouseover="this.style.backgroundColor='#1d4ed8'" onmouseout="this.style.backgroundColor='#2563eb'">編輯</button>
            </td>
          </tr>
        `;
      });
      return html;
    };

    // Create table with word wrapping support
    let tableHTML = `
      <table style="width: 100%; border-collapse: collapse; font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif; background-color: white; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden; table-layout: auto;">
        <thead>
          <tr style="background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
            <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 120px; word-wrap: break-word; white-space: normal;">申請號</th>
            <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 120px; word-wrap: break-word; white-space: normal;">病歷號</th>
            <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 150px; word-wrap: break-word; white-space: normal;">病人姓名</th>
            <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 100px; word-wrap: break-word; white-space: normal;">藥碼</th>
            <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; min-width: 180px; word-wrap: break-word; white-space: normal;">藥名</th>
            <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 180px; word-wrap: break-word; white-space: normal;">建立時間</th>
            <th style="padding: 16px; text-align: center; font-size: 16px; font-weight: 600; color: #4b5563; width: 100px; word-wrap: break-word; white-space: normal;">狀態</th>
            <th style="padding: 16px; text-align: center; font-size: 16px; font-weight: 600; color: #4b5563; width: 100px; word-wrap: break-word; white-space: normal;">操作</th>
          </tr>
        </thead>
        <tbody id="edit-modal-table-body">
    `;

    tableHTML += generateTableRows(allApplies);

    tableHTML += `
        </tbody>
      </table>
    `;

    tableContainer.innerHTML = tableHTML;
    body.appendChild(tableContainer);

    // Add event listener to status dropdown
    statusSelect.onchange = async (e) => {
      const selectedFilter = e.target.value;
      const filteredApplies = await fetchMedRequestApplies(selectedFilter);

      // Update table body
      const tableBody = document.getElementById('edit-modal-table-body');
      if (tableBody) {
        tableBody.innerHTML = generateTableRows(filteredApplies);
      }
    };
  }

  // Footer
  const footer = document.createElement('div');
  footer.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    padding: 20px 32px;
    border-top: 1px solid #e5e7eb;
    background-color: #f9fafb;
  `;

  const closeFooterBtn = document.createElement('button');
  closeFooterBtn.textContent = '關閉';
  closeFooterBtn.style.cssText = `
    padding: 12px 24px;
    background-color: white;
    color: #374151;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    transition: background-color 0.2s;
  `;
  closeFooterBtn.onmouseover = () => closeFooterBtn.style.backgroundColor = '#f9fafb';
  closeFooterBtn.onmouseout = () => closeFooterBtn.style.backgroundColor = 'white';
  closeFooterBtn.onclick = () => modal.remove();
  footer.appendChild(closeFooterBtn);

  content.appendChild(footer);
}

function selectDoctorOption(fieldName, licenseNo, name) {
  // 更新輸入框的值 - 顯示名字，但存儲 guid
  const input = document.querySelector(`input[data-field="${fieldName}"]`);
  if (input) {
    input.value = name;  // 顯示名字給用戶看
    input.setAttribute('data-selected-value', licenseNo);  // 但在背後存儲 guid
  }

  // 關閉下拉框
  const dropdown = document.querySelector(`input[data-field="${fieldName}"]`).parentElement.querySelector('div:last-child');
  if (dropdown) {
    dropdown.style.display = 'none';
  }
}

function editMedRequestApply(applyGuid) {
  if (!applyGuid || applyGuid === 'undefined') {
    console.error('無效的 applyGuid');
    alert('無效的申請單 GUID，無法打開編輯窗口');
    return;
  }

  showEditApplyDetailModal(applyGuid);
}

async function showEditApplyDetailModal(applyGuid) {
  if (!applyGuid) {
    console.error('缺少 applyGuid，無法打開編輯窗口');
    alert('無法打開編輯窗口：缺少申請單 GUID');
    return;
  }

  // 創建模態框
  const modal = document.createElement('div');
  modal.id = 'edit-apply-detail-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1100;
    padding: 20px;
  `;

  // 創建模態框內容
  const content = document.createElement('div');
  content.style.cssText = `
    background-color: white;
    border-radius: 8px;
    width: 100%;
    max-width: 1000px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  `;

  // 標題
  const header = document.createElement('div');
  header.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px;
    border-bottom: 1px solid #e5e7eb;
    background-color: #f9fafb;
  `;

  const title = document.createElement('h2');
  title.textContent = '編輯換領單申請詳情';
  title.style.cssText = `
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #1f2937;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  `;
  header.appendChild(title);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = `
    background: none;
    border: none;
    font-size: 32px;
    color: #6b7280;
    cursor: pointer;
    padding: 0;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
  `;
  closeBtn.onmouseover = () => closeBtn.style.color = '#1f2937';
  closeBtn.onmouseout = () => closeBtn.style.color = '#6b7280';
  closeBtn.onclick = () => modal.remove();
  header.appendChild(closeBtn);
  content.appendChild(header);

  // 內容區域
  const body = document.createElement('div');
  body.style.cssText = `
    flex: 1;
    overflow-y: auto;
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  `;

  // 表單字段定義
  const fields = [
    {
      label: '處方醫師麻管證號',
      name: 'PrescribingDoctorNarcoticLicenseNo',
      type: 'search',
      placeholder: '搜尋醫師證號'
    },
    {
      label: '施打人 / 銷毀人',
      name: 'DrugAdministrator',
      type: 'login',
      placeholder: '點擊輸入帳號密碼'
    },
    {
      label: '見證人',
      name: 'Witness',
      type: 'login',
      placeholder: '點擊輸入帳號密碼'
    },
    {
      label: '核對藥師',
      name: 'CheckingPharmacist',
      type: 'login',
      placeholder: '點擊輸入帳號密碼'
    },
    {
      label: '交班簽名',
      name: 'HandoverSignature',
      type: 'login',
      placeholder: '點擊輸入帳號密碼'
    }
  ];

  const formData = {};

  // 創建表單字段
  fields.forEach(field => {
    const fieldDiv = document.createElement('div');
    fieldDiv.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 8px;
    `;

    const label = document.createElement('label');
    label.textContent = field.label;
    label.style.cssText = `
      font-size: 14px;
      font-weight: 500;
      color: #4b5563;
      font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    `;
    fieldDiv.appendChild(label);

    if (field.type === 'search') {
      // 搜索下拉框
      const fieldWrapperDiv = document.createElement('div');
      fieldWrapperDiv.style.cssText = `
        display: flex;
        gap: 8px;
        align-items: stretch;
      `;

      const inputDiv = document.createElement('div');
      inputDiv.style.cssText = `
        position: relative;
        flex: 1;
      `;

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = field.placeholder;
      input.style.cssText = `
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 14px;
        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
        outline: none;
      `;
      input.setAttribute('data-field', field.name);
      input.setAttribute('data-selected-value', ''); // 儲存選中的值
      inputDiv.appendChild(input);

      const dropdown = document.createElement('div');
      dropdown.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #d1d5db;
        border-top: none;
        border-radius: 0 0 6px 6px;
        max-height: 300px;
        overflow-y: auto;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      `;
      inputDiv.appendChild(dropdown);

      // 清空按鈕
      const clearSearchBtn = document.createElement('button');
      clearSearchBtn.type = 'button';
      clearSearchBtn.textContent = '清空';
      clearSearchBtn.style.cssText = `
        padding: 10px 16px;
        border: 1px solid #d1d5db;
        background-color: white;
        color: #6b7280;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
        transition: all 0.2s;
        white-space: nowrap;
        flex-shrink: 0;
      `;
      clearSearchBtn.onmouseover = () => {
        clearSearchBtn.style.backgroundColor = '#f3f4f6';
        clearSearchBtn.style.borderColor = '#9ca3af';
      };
      clearSearchBtn.onmouseout = () => {
        clearSearchBtn.style.backgroundColor = 'white';
        clearSearchBtn.style.borderColor = '#d1d5db';
      };
      clearSearchBtn.onclick = () => {
        input.value = '';
        input.setAttribute('data-selected-value', '');
        dropdown.style.display = 'none';
      };
      fieldWrapperDiv.appendChild(inputDiv);
      fieldWrapperDiv.appendChild(clearSearchBtn);

      // 異步載入醫師資料
      let personData = [];
      let dataLoaded = false;

      const loadPersonData = async () => {
        if (dataLoaded) return;
        try {
          const baseUrl = await getBaseUrl();
          const fullUrl = `${baseUrl}api/person_page/get_all`;
          const response = await fetch(fullUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
          });
          const data = await response.json();
          if (data && data.Code === 200 && data.Data && Array.isArray(data.Data)) {
            personData = data.Data;
            dataLoaded = true;
          }
        } catch (error) {
          console.error('Error loading person data:', error);
        }
      };

      const updateDropdown = async (searchValue) => {
        if (!dataLoaded) {
          await loadPersonData();
        }

        if (personData.length === 0) {
          dropdown.innerHTML = `
            <div style="padding: 12px; color: #6b7280; font-size: 14px; text-align: center;">
              查無資料
            </div>
          `;
          return;
        }

        let filtered = personData;
        if (searchValue.trim().length > 0) {
          const lowerSearch = searchValue.toLowerCase();
          filtered = personData.filter(person => {
            // 搜索藥師證字號或姓名
            const license = (person.藥師證字號 || person.license || '').toLowerCase();
            const name = (person.姓名 || person.name || '').toLowerCase();
            return license.includes(lowerSearch) || name.includes(lowerSearch);
          });
        }

        if (filtered.length === 0) {
          dropdown.innerHTML = `
            <div style="padding: 12px; color: #6b7280; font-size: 14px; text-align: center;">
              無符合結果
            </div>
          `;
          return;
        }

        dropdown.innerHTML = filtered.map((person) => {
          const name = person.name || person.姓名 || '';
          const personGuid = person.GUID || '';

          if (!name) return '';

          return `
            <div style="
              padding: 12px;
              border-bottom: 1px solid #f3f4f6;
              cursor: pointer;
              transition: background-color 0.2s;
            "
            class="doctor-option"
            data-field-name="${field.name}"
            data-license="${personGuid}"
            data-name="${name}">
              <div style="font-weight: 500; color: #1f2937;">
                ${name}
              </div>
            </div>
          `;
        }).filter(html => html).join('');

        // 添加事件委托處理醫生選項點擊 - 在dropdown上委托
        dropdown.onclick = (e) => {
          const option = e.target.closest('.doctor-option');
          if (option) {
            const fieldName = option.getAttribute('data-field-name');
            const licenseValue = option.getAttribute('data-license');
            const displayName = option.getAttribute('data-name');
            selectDoctorOption(fieldName, licenseValue, displayName);
          }
        };
      };

      input.onfocus = async () => {
        if (!dataLoaded) {
          dropdown.innerHTML = `
            <div style="padding: 12px; color: #6b7280; font-size: 12px; text-align: center;">
              載入中...
            </div>
          `;
          dropdown.style.display = 'block';
          await loadPersonData();
        }
        await updateDropdown(input.value);
        dropdown.style.display = 'block';
      };

      input.oninput = async (e) => {
        const searchValue = e.target.value;
        if (searchValue.length > 0 || personData.length > 0) {
          await updateDropdown(searchValue);
          dropdown.style.display = 'block';
        } else {
          dropdown.style.display = 'none';
        }
      };

      // 點擊外部關閉下拉框
      document.addEventListener('click', (e) => {
        if (!inputDiv.contains(e.target) && !clearSearchBtn.contains(e.target)) {
          dropdown.style.display = 'none';
        }
      });

      fieldDiv.appendChild(fieldWrapperDiv);
    } else if (field.type === 'login') {
      // 改變 fieldDiv 為水平佈局
      fieldDiv.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 8px;
      `;

      // 內容容器 - 水平排列
      const contentDiv = document.createElement('div');
      contentDiv.style.cssText = `
        display: flex;
        gap: 12px;
        align-items: stretch;
      `;

      // 顯示已輸入的值
      const displayDiv = document.createElement('div');
      displayDiv.id = `${field.name}-display`;
      displayDiv.style.cssText = `
        flex: 1;
        padding: 10px 12px;
        background-color: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        font-size: 14px;
        color: #1f2937;
        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
        min-height: 20px;
        display: flex;
        align-items: center;
      `;
      displayDiv.textContent = '未輸入';
      contentDiv.appendChild(displayDiv);

      // 登入按鈕
      const button = document.createElement('button');
      button.textContent = field.placeholder;
      button.style.cssText = `
        padding: 10px 16px;
        border: 1px solid #2563eb;
        background-color: white;
        color: #2563eb;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
        transition: all 0.2s;
        white-space: nowrap;
        flex-shrink: 0;
      `;
      button.onmouseover = () => {
        button.style.backgroundColor = '#dbeafe';
      };
      button.onmouseout = () => {
        button.style.backgroundColor = 'white';
      };
      button.onclick = async () => {
        await showLoginModal(field.name, formData);
      };
      contentDiv.appendChild(button);

      // 清空按鈕
      const clearBtn = document.createElement('button');
      clearBtn.type = 'button';
      clearBtn.textContent = '清空';
      clearBtn.style.cssText = `
        padding: 10px 16px;
        border: 1px solid #d1d5db;
        background-color: white;
        color: #6b7280;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
        transition: all 0.2s;
        white-space: nowrap;
        flex-shrink: 0;
      `;
      clearBtn.onmouseover = () => {
        clearBtn.style.backgroundColor = '#f3f4f6';
        clearBtn.style.borderColor = '#9ca3af';
      };
      clearBtn.onmouseout = () => {
        clearBtn.style.backgroundColor = 'white';
        clearBtn.style.borderColor = '#d1d5db';
      };
      clearBtn.onclick = () => {
        displayDiv.textContent = '未輸入';
        displayDiv.removeAttribute('data-user-id');
        delete formData[field.name];
      };
      contentDiv.appendChild(clearBtn);
      fieldDiv.appendChild(contentDiv);
    } else if (field.type === 'userid') {
      // 自動帶入用戶ID
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = field.placeholder;
      input.value = sessionStorage.getItem('loggedID') || '';
      input.readOnly = true;
      input.style.cssText = `
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 14px;
        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
        background-color: #f9fafb;
        color: #6b7280;
      `;
      input.setAttribute('data-field', field.name);
      fieldDiv.appendChild(input);
    } else {
      // 普通文字輸入
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = field.placeholder;
      input.style.cssText = `
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 14px;
        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      `;
      input.setAttribute('data-field', field.name);
      fieldDiv.appendChild(input);
    }

    body.appendChild(fieldDiv);
  });

  // 回填已存儲的數據 (showEditApplyDetailModal)
  (async () => {
    try {
      const baseUrl = await getBaseUrl();
      if (!baseUrl) {
        return;
      }

      const fullUrl = `${baseUrl}api/medRequestApply/get_by_guid`;

      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ValueAry: [applyGuid]
        })
      });

      const data = await response.json();

      if (data && data.Code === 200 && data.Data && Array.isArray(data.Data) && data.Data.length > 0) {
        const applicationData = data.Data[0];

        // 字段名稱映射 - 後端返回的名字字段
        const nameFieldMap = {
          'PrescribingDoctorNarcoticLicenseNo': 'PrescribingDoctorNarcoticLicenseName',
          'DrugAdministrator': 'DrugAdministratorName',
          'Witness': 'WitnessName',
          'CheckingPharmacist': 'CheckingPharmacistName',
          'HandoverSignature': 'HandoverSignatureName'
        };

        // 對每個 login 類型字段回填已存儲的人員姓名
        const loginFields = fields.filter(f => f.type === 'login');
        for (const field of loginFields) {
          const guidValue = applicationData[field.name];
          const nameField = nameFieldMap[field.name];
          const personName = nameField ? applicationData[nameField] : '';

          if (personName && personName.trim() !== '') {
            const displayDiv = document.getElementById(`${field.name}-display`);
            if (displayDiv) {
              displayDiv.textContent = personName;
              displayDiv.setAttribute('data-user-id', guidValue);
            }
          }
        }

        // 回填 search 類型字段 - 直接使用 Name 字段
        const searchFields = fields.filter(f => f.type === 'search');
        for (const field of searchFields) {
          const guidValue = applicationData[field.name];
          const nameField = nameFieldMap[field.name];
          const personName = nameField ? applicationData[nameField] : '';

          if (guidValue && guidValue.trim() !== '') {
            const input = document.querySelector(`input[data-field="${field.name}"]`);
            if (input) {
              if (personName && personName.trim() !== '') {
                input.value = personName;
              } else {
                input.value = guidValue;
              }
              input.setAttribute('data-selected-value', guidValue);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error loading application data:', error);
    }
  })();

  content.appendChild(body);

  // 底部按鈕
  const footer = document.createElement('div');
  footer.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    padding: 20px 32px;
    border-top: 1px solid #e5e7eb;
    background-color: #f9fafb;
  `;

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = '取消';
  cancelBtn.style.cssText = `
    padding: 12px 24px;
    background-color: white;
    color: #374151;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    transition: background-color 0.2s;
  `;
  cancelBtn.onmouseover = () => cancelBtn.style.backgroundColor = '#f9fafb';
  cancelBtn.onmouseout = () => cancelBtn.style.backgroundColor = 'white';
  cancelBtn.onclick = () => modal.remove();
  footer.appendChild(cancelBtn);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = '保存';
  submitBtn.style.cssText = `
    padding: 12px 24px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    transition: background-color 0.2s;
  `;
  submitBtn.onmouseover = () => submitBtn.style.backgroundColor = '#1d4ed8';
  submitBtn.onmouseout = () => submitBtn.style.backgroundColor = '#2563eb';
  submitBtn.onclick = async () => {
    // 收集表單數據
    const formInputs = content.querySelectorAll('input[data-field]');
    const submitData = {};

    formInputs.forEach(input => {
      const fieldName = input.getAttribute('data-field');
      // 對於搜索字段，必須使用 data-selected-value（guid），不能用人名
      const selectedValue = input.getAttribute('data-selected-value');
      if (selectedValue && selectedValue.trim() !== '') {
        submitData[fieldName] = selectedValue;
      }
    });

    // 添加已設置的登入信息 - 從 data-user-id 屬性讀取 GUID
    fields.forEach(field => {
      if (field.type === 'login') {
        const displayDiv = document.getElementById(`${field.name}-display`);
        if (displayDiv) {
          const userGuid = displayDiv.getAttribute('data-user-id');
          if (userGuid) {
            submitData[field.name] = userGuid;
          }
        }
      }
    });

    // DrugAdministrator 字段用於施打人和銷毀人 - 自動複製給 DrugDestroyer
    if (submitData.DrugAdministrator && !submitData.DrugDestroyer) {
      submitData.DrugDestroyer = submitData.DrugAdministrator;
    }

    // 提交到 API
    submitBtn.disabled = true;
    submitBtn.textContent = '保存中...';

    try {
      const result = await partialUpdateByGuid(applyGuid, submitData);

      if (result) {
        alert('保存成功');
        modal.remove();
      } else {
        console.error('保存失敗');
        alert('保存失敗，請重試');
        submitBtn.disabled = false;
        submitBtn.textContent = '保存';
      }
    } catch (error) {
      console.error('保存出錯:', error);
      alert('保存出錯：' + error.message);
      submitBtn.disabled = false;
      submitBtn.textContent = '保存';
    }
  };
  footer.appendChild(submitBtn);

  content.appendChild(footer);
  modal.appendChild(content);
  document.body.appendChild(modal);
}

async function showLoginModal(fieldName, formData) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1200;
    padding: 20px;
  `;

  const content = document.createElement('div');
  content.style.cssText = `
    background-color: white;
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    padding: 48px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  const title = document.createElement('h3');
  title.textContent = '輸入帳號密碼';
  title.style.cssText = `
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    color: #1f2937;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  `;
  content.appendChild(title);

  const inputsContainer = document.createElement('div');
  inputsContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  const usernameDiv = document.createElement('div');
  usernameDiv.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;
  const usernameLabel = document.createElement('label');
  usernameLabel.textContent = '帳號';
  usernameLabel.style.cssText = `
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  `;
  const usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.placeholder = '請輸入帳號';
  usernameInput.style.cssText = `
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 16px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    box-sizing: border-box;
    outline: none;
  `;
  usernameInput.onfocus = () => {
    usernameInput.style.borderColor = '#3b82f6';
    usernameInput.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
  };
  usernameInput.onblur = () => {
    usernameInput.style.borderColor = '#d1d5db';
    usernameInput.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
  };
  usernameDiv.appendChild(usernameLabel);
  usernameDiv.appendChild(usernameInput);
  inputsContainer.appendChild(usernameDiv);

  const passwordDiv = document.createElement('div');
  passwordDiv.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;
  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = '密碼';
  passwordLabel.style.cssText = `
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  `;
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = '請輸入密碼';
  passwordInput.style.cssText = `
    padding: 12px 16px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 16px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    box-sizing: border-box;
    outline: none;
  `;
  passwordInput.onfocus = () => {
    passwordInput.style.borderColor = '#3b82f6';
    passwordInput.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
  };
  passwordInput.onblur = () => {
    passwordInput.style.borderColor = '#d1d5db';
    passwordInput.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
  };
  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);
  inputsContainer.appendChild(passwordDiv);

  content.appendChild(inputsContainer);

  const buttonDiv = document.createElement('div');
  buttonDiv.style.cssText = `
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    padding-top: 24px;
    border-top: 1px solid #e5e7eb;
  `;

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = '取消';
  cancelBtn.style.cssText = `
    padding: 14px 32px;
    background-color: white;
    color: #374151;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    transition: all 0.2s;
  `;
  cancelBtn.onmouseover = () => cancelBtn.style.backgroundColor = '#f9fafb';
  cancelBtn.onmouseout = () => cancelBtn.style.backgroundColor = 'white';
  cancelBtn.onclick = () => modal.remove();
  buttonDiv.appendChild(cancelBtn);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = '確認';
  submitBtn.style.cssText = `
    padding: 14px 32px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    transition: all 0.2s;
  `;
  submitBtn.onmouseover = () => submitBtn.style.backgroundColor = '#1d4ed8';
  submitBtn.onmouseout = () => submitBtn.style.backgroundColor = '#2563eb';

  const handleSubmit = async () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert('請輸入帳號和密碼');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = '驗證中...';

    try {
      const response = await fetch('https://localhost:44318/api/session/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Data: {
            ID: username,
            Password: password
          }
        })
      });

      const data = await response.json();

      if (data && data.Code === 200 && data.Data) {
        const personName = data.Data.name || data.Data.Name || username;

        // 從 person_page API 查詢正確的 GUID (用 ID 查找)
        let personGuid = '';
        try {
          const baseUrl = await getBaseUrl();
          if (baseUrl) {
            const personResponse = await fetch(`${baseUrl}api/person_page/get_all`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({})
            });
            const personData = await personResponse.json();

            if (personData && personData.Code === 200 && Array.isArray(personData.Data)) {
              // 用 ID 查找，因為 ID 是唯一的
              const person = personData.Data.find(p =>
                (p.ID === username) || (p.id === username) || (p.帳號 === username)
              );
              if (person) {
                personGuid = person.GUID || '';
              }
            }
          }
        } catch (err) {
          console.error('查詢 person_page 失敗:', err);
        }

        // 如果找不到，使用登入 API 返回的 ID
        if (!personGuid) {
          personGuid = data.Data.ID;
        }

        formData[fieldName] = personGuid;

        const displayDiv = document.getElementById(`${fieldName}-display`);
        if (displayDiv) {
          displayDiv.textContent = personName;
          displayDiv.setAttribute('data-user-id', personGuid);
        }

        modal.remove();
      } else {
        alert(data?.Result || '登入失敗，請檢查帳號密碼');
      }
    } catch (error) {
      alert('登入失敗：' + error.message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = '確認';
    }
  };

  submitBtn.onclick = handleSubmit;

  usernameInput.onkeydown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      passwordInput.focus();
    }
  };

  passwordInput.onkeydown = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        e.preventDefault();
        usernameInput.focus();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  buttonDiv.appendChild(submitBtn);
  content.appendChild(buttonDiv);
  modal.appendChild(content);
  document.body.appendChild(modal);

  usernameInput.focus();
}

async function submitApplicationRequests(orderGuids, station) {
  try {
    const baseUrl = await getBaseUrl();
    if (!baseUrl) {
      console.error('Could not determine API base URL');
      return false;
    }

    const createdBy = sessionStorage.getItem("GUuser");
    const loggedUserGuid = sessionStorage.getItem("GUuser");
    const loggedUserName = sessionStorage.getItem("loggedName");
    const loggedUserId = sessionStorage.getItem("loggeduser");
    const now = new Date();
    const dateTimeStr = now.toISOString().replace('T', ' ').substring(0, 19);

    const applications = orderGuids.map(guid => ({
      Guid: generateGUID(),
      OrderlistGUID: guid,
      RequestNo: '',
      CreatBy: createdBy,
      CreatAt: dateTimeStr,
      UpdateTime: dateTimeStr,
      pickupPersonGuid: loggedUserGuid,
      pickupPersonName: loggedUserName,
      pickupPersonId: loggedUserId
    }));

    const fullUrl = `${baseUrl}api/medRequestApply/add_medrequestapply`;
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Data: applications
      })
    });

    const data = await response.json();

    if (data && data.Code === 200) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
}

function generateGUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

async function toggleEditRow(guid) {
  const editRow = document.getElementById(`edit-row-${guid}`);
  const editContent = document.getElementById(`edit-content-${guid}`);

  if (!editRow || !editContent) return;

  const isVisible = editRow.style.display === 'table-row';

  if (isVisible) {
    editRow.style.display = 'none';
    editContent.innerHTML = '';
  } else {
    editRow.style.display = 'table-row';

    if (!editContent.innerHTML) {
      const appliedOrders = await fetchMedRequestApplies('all');
      // guid 是訂單 GUID，需要匹配 order.GUID 或 order.OrderlistGuid
      const matchingOrder = appliedOrders.find(order => order.GUID === guid || order.OrderlistGuid === guid);

      if (matchingOrder) {
        // applyGuid 應該是 medRequestApply 的 GUID（用於查詢詳情）
        await loadEditFormContent(editContent, matchingOrder.medrequestGuid, guid);
      } else {
        console.error('找不到匹配的訂單，guid:', guid, '可用訂單:', appliedOrders);
      }
    }
  }
}

async function loadEditFormContent(container, applyGuid, orderGuid) {
  // 編輯表單的欄位定義
  const fields = [
    {
      label: '處方醫師麻管證號',
      name: 'PrescribingDoctorNarcoticLicenseNo',
      type: 'search',
      placeholder: '搜尋醫師證號'
    },
    {
      label: '施打人 / 銷毀人',
      name: 'DrugAdministrator',
      type: 'login',
      placeholder: '點擊輸入帳號密碼'
    },
    {
      label: '見證人',
      name: 'Witness',
      type: 'login',
      placeholder: '點擊輸入帳號密碼'
    },
    {
      label: '核對藥師',
      name: 'CheckingPharmacist',
      type: 'login',
      placeholder: '點擊輸入帳號密碼'
    },
    {
      label: '交班簽名',
      name: 'HandoverSignature',
      type: 'login',
      placeholder: '點擊輸入帳號密碼'
    }
  ];

  const formData = {};
  let personData = [];
  let personDataLoaded = false;

  // 生成表單 HTML
  let formHtml = '<div style="display: grid; grid-template-columns: 1fr; gap: 20px;">';

  fields.forEach((field, index) => {
    if (field.type === 'search') {
      // 搜尋欄位特殊處理
      formHtml += `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <label style="
            font-size: 14px;
            font-weight: 500;
            color: #4b5563;
            font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
          ">${field.label}</label>
          <div style="display: flex; gap: 8px; align-items: stretch;">
            <div style="position: relative; flex: 1;">
              <input
                id="field-${field.name}"
                data-field-name="${field.name}"
                type="text"
                placeholder="${field.placeholder}"
                style="
                  width: 100%;
                  padding: 10px 12px;
                  border: 1px solid #d1d5db;
                  border-radius: 6px;
                  font-size: 14px;
                  font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                  box-sizing: border-box;
                  outline: none;
                "
              />
              <div
                id="dropdown-${field.name}"
                style="
                  position: absolute;
                  top: 100%;
                  left: 0;
                  right: 0;
                  background: white;
                  border: 1px solid #d1d5db;
                  border-top: none;
                  border-radius: 0 0 6px 6px;
                  max-height: 300px;
                  overflow-y: auto;
                  display: none;
                  z-index: 1000;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                "
              ></div>
            </div>
            <button
              id="clear-search-${field.name}"
              type="button"
              style="
                padding: 10px 16px;
                border: 1px solid #d1d5db;
                background-color: white;
                color: #6b7280;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                transition: all 0.2s;
                white-space: nowrap;
                flex-shrink: 0;
              "
            >清空</button>
          </div>
        </div>
      `;
    } else {
      // 登入欄位 - 使用顯示div + 按鈕的方式，與模態框版本一致
      formHtml += `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <label style="
            font-size: 14px;
            font-weight: 500;
            color: #4b5563;
            font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
          ">${field.label}</label>
          <div style="display: flex; gap: 12px; align-items: stretch;">
            <div
              id="${field.name}-display"
              style="
                flex: 1;
                padding: 10px 12px;
                background-color: #f9fafb;
                border: 1px solid #e5e7eb;
                border-radius: 6px;
                font-size: 14px;
                color: #1f2937;
                font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                min-height: 20px;
                display: flex;
                align-items: center;
              "
            >未輸入</div>
            <button
              id="btn-${field.name}"
              type="button"
              style="
                padding: 10px 16px;
                border: 1px solid #2563eb;
                background-color: white;
                color: #2563eb;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                transition: all 0.2s;
                white-space: nowrap;
                flex-shrink: 0;
              "
            >${field.placeholder}</button>
            <button
              id="clear-btn-${field.name}"
              type="button"
              style="
                padding: 10px 16px;
                border: 1px solid #d1d5db;
                background-color: white;
                color: #6b7280;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                transition: all 0.2s;
                white-space: nowrap;
                flex-shrink: 0;
              "
            >清空</button>
          </div>
        </div>
      `;
    }
  });

  formHtml += `
    <div style="display: flex; gap: 12px; margin-top: 12px;">
      <button id="save-btn" style="
        padding: 10px 20px;
        background-color: #2563eb;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      ">保存</button>
      <button id="cancel-btn" style="
        padding: 10px 20px;
        background-color: #e5e7eb;
        color: #374151;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      ">取消</button>
    </div>
  </div>`;

  container.innerHTML = formHtml;

  // 為搜尋欄位添加功能
  const searchInput = container.querySelector('#field-PrescribingDoctorNarcoticLicenseNo');
  const dropdown = container.querySelector('#dropdown-PrescribingDoctorNarcoticLicenseNo');
  const clearSearchBtn = container.querySelector('#clear-search-PrescribingDoctorNarcoticLicenseNo');

  if (searchInput && dropdown) {
    const loadPersonData = async () => {
      if (personDataLoaded) return;
      try {
        const baseUrl = await getBaseUrl();
        const fullUrl = `${baseUrl}api/person_page/get_all`;
        const response = await fetch(fullUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        });
        const data = await response.json();
        if (data && data.Code === 200 && data.Data && Array.isArray(data.Data)) {
          personData = data.Data;
          personDataLoaded = true;
        }
      } catch (error) {
        console.error('Error loading person data:', error);
      }
    };

    const updateDropdown = async (searchValue) => {
      if (!personDataLoaded) {
        await loadPersonData();
      }

      if (personData.length === 0) {
        dropdown.innerHTML = '<div style="padding: 12px; color: #6b7280; font-size: 14px; text-align: center;">查無資料</div>';
        return;
      }

      let filtered = personData;
      if (searchValue.trim().length > 0) {
        const lowerSearch = searchValue.toLowerCase();
        filtered = personData.filter(person => {
          const license = (person.藥師證字號 || person.license || '').toLowerCase();
          const name = (person.姓名 || person.name || '').toLowerCase();
          return license.includes(lowerSearch) || name.includes(lowerSearch);
        });
      }

      if (filtered.length === 0) {
        dropdown.innerHTML = '<div style="padding: 12px; color: #6b7280; font-size: 14px; text-align: center;">無符合結果</div>';
        return;
      }

      dropdown.innerHTML = filtered.map((person) => {
        const name = person.name || person.姓名 || '';
        const personGuid = person.GUID || person.cGuid || person.Guid || '';
        return `
          <div class="doctor-option" data-guid="${personGuid}" data-name="${name}" style="
            padding: 12px;
            border-bottom: 1px solid #f3f4f6;
            cursor: pointer;
            transition: background-color 0.2s;
          ">
            <div style="font-weight: 500; color: #1f2937;">${name}</div>
          </div>
        `;
      }).join('');

      // 為選項添加點擊事件
      dropdown.querySelectorAll('.doctor-option').forEach(option => {
        option.addEventListener('click', () => {
          const name = option.getAttribute('data-name');
          const guid = option.getAttribute('data-guid');
          searchInput.value = name;
          searchInput.setAttribute('data-selected-value', guid);
          dropdown.style.display = 'none';
        });
      });
    };

    searchInput.addEventListener('focus', async () => {
      if (!personDataLoaded) {
        dropdown.innerHTML = '<div style="padding: 12px; color: #6b7280; font-size: 12px; text-align: center;">載入中...</div>';
      }
      dropdown.style.display = 'block';
      await updateDropdown(searchInput.value);
    });

    searchInput.addEventListener('input', async (e) => {
      await updateDropdown(e.target.value);
      dropdown.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !dropdown.contains(e.target) && (!clearSearchBtn || !clearSearchBtn.contains(e.target))) {
        dropdown.style.display = 'none';
      }
    });

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('mouseover', () => {
        clearSearchBtn.style.backgroundColor = '#f3f4f6';
        clearSearchBtn.style.borderColor = '#9ca3af';
      });
      clearSearchBtn.addEventListener('mouseout', () => {
        clearSearchBtn.style.backgroundColor = 'white';
        clearSearchBtn.style.borderColor = '#d1d5db';
      });
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.setAttribute('data-selected-value', '');
        dropdown.style.display = 'none';
      });
    }
  }

  // 為登入欄位添加點擊事件
  fields.forEach((field, index) => {
    if (field.type === 'login') {
      const btn = container.querySelector(`#btn-${field.name}`);
      const clearBtn = container.querySelector(`#clear-btn-${field.name}`);
      const displayDiv = container.querySelector(`#${field.name}-display`);

      if (btn) {
        btn.addEventListener('mouseover', () => {
          btn.style.backgroundColor = '#dbeafe';
        });
        btn.addEventListener('mouseout', () => {
          btn.style.backgroundColor = 'white';
        });
        btn.addEventListener('click', async () => {
          await showLoginModal(field.name, formData);
        });
      }

      if (clearBtn && displayDiv) {
        clearBtn.addEventListener('mouseover', () => {
          clearBtn.style.backgroundColor = '#f3f4f6';
          clearBtn.style.borderColor = '#9ca3af';
        });
        clearBtn.addEventListener('mouseout', () => {
          clearBtn.style.backgroundColor = 'white';
          clearBtn.style.borderColor = '#d1d5db';
        });
        clearBtn.addEventListener('click', () => {
          displayDiv.textContent = '未輸入';
          displayDiv.removeAttribute('data-user-id');
          delete formData[field.name];
        });
      }
    }
  });

  // 回填已存儲的數據
  (async () => {
    try {
      const baseUrl = await getBaseUrl();
      if (!baseUrl) return;

      const fullUrl = `${baseUrl}api/medRequestApply/get_by_guid`;
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ValueAry: [applyGuid]
        })
      });

      const data = await response.json();
      if (data && data.Code === 200 && data.Data && Array.isArray(data.Data) && data.Data.length > 0) {
        const applicationData = data.Data[0];

        // 字段名稱映射 - 後端返回的名字字段
        const nameFieldMap = {
          'PrescribingDoctorNarcoticLicenseNo': 'PrescribingDoctorNarcoticLicenseName',
          'DrugAdministrator': 'DrugAdministratorName',
          'Witness': 'WitnessName',
          'CheckingPharmacist': 'CheckingPharmacistName',
          'HandoverSignature': 'HandoverSignatureName'
        };

        // 回填 search 類型字段
        const searchFields = fields.filter(f => f.type === 'search');
        for (const field of searchFields) {
          const guidValue = applicationData[field.name];
          const nameField = nameFieldMap[field.name];
          const personName = nameField ? applicationData[nameField] : '';

          if (guidValue && guidValue.trim() !== '') {
            const input = container.querySelector(`#field-${field.name}`);
            if (input) {
              if (personName && personName.trim() !== '') {
                input.value = personName;
              } else {
                input.value = guidValue;
              }
              input.setAttribute('data-selected-value', guidValue);
            }
          }
        }

        // 回填 login 類型字段
        const loginFields = fields.filter(f => f.type === 'login');
        for (const field of loginFields) {
          const guidValue = applicationData[field.name];
          const nameField = nameFieldMap[field.name];
          const personName = nameField ? applicationData[nameField] : '';

          if (personName && personName.trim() !== '') {
            const displayDiv = container.querySelector(`#${field.name}-display`);
            if (displayDiv) {
              displayDiv.textContent = personName;
              displayDiv.setAttribute('data-user-id', guidValue);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error loading application data:', error);
    }
  })();

  // 為取消按鈕添加事件
  const cancelBtn = container.querySelector('#cancel-btn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      toggleEditRow(orderGuid);
    });
  }

  // 為保存按鈕添加事件
  const saveBtn = container.querySelector('#save-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', async () => {
      const submitData = {};

      // 收集搜尋欄位的數據（使用 data-selected-value 存儲的 GUID）
      const searchFields = fields.filter(f => f.type === 'search');
      searchFields.forEach((field) => {
        const input = container.querySelector(`#field-${field.name}`);
        if (input) {
          const selectedValue = input.getAttribute('data-selected-value');
          // 必須使用 GUID，不能用人名
          if (selectedValue && selectedValue.trim() !== '') {
            submitData[field.name] = selectedValue;
          }
        }
      });

      // 收集登入欄位的數據（使用 data-user-id 存儲的 GUID）
      const loginFields = fields.filter(f => f.type === 'login');
      loginFields.forEach((field) => {
        const displayDiv = container.querySelector(`#${field.name}-display`);
        if (displayDiv) {
          const userGuid = displayDiv.getAttribute('data-user-id');
          if (userGuid) {
            submitData[field.name] = userGuid;
          }
        }
      });

      // DrugAdministrator 字段用於施打人和銷毀人 - 自動複製給 DrugDestroyer
      if (submitData.DrugAdministrator && !submitData.DrugDestroyer) {
        submitData.DrugDestroyer = submitData.DrugAdministrator;
      }

      try {
        saveBtn.disabled = true;
        saveBtn.textContent = '保存中...';

        const result = await partialUpdateByGuid(applyGuid, submitData);
        if (result) {
          alert('保存成功');
          toggleEditRow(orderGuid);
        } else {
          alert('保存失敗，請重試');
          saveBtn.disabled = false;
          saveBtn.textContent = '保存';
        }
      } catch (error) {
        console.error('保存出錯:', error);
        alert('保存出錯：' + error.message);
        saveBtn.disabled = false;
        saveBtn.textContent = '保存';
      }
    });
  }
}


// Global state for application modal
let applicationModalState = {
  selectedOrders: new Set(),
  currentGroupIndex: 0,
  groupArray: []
};

function applicationModalToggleOrder(guid) {
  if (applicationModalState.selectedOrders.has(guid)) {
    applicationModalState.selectedOrders.delete(guid);
  } else {
    applicationModalState.selectedOrders.add(guid);
  }
  updateApplicationModalView();
}

function applicationModalToggleGroupAll(groupIndexStr) {
  const groupIndex = parseInt(groupIndexStr);
  const group = applicationModalState.groupArray[groupIndex];
  if (!group) return;

  const selectedInGroup = group.orders.filter(o => applicationModalState.selectedOrders.has(o.GUID)).length;
  const allSelectedInGroup = selectedInGroup === group.orders.length && group.orders.length > 0;

  if (allSelectedInGroup) {
    group.orders.forEach(o => applicationModalState.selectedOrders.delete(o.GUID));
  } else {
    group.orders.forEach(o => applicationModalState.selectedOrders.add(o.GUID));
  }
  updateApplicationModalView();
}

function updateApplicationModalView() {
  // Update selected count
  const selectedCount = applicationModalState.selectedOrders.size;
  const selectedBadge = document.getElementById('application-modal-selected-count');
  if (selectedBadge) {
    selectedBadge.textContent = `已選 ${selectedCount} 筆`;
  }

  // Update all checkboxes in the table
  const tableContainer = document.getElementById('application-modal-table');
  if (tableContainer) {
    const checkboxes = tableContainer.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      const guid = checkbox.dataset.orderGuid;
      if (guid) {
        checkbox.checked = applicationModalState.selectedOrders.has(guid);
      }
    });

    // Update row background colors
    const rows = tableContainer.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.dataset.orderGuid) {
        const guid = checkbox.dataset.orderGuid;
        const isSelected = applicationModalState.selectedOrders.has(guid);
        row.style.backgroundColor = isSelected ? '#dbeafe' : 'white';
      }
    });
  }
}

async function fetchOrders(startDateTime, endDateTime) {
  try {
    const baseUrl = await getBaseUrl();
    if (!baseUrl) {
      console.error('Could not determine API base URL');
      return [];
    }

    const fullUrl = `${baseUrl}api/order/get_by_creat_time_st_end`;
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ValueAry: [startDateTime, endDateTime, "false"] })
    });

    const data = await response.json();

    if (data && data.Code === 200 && data.Data) {
      return data.Data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
}

async function showApplicationModal() {
  // Create modal overlay
  const modal = document.createElement('div');
  modal.id = 'application-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
  `;

  // Create modal content
  const content = document.createElement('div');
  content.style.cssText = `
    background-color: white;
    border-radius: 8px;
    width: 98%;
    height: 95vh;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  `;

  // Header
  const header = document.createElement('div');
  header.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px;
    border-bottom: 1px solid #e5e7eb;
    background-color: #f9fafb;
  `;

  const titleDiv = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = '填寫換領單申請';
  title.style.cssText = `
    margin: 0 0 8px 0;
    font-size: 28px;
    font-weight: 600;
    color: #1f2937;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  `;
  titleDiv.appendChild(title);

  const subtitle = document.createElement('p');
  subtitle.textContent = `調劑台: ${drugSelectorState.currentStation}`;
  subtitle.style.cssText = `
    margin: 0;
    font-size: 16px;
    color: #6b7280;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  `;
  titleDiv.appendChild(subtitle);
  header.appendChild(titleDiv);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = `
    background: none;
    border: none;
    font-size: 32px;
    color: #6b7280;
    cursor: pointer;
    padding: 0;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
  `;
  closeBtn.onmouseover = () => closeBtn.style.color = '#1f2937';
  closeBtn.onmouseout = () => closeBtn.style.color = '#6b7280';
  closeBtn.onclick = () => modal.remove();
  header.appendChild(closeBtn);

  content.appendChild(header);

  // Body
  const body = document.createElement('div');
  body.style.cssText = `
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `;

  // Show loading state while fetching orders
  const loadingDiv = document.createElement('div');
  loadingDiv.style.cssText = `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
  `;
  loadingDiv.textContent = '查詢訂單資料中...';
  body.appendChild(loadingDiv);

  content.appendChild(body);
  modal.appendChild(content);
  document.body.appendChild(modal);

  // Fetch orders data
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${date}`;
  const startDateTime = `${dateStr} 00:00:00`;
  const endDateTime = `${dateStr} 23:59:59`;

  const allOrders = await fetchOrders(startDateTime, endDateTime);

  // 查詢已新增的申請單
  let appliedOrderGuids = [];
  try {
    const baseUrl = await getBaseUrl();
    if (baseUrl) {
      const fullUrl = `${baseUrl}api/medRequestApply/get_orderguids_by_date`;
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });
      const data = await response.json();
      if (data && data.Code === 200 && data.Data && Array.isArray(data.Data)) {
        // 從申請單數據中提取訂單 GUID（索引1是 cOrderlistGuid）
        appliedOrderGuids = data.Data.map(row => {
          if (Array.isArray(row) && row.length > 1) {
            return row[1]; // 索引1是 cOrderlistGuid
          }
          return null;
        }).filter(guid => guid);
      }
    }
  } catch (error) {
    console.error('查詢已新增訂單失敗:', error);
  }

  // Filter orders by selected drugs and exclude already applied orders
  const filteredOrders = allOrders.filter(order =>
    drugSelectorState.selectedDrugs.includes(order.CODE) &&
    !appliedOrderGuids.includes(order.GUID)
  );

  // Group orders by drug code
  const drugGroups = {};
  filteredOrders.forEach(order => {
    if (!drugGroups[order.CODE]) {
      drugGroups[order.CODE] = {
        code: order.CODE,
        name: order.NAME || '',
        orders: []
      };
    }
    drugGroups[order.CODE].orders.push(order);
  });

  const groupArray = Object.values(drugGroups);

  // Remove loading div
  body.removeChild(loadingDiv);

  // Tabs navigation for drug groups
  let currentGroupIndex = 0;

  if (groupArray.length === 0) {
    const emptyDiv = document.createElement('div');
    emptyDiv.style.cssText = `
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #6b7280;
    `;
    emptyDiv.textContent = '查無符合條件的訂單資料';
    body.appendChild(emptyDiv);
  } else {
    // Create navigation bar
    const navBar = document.createElement('div');
    navBar.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 24px;
      background-color: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
      flex-shrink: 0;
    `;

    const drugInfo = document.createElement('div');
    drugInfo.style.cssText = `
      display: flex;
      align-items: center;
      gap: 16px;
      flex: 1;
      height: 36px;
    `;

    const drugCode = document.createElement('span');
    drugCode.style.cssText = `
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
      font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      display: flex;
      align-items: center;
      height: 100%;
    `;

    const drugName = document.createElement('span');
    drugName.style.cssText = `
      font-size: 16px;
      color: #6b7280;
      font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      display: flex;
      align-items: center;
      height: 100%;
    `;

    const orderCount = document.createElement('span');
    orderCount.style.cssText = `
      font-size: 14px;
      color: #9ca3af;
      background-color: white;
      border: 1px solid #e5e7eb;
      padding: 4px 12px;
      border-radius: 12px;
      font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      display: flex;
      align-items: center;
      height: 100%;
    `;

    const selectedCountBadge = document.createElement('span');
    selectedCountBadge.id = 'application-modal-selected-count';
    selectedCountBadge.style.cssText = `
      font-size: 14px;
      color: #1e40af;
      background-color: #dbeafe;
      border: 1px solid #bfdbfe;
      padding: 4px 12px;
      border-radius: 12px;
      font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      font-weight: 500;
      display: flex;
      align-items: center;
      height: 100%;
    `;
    selectedCountBadge.textContent = '已選 0 筆';

    drugInfo.appendChild(drugCode);
    drugInfo.appendChild(drugName);
    drugInfo.appendChild(orderCount);
    drugInfo.appendChild(selectedCountBadge);

    const buttons = document.createElement('div');
    buttons.style.cssText = `
      display: flex;
      gap: 8px;
    `;

    const updateButtonStyles = (btn) => {
      if (btn.disabled) {
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
      } else {
        btn.style.opacity = '1';
        btn.style.cursor = 'pointer';
      }
    };

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '上一藥';
    prevBtn.style.cssText = `
      padding: 0 20px;
      border: 1px solid #d1d5db;
      background-color: white;
      color: #374151;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      transition: background-color 0.2s, opacity 0.2s;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    `;

    const pageInfo = document.createElement('span');
    pageInfo.style.cssText = `
      font-size: 16px;
      color: #6b7280;
      padding: 0 16px;
      font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      display: flex;
      align-items: center;
      height: 36px;
      line-height: 1;
    `;

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '下一藥';
    nextBtn.style.cssText = `
      padding: 0 20px;
      border: 1px solid #d1d5db;
      background-color: white;
      color: #374151;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      transition: background-color 0.2s, opacity 0.2s;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    `;

    buttons.appendChild(prevBtn);
    buttons.appendChild(pageInfo);
    buttons.appendChild(nextBtn);

    navBar.appendChild(drugInfo);
    navBar.appendChild(buttons);
    body.appendChild(navBar);

    // Create table container
    const tableContainer = document.createElement('div');
    tableContainer.id = 'application-modal-table';
    tableContainer.style.cssText = `
      flex: 1;
      overflow-y: auto;
      border: 1px solid #e5e7eb;
    `;

    // Initialize global state
    applicationModalState.selectedOrders = new Set();
    applicationModalState.groupArray = groupArray;
    applicationModalState.currentGroupIndex = currentGroupIndex;

    // Store references for updates
    const tableContainerRef = tableContainer;
    const drugCodeRef = drugCode;
    const drugNameRef = drugName;
    const orderCountRef = orderCount;
    const pageInfoRef = pageInfo;
    const prevBtnRef = prevBtn;
    const nextBtnRef = nextBtn;

    const updateView = () => {
      const group = groupArray[currentGroupIndex];
      applicationModalState.currentGroupIndex = currentGroupIndex;
      drugCodeRef.textContent = group.code;
      drugNameRef.textContent = group.name;
      orderCountRef.textContent = `${group.orders.length} 筆`;
      pageInfoRef.textContent = `${currentGroupIndex + 1} / ${groupArray.length}`;
      prevBtnRef.disabled = currentGroupIndex === 0;
      nextBtnRef.disabled = currentGroupIndex === groupArray.length - 1;
      updateButtonStyles(prevBtnRef);
      updateButtonStyles(nextBtnRef);

      // Calculate selected count in current group
      const selectedInGroup = group.orders.filter(o => applicationModalState.selectedOrders.has(o.GUID)).length;
      const allSelectedInGroup = selectedInGroup === group.orders.length && group.orders.length > 0;

      // Create table
      let tableHTML = `
        <table style="width: 100%; border-collapse: collapse; font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;">
          <thead>
            <tr style="background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
              <th style="padding: 16px; text-align: center; font-size: 16px; font-weight: 600; color: #4b5563; width: 60px;">
                <input type="checkbox" style="width: 18px; height: 18px; cursor: pointer;" ${allSelectedInGroup ? 'checked' : ''} onchange="applicationModalToggleGroupAll('${currentGroupIndex}')">
              </th>
              <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 200px;">建立時間</th>
              <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 150px;">病歷號</th>
              <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 150px;">病人姓名</th>
              <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 120px;">病房</th>
              <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 120px;">床號</th>
              <th style="padding: 16px; text-align: center; font-size: 16px; font-weight: 600; color: #4b5563; width: 130px;">劑量</th>
              <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 110px;">單位</th>
              <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 120px;">頻率</th>
              <th style="padding: 16px; text-align: left; font-size: 16px; font-weight: 600; color: #4b5563; width: 120px;">途徑</th>
            </tr>
          </thead>
          <tbody>
      `;

      group.orders.forEach((order, idx) => {
        const isSelected = applicationModalState.selectedOrders.has(order.GUID);
        const rowBgColor = isSelected ? '#dbeafe' : 'white';
        tableHTML += `
          <tr style="border-bottom: 1px solid #f3f4f6; background-color: ${rowBgColor}; cursor: pointer;" onclick="applicationModalToggleOrder('${order.GUID}')" onmouseover="this.style.backgroundColor='${isSelected ? '#bfdbfe' : '#f9fafb'}'" onmouseout="this.style.backgroundColor='${rowBgColor}'">
            <td style="padding: 16px; text-align: center;">
              <input type="checkbox" data-order-guid="${order.GUID}" style="width: 18px; height: 18px; cursor: pointer;" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); applicationModalToggleOrder('${order.GUID}')">
            </td>
            <td style="padding: 16px; font-size: 16px; color: #6b7280;">${order.CT_TIME || ''}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937;">${order.PATCODE || ''}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937;">${order.PATNAME || ''}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937;">${order.WARD || ''}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937;">${order.BEDNO || ''}</td>
            <td style="padding: 16px; font-size: 16px; font-weight: 600; color: #1f2937; text-align: center;">${order.SD || ''}</td>
            <td style="padding: 16px; font-size: 16px; color: #6b7280;">${order.DUNIT || ''}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937;">${order.FREQ || ''}</td>
            <td style="padding: 16px; font-size: 16px; color: #1f2937;">${order.RROUTE || ''}</td>
          </tr>
        `;
      });

      tableHTML += `
          </tbody>
        </table>
      `;

      tableContainerRef.innerHTML = tableHTML;
    };

    prevBtn.onmouseover = function() {
      if (!this.disabled) this.style.backgroundColor = '#f9fafb';
    };
    prevBtn.onmouseout = function() {
      this.style.backgroundColor = 'white';
    };

    nextBtn.onmouseover = function() {
      if (!this.disabled) this.style.backgroundColor = '#f9fafb';
    };
    nextBtn.onmouseout = function() {
      this.style.backgroundColor = 'white';
    };

    prevBtn.onclick = () => {
      if (currentGroupIndex > 0) {
        currentGroupIndex--;
        updateView();
      }
    };

    nextBtn.onclick = () => {
      if (currentGroupIndex < groupArray.length - 1) {
        currentGroupIndex++;
        updateView();
      }
    };

    body.appendChild(tableContainer);
    updateView();
  }

  // Footer
  const footer = document.createElement('div');
  footer.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    padding: 20px 32px;
    border-top: 1px solid #e5e7eb;
    background-color: #f9fafb;
  `;

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = '取消';
  cancelBtn.style.cssText = `
    padding: 12px 24px;
    background-color: white;
    color: #374151;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    transition: background-color 0.2s;
  `;
  cancelBtn.onmouseover = () => cancelBtn.style.backgroundColor = '#f9fafb';
  cancelBtn.onmouseout = () => cancelBtn.style.backgroundColor = 'white';
  cancelBtn.onclick = () => modal.remove();
  footer.appendChild(cancelBtn);

  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = '確認申請';
  confirmBtn.style.cssText = `
    padding: 12px 24px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    transition: background-color 0.2s;
  `;
  confirmBtn.onmouseover = function() {
    if (!this.disabled) this.style.backgroundColor = '#1d4ed8';
  };
  confirmBtn.onmouseout = function() {
    this.style.backgroundColor = '#2563eb';
  };
  confirmBtn.onclick = async () => {
    const selectedCount = applicationModalState.selectedOrders.size;
    if (selectedCount === 0) {
      alert('請先選擇訂單');
      return;
    }

    confirmBtn.disabled = true;
    confirmBtn.textContent = '提交中...';

    try {
      const selectedOrderGuids = Array.from(applicationModalState.selectedOrders);
      const result = await submitApplicationRequests(selectedOrderGuids, drugSelectorState.currentStation);
      if (result) {
        alert(`成功提交 ${selectedCount} 筆申請單`);
        modal.remove();
      } else {
        alert('提交失敗，請稍後重試');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('提交失敗：' + error.message);
    } finally {
      confirmBtn.disabled = false;
      confirmBtn.textContent = '確認申請';
    }
  };
  footer.appendChild(confirmBtn);

  content.appendChild(footer);
}

function createFormField(label, value, readOnly = false) {
  const field = document.createElement('div');

  const labelEl = document.createElement('label');
  labelEl.textContent = label;
  labelEl.style.cssText = `
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #4b5563;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  `;
  field.appendChild(labelEl);

  const input = document.createElement('input');
  input.type = 'text';
  input.value = value;
  input.readOnly = readOnly;
  input.style.cssText = `
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    background-color: ${readOnly ? '#f9fafb' : 'white'};
    color: #1f2937;
  `;
  field.appendChild(input);

  return field;
}

function changePage(page) {
  const totalPages = Math.ceil(drugSelectorState.filteredDeviceItems.length / drugSelectorState.pageSize);
  if (page >= 1 && page <= totalPages) {
    drugSelectorState.currentPage = page;
    updateDrugSelectorUI();
  }
}

function createDrugKindBadge(kind) {
  const kindMap = {
    'N': { bg: '#f3f4f6', color: '#4b5563', label: '一般' },
    '1': { bg: '#fef3c7', color: '#92400e', label: '管制一級' },
    '2': { bg: '#fed7aa', color: '#92400e', label: '管制二級' },
    '3': { bg: '#fecaca', color: '#7f1d1d', label: '管制三級' },
    '4': { bg: '#fbcfe8', color: '#831843', label: '管制四級' },
  };

  const info = kindMap[kind] || kindMap['N'];
  return `
    <span style="
      display: inline-block;
      background-color: ${info.bg};
      color: ${info.color};
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
    ">${info.label}</span>
  `;
}

function updateDrugSelectorUI() {
  const paginatedItems = drugSelectorState.filteredDeviceItems;
  const isMobile = typeof screenWidth !== 'undefined' && screenWidth < 768;
  const isTablet = typeof screenWidth !== 'undefined' && screenWidth >= 768 && screenWidth < 1024;

  // 更新已選藥品區域
  const selectedContainer = document.getElementById('selected-drugs-container');
  if (selectedContainer) {
    if (drugSelectorState.selectedDrugs.length > 0) {
      const selectedHTML = drugSelectorState.selectedDrugs
        .map(guid => {
          const item = drugSelectorState.deviceItems.find(d => d.GUID === guid);
          return item ? `
            <div style="
              display: inline-flex;
              align-items: center;
              background-color: #dbeafe;
              color: #1e40af;
              padding: ${isMobile ? '8px 10px' : '6px 12px'};
              border-radius: 6px;
              margin: 4px;
              font-size: ${isMobile ? '12px' : '13px'};
              font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
            ">
              <span style="margin-right: 6px;">${item.病人姓名 || '未知'} (${item.病歷號 || ''})</span>
              <button
                onclick="removeDrug('${guid}'); return false;"
                style="
                  background: none;
                  border: none;
                  color: #1e40af;
                  cursor: pointer;
                  font-size: 14px;
                  padding: 0;
                  margin: 0;
                "
              >×</button>
            </div>
          ` : '';
        })
        .join('');

      selectedContainer.innerHTML = `
        <div style="background-color: white; border: 1px solid #e5e7eb; border-radius: 6px; margin-bottom: 20px; padding: ${isMobile ? '12px' : '16px'};">
          <h3 style="margin: 0 0 12px 0; font-size: ${isMobile ? '13px' : '14px'}; font-weight: 500; color: #4b5563; font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;">已選擇醫令（${drugSelectorState.selectedDrugs.length}筆）</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">${selectedHTML}</div>
        </div>
      `;
    } else {
      selectedContainer.innerHTML = '';
    }
  }

  // 更新藥品表格
  const tableContainer = document.getElementById('drug-table-container');
  if (tableContainer) {
    // Show loading state
    if (drugSelectorState.isLoading) {
      tableContainer.innerHTML = `
        <div style="background-color: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 40px; text-align: center; color: #6b7280;">
          <div style="font-size: 14px; margin-bottom: 12px;">加載中...</div>
          <div style="height: 4px; background: linear-gradient(90deg, #2563eb 0%, #93c5fd 50%, #2563eb 100%); background-size: 200% 100%; border-radius: 2px; animation: loading 1.5s infinite;"></div>
          <style>
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          </style>
        </div>
      `;
      return;
    }

    const headerFontSize = isMobile ? '12px' : isTablet ? '14px' : '18px';
    const cellPadding = isMobile ? '8px' : isTablet ? '10px' : '12px';

    const tableHTML = `
      <div style="background-color: white; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;">
        <div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
          <table style="width: 100%; border-collapse: collapse; font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif; min-width: ${isMobile ? '900px' : 'auto'};">
            <thead>
              <tr style="background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0;">
                <th style="padding: ${cellPadding}; text-align: left; font-weight: 600; font-size: 13px; color: #4b5563; width: 40px;">
                  <input type="checkbox" style="cursor: pointer; width: 18px; height: 18px;" ${(() => {
                    const selectableItems = paginatedItems.filter(item => !drugSelectorState.appliedDrugs.includes(item.GUID));
                    return selectableItems.length > 0 && selectableItems.every(item => drugSelectorState.selectedDrugs.includes(item.GUID)) ? 'checked' : '';
                  })()}  onchange="toggleSelectAll()">
                </th>
                <th style="padding: ${cellPadding}; text-align: left; font-weight: 600; font-size: ${headerFontSize}; color: #4b5563; cursor: pointer; min-width: ${isMobile ? '80px' : isTablet ? '90px' : 'auto'};" onclick="sortDeviceItems('病歷號')">
                  病歷號 ${drugSelectorState.sortField === '病歷號' ? (drugSelectorState.sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th style="padding: ${cellPadding}; text-align: left; font-weight: 600; font-size: ${headerFontSize}; color: #4b5563; cursor: pointer; min-width: ${isMobile ? '80px' : isTablet ? '100px' : 'auto'};" onclick="sortDeviceItems('病人姓名')">
                  病人姓名 ${drugSelectorState.sortField === '病人姓名' ? (drugSelectorState.sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th style="padding: ${cellPadding}; text-align: left; font-weight: 600; font-size: ${headerFontSize}; color: #4b5563; cursor: pointer; min-width: ${isMobile ? '60px' : isTablet ? '70px' : 'auto'};" onclick="sortDeviceItems('床號')">
                  床號 ${drugSelectorState.sortField === '床號' ? (drugSelectorState.sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th style="padding: ${cellPadding}; text-align: left; font-weight: 600; font-size: ${headerFontSize}; color: #4b5563; cursor: pointer; min-width: ${isMobile ? '100px' : isTablet ? '120px' : 'auto'};" onclick="sortDeviceItems('NAME')">
                  藥品名稱 ${drugSelectorState.sortField === 'NAME' ? (drugSelectorState.sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th style="padding: ${cellPadding}; text-align: left; font-weight: 600; font-size: ${headerFontSize}; color: #4b5563; cursor: pointer; min-width: ${isMobile ? '70px' : isTablet ? '80px' : 'auto'};" onclick="sortDeviceItems('單次劑量')">
                  劑量 ${drugSelectorState.sortField === '單次劑量' ? (drugSelectorState.sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th style="padding: ${cellPadding}; text-align: left; font-weight: 600; font-size: ${headerFontSize}; color: #4b5563; cursor: pointer; min-width: ${isMobile ? '50px' : '60px'};" onclick="sortDeviceItems('單位')">
                  單位 ${drugSelectorState.sortField === '單位' ? (drugSelectorState.sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th style="padding: ${cellPadding}; text-align: left; font-weight: 600; font-size: ${headerFontSize}; color: #4b5563; cursor: pointer; min-width: ${isMobile ? '70px' : isTablet ? '80px' : 'auto'};" onclick="sortDeviceItems('頻率')">
                  頻率 ${drugSelectorState.sortField === '頻率' ? (drugSelectorState.sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th style="padding: ${cellPadding}; text-align: left; font-weight: 600; font-size: ${headerFontSize}; color: #4b5563; cursor: pointer; min-width: ${isMobile ? '60px' : '70px'};" onclick="sortDeviceItems('途徑')">
                  途徑 ${drugSelectorState.sortField === '途徑' ? (drugSelectorState.sortDirection === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th style="padding: ${cellPadding}; text-align: center; font-weight: 600; font-size: ${headerFontSize}; color: #4b5563; min-width: 60px;">
                  操作
                </th>
              </tr>
            </thead>
            <tbody>
              ${paginatedItems.map(item => {
                const isApplied = drugSelectorState.appliedDrugs.includes(item.GUID);
                const isSelected = drugSelectorState.selectedDrugs.includes(item.GUID);
                const rowStyle = isApplied
                  ? 'background-color: #f3f4f6;'
                  : 'border-bottom: 1px solid #f3f4f6;';

                let checkboxHtml = '';
                if (isApplied) {
                  checkboxHtml = '<input type="checkbox" style="cursor: not-allowed;" disabled checked>';
                } else {
                  const checkedAttr = isSelected ? 'checked' : '';
                  checkboxHtml = `<input type="checkbox" style="cursor: pointer;" class="drug-checkbox" data-guid="${item.GUID}" ${checkedAttr}>`;
                }

                const editRowHtml = isApplied ? `
                <tr id="edit-row-${item.GUID}" style="display: none; background-color: #f9fafb;">
                  <td colspan="10" style="padding: 16px;">
                    <div id="edit-form-${item.GUID}" style="
                      border: 1px solid #e5e7eb;
                      border-radius: 6px;
                      padding: 16px;
                      background-color: white;
                    ">
                      <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #1f2937;"></h4>
                      <div id="edit-content-${item.GUID}"></div>
                    </div>
                  </td>
                </tr>
                ` : '';

                const cellFontSize = isMobile ? '12px' : isTablet ? '13px' : '16px';

                return `
                <tr style="${rowStyle}">
                  <td style="padding: ${cellPadding}; text-align: center;">
                    ${checkboxHtml}
                  </td>
                  <td style="padding: ${cellPadding}; font-size: ${cellFontSize}; color: #1f2937;">${item.病歷號 || '-'}</td>
                  <td style="padding: ${cellPadding}; font-size: ${cellFontSize}; color: #1f2937;">${item.病人姓名 || '-'}</td>
                  <td style="padding: ${cellPadding}; font-size: ${cellFontSize}; color: #1f2937;">${item.床號 || '-'}</td>
                  <td style="padding: ${cellPadding}; font-size: ${cellFontSize}; color: #1f2937;">${item.NAME || '-'}</td>
                  <td style="padding: ${cellPadding}; font-size: ${cellFontSize}; color: #1f2937;">${item.單次劑量 || '-'}</td>
                  <td style="padding: ${cellPadding}; font-size: ${cellFontSize}; color: #1f2937;">${item.單位 || '-'}</td>
                  <td style="padding: ${cellPadding}; font-size: ${cellFontSize}; color: #1f2937;">${item.頻率 || '-'}</td>
                  <td style="padding: ${cellPadding}; font-size: ${cellFontSize}; color: #1f2937;">${item.途徑 || '-'}</td>
                  <td style="padding: 12px; text-align: center;">
                    ${isApplied ? `
                      <button onclick="toggleEditRow('${item.GUID}')" style="
                        padding: 8px 16px;
                        background-color: #dc2626;
                        color: white;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        font-size: 14px;
                        font-weight: 700;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        transition: all 0.2s;
                        opacity: 1;
                      "
                      onmouseover="this.style.backgroundColor='#b91c1c'; this.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.15)'; this.style.transform='translateY(-1px)';"
                      onmouseout="this.style.backgroundColor='#dc2626'; this.style.boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'; this.style.transform='translateY(0)';"
                      >編輯</button>
                    ` : `
                      <span style="
                        display: inline-block;
                        padding: 6px 12px;
                        background-color: #f3f4f6;
                        color: #374151;
                        border-radius: 4px;
                        font-size: 14px;
                        font-weight: 600;
                        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                      ">未申請</span>
                    `}
                  </td>
                </tr>
                ${editRowHtml}
              `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- 統計信息 -->
        <div style="padding: 12px 16px; border-top: 1px solid #e5e7eb; background-color: #f9fafb; font-size: 13px; color: #4b5563;">
          共 ${drugSelectorState.filteredDeviceItems.length} 筆醫令
        </div>
      </div>
    `;
    tableContainer.innerHTML = tableHTML;

    // Add event delegation for drug checkboxes
    const checkboxes = tableContainer.querySelectorAll('.drug-checkbox');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const guid = e.target.dataset.guid;
        if (guid) {
          toggleDrug(guid);
        }
      });
    });
  }
}

function toggleSelectAll() {
  const selectableItems = drugSelectorState.filteredDeviceItems.filter(
    item => !drugSelectorState.appliedDrugs.includes(item.GUID)
  );

  const allSelected = selectableItems.every(item => drugSelectorState.selectedDrugs.includes(item.GUID));

  if (allSelected) {
    // Unselect all selectable items
    drugSelectorState.selectedDrugs = drugSelectorState.selectedDrugs.filter(
      guid => drugSelectorState.appliedDrugs.includes(guid)
    );
  } else {
    // Select all selectable items (not applied ones)
    const selectableGuids = selectableItems.map(item => item.GUID);
    drugSelectorState.selectedDrugs = [...new Set([...drugSelectorState.selectedDrugs, ...selectableGuids])];
  }
  updateDrugSelectorUI();
}

function createDrugSelector() {
  const isMobile = typeof screenWidth !== 'undefined' && screenWidth < 768;
  const isTablet = typeof screenWidth !== 'undefined' && screenWidth >= 768 && screenWidth < 1024;

  const controlsStyle = isMobile ? `
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  ` : `
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  `;

  const searchWidth = isMobile ? '100%' : isTablet ? '200px' : '300px';
  const buttonPadding = isMobile ? '10px 12px' : isTablet ? '8px 12px' : '8px 16px';
  const titleFontSize = isMobile ? '16px' : isTablet ? '16px' : '18px';
  const tableFontSize = isMobile ? '12px' : isTablet ? '13px' : '16px';

  return `
    <div style="margin-bottom: 20px;">
      <!-- 標題和控制按鈕 -->
      <div style="display: flex; align-items: ${isMobile ? 'stretch' : 'center'}; justify-content: space-between; margin-bottom: 20px; flex-direction: ${isMobile ? 'column' : 'row'}; gap: 12px;">
        <div style="${controlsStyle}">
          <h2 style="margin: 0; font-size: ${titleFontSize}; font-weight: 600; color: #1f2937; font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;">醫令資料</h2>
          <input
            type="text"
            id="drug-search-input"
            placeholder="搜尋病歷號或病人姓名"
            style="
              width: ${searchWidth};
              padding: ${buttonPadding};
              border: 1px solid #d1d5db;
              border-radius: 6px;
              font-size: 14px;
              font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
              box-sizing: border-box;
              outline: none;
            "
            oninput="drugSelectorState.searchTerm = this.value; filterDeviceItems();"
          >
          <div style="display: flex; gap: 8px; ${isMobile ? 'flex-direction: column;' : ''}">
            <button
              onclick="selectAllDrugs();"
              style="
                padding: ${buttonPadding};
                background-color: #2563eb;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 500;
                font-size: 14px;
                font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                transition: background-color 0.2s;
                ${isMobile ? 'flex: 1;' : ''}
              "
              onmouseover="this.style.backgroundColor='#1d4ed8'"
              onmouseout="this.style.backgroundColor='#2563eb'"
            >全選</button>
            <button
              onclick="clearSelection();"
              style="
                padding: ${buttonPadding};
                background-color: white;
                color: #374151;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 500;
                font-size: 14px;
                font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                transition: all 0.2s;
                ${isMobile ? 'flex: 1;' : ''}
              "
              onmouseover="this.style.backgroundColor='#f9fafb'"
              onmouseout="this.style.backgroundColor='white'"
            >清空</button>
          </div>
        </div>
        <button
          onclick="handleExport();"
          style="
            padding: ${buttonPadding};
            background-color: #2563eb;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
            transition: background-color 0.2s;
            ${isMobile ? 'width: 100%;' : ''}
            white-space: nowrap;
          "
          onmouseover="this.style.backgroundColor='#1d4ed8'"
          onmouseout="this.style.backgroundColor='#2563eb'"
        >新增換領單</button>
      </div>

      <!-- 已選藥品區域 -->
      <div id="selected-drugs-container"></div>

      <!-- 藥品表格 -->
      <div id="drug-table-container" style="font-size: ${tableFontSize};"></div>
    </div>
  `;
}

// ============================================
// API 調用函數
// ============================================

/**
 * 根據人員GUID查詢姓名 - 用於回填表單資料
 * @param {string} personGuid - 人員GUID
 * @returns {Promise<string>} 人員姓名
 */
async function getPersonNameByGuid(personGuid) {
  try {
    const baseUrl = await getBaseUrl();
    if (!baseUrl || !personGuid) {
      return '';
    }

    const fullUrl = `${baseUrl}api/medRequestApply/get_person_name_by_guid`;
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ValueAry: [personGuid]
      })
    });

    const data = await response.json();
    if (data && data.Code === 200 && data.Data) {
      return data.Data.name || '';
    }
    return '';
  } catch (error) {
    console.error('Error fetching person name:', error);
    return '';
  }
}

/**
 * 部分更新申請單（按GUID）- 用於編輯詳情彈窗中逐步填入人員資訊
 * @param {string} guid - 申請單GUID
 * @param {object} updateFields - 要更新的欄位對象，例如 { DrugAdministrator: "GUID", Witness: "GUID" }
 * @returns {Promise<object>} 更新後的申請單資料
 */
async function partialUpdateByGuid(guid, updateFields) {
  try {
    const baseUrl = await getBaseUrl();
    if (!baseUrl) {
      console.error('無法確定 API 伺服器位址');
      return null;
    }

    const fullUrl = `${baseUrl}api/medRequestApply/partial_update_by_guid`;
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ValueAry: [guid],
        Data: updateFields
      })
    });

    const data = await response.json();

    if (data && data.Code === 200) {
      return data.Data;
    }
    return null;
  } catch (error) {
    return null;
  }
}


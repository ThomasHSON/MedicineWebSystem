// ===== 監控面板應用邏輯 =====

class APIMonitorApp {
  constructor() {
    this.logs = [];
    this.currentDetailLog = null;
    this.testLightCollapsed = false;
    this.pharmacyList = [];
    this.serverList = [];
    this.deviceList = [];
    this.selectedLightCodes = []; // 存储已选择的药品码
    this.init();
  }

  async init() {
    this.setupEventListeners();
    this.setupTestLightListeners();
    this.loadAndRenderLogs();
    // 等待 API 初始化完成後再加載藥局列表
    await this.waitForAPIReady();
    await this.loadPharmacyOptions();
    // 每2秒自動刷新
    setInterval(() => this.loadAndRenderLogs(), 2000);
  }

  async waitForAPIReady() {
    console.log('[Monitor] 等待 API 初始化完成...');

    // 等待 apiInitialized 標記為 true（最多等待 10 秒）
    let retries = 0;
    while (!window.apiInitialized && retries < 100) {
      await new Promise(resolve => setTimeout(resolve, 100));
      retries++;
      if (retries % 10 === 0) {
        console.log(`[Monitor] 等待中... (${retries / 10}秒)`);
      }
    }

    console.log('[Monitor] ✓ API 初始化完成');
    console.log('[Monitor] 當前 api_ip:', window.api_ip);

    // 等待一下，確保 check_ip 完全完成
    await new Promise(resolve => setTimeout(resolve, 500));

    // 測試 API 連接
    await this.testAPIConnection();
  }

  async testAPIConnection() {
    try {
      console.log('[Monitor] 開始測試 API 連接...');
      const apiIp = window.api_ip || 'http://www.ketech.tw:4435/';
      console.log('[Monitor] 當前 api_ip:', apiIp);

      // 先測試 ServerSetting API
      const testUrl = `${apiIp}api/ServerSetting/type`;
      console.log('[Monitor] 測試 API 地址:', testUrl);

      const response = await fetch(testUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        credentials: 'include',
      });

      console.log('[Monitor] ServerSetting/type 回應狀態:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('[Monitor] ✓ ServerSetting API 連接成功！');
        return true;
      } else {
        console.warn('[Monitor] ✗ ServerSetting API 連接失敗，HTTP', response.status);
        return false;
      }
    } catch (error) {
      console.error('[Monitor] ✗ API 連接測試失敗:', error.message);
      return false;
    }
  }

  setupEventListeners() {
    // 刷新按鈕
    document.getElementById('refreshBtn').addEventListener('click', () => {
      this.loadAndRenderLogs();
    });

    // 清除按鈕
    document.getElementById('clearBtn').addEventListener('click', () => {
      this.clearAllLogs();
    });

    // 彈窗關閉
    document.getElementById('closeModal').addEventListener('click', () => {
      this.closeModal();
    });
    document.getElementById('closeModalBtn').addEventListener('click', () => {
      this.closeModal();
    });

    // 點擊彈窗外部關閉
    document.getElementById('detailModal').addEventListener('click', (e) => {
      if (e.target.id === 'detailModal') {
        this.closeModal();
      }
    });
  }

  setupTestLightListeners() {
    // 測試亮燈區塊收合
    document.getElementById('testLightHeader').addEventListener('click', () => {
      this.toggleTestLightPanel();
    });

    // 藥局選擇
    document.getElementById('pharmacy').addEventListener('change', (e) => {
      console.log('[Monitor] 藥局下拉選單 change 事件觸發');
      console.log('[Monitor] 選擇的值:', e.target.value);
      console.log('[Monitor] pharmacyList:', this.pharmacyList);

      if (e.target.value) {
        // 找到選擇的藥局的 phar_name
        const selectedPharma = this.pharmacyList.find(p => p.phar === e.target.value);
        console.log('[Monitor] 選擇的藥局:', selectedPharma);

        if (selectedPharma) {
          console.log('[Monitor] ✓ 找到藥局，phar_name:', selectedPharma.phar_name);
          this.loadServerNameOptions(selectedPharma.phar_name);
        } else {
          console.warn('[Monitor] ✗ 找不到藥局對應的 phar_name');
        }
      } else {
        console.log('[Monitor] 未選擇藥局，清空調劑台列表');
        // 清空調劑台列表
        const select = document.getElementById('serverName');
        while (select.options.length > 1) {
          select.remove(1);
        }
        select.options[0].text = '-- 請先選擇藥局 --';
        document.getElementById('serverType').value = '';
      }
    });

    // 調劑台選擇下拉選單
    document.getElementById('serverName').addEventListener('change', (e) => {
      const selectedServer = this.serverList.find((s) => s.name === e.target.value);
      if (selectedServer) {
        console.log('[Monitor] 選擇調劑台:', selectedServer.name, '類型:', selectedServer.type);
        this.selectedLightCodes = []; // 清空已選擇的藥品碼
        this.renderLightCodeTags(); // 重新渲染標籤
        this.loadLightCodeOptions(selectedServer.name, selectedServer.type);
      } else {
        // 清空搜尋和提示
        document.getElementById('lightCodeInput').value = '';
        this.selectedLightCodes = [];
        this.renderLightCodeTags();
        this.deviceList = [];
        this.hideLightCodeSuggestions();
      }
    });

    // 藥品位置代碼搜尋輸入框
    document.getElementById('lightCodeInput').addEventListener('input', (e) => {
      this.handleLightCodeSearch(e.target.value);
    });

    // 點擊搜尋輸入框時顯示所有選項
    document.getElementById('lightCodeInput').addEventListener('focus', (e) => {
      if (this.deviceList.length > 0) {
        this.showLightCodeSuggestions('');
      }
    });

    // 點擊頁面其他地方時隱藏提示
    document.addEventListener('click', (e) => {
      const lightCodeInput = document.getElementById('lightCodeInput');
      const suggestions = document.getElementById('lightCodeSuggestions');
      const tags = document.getElementById('lightCodeTags');
      if (!lightCodeInput.contains(e.target) && !suggestions.contains(e.target) && !tags.contains(e.target)) {
        this.hideLightCodeSuggestions();
      }
    });

    // 亮燈按鈕
    document.getElementById('testLightOnBtn').addEventListener('click', () => {
      this.testLightOn();
    });


    // 顏色按鈕
    document.querySelectorAll('.color-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const color = btn.getAttribute('data-color');
        const colorName = btn.getAttribute('data-name');
        document.getElementById('lightColor').value = color;
        // 移除所有按鈕的 selected 狀態
        document.querySelectorAll('.color-btn').forEach((b) => {
          b.classList.remove('selected');
        });
        // 標記當前選中的按鈕
        btn.classList.add('selected');
      });
    });

    // 預設選中紅色按鈕
    document.querySelector('.color-btn[data-color="255,0,0"]').classList.add('selected');
  }

  toggleTestLightPanel() {
    const content = document.getElementById('testLightContent');
    const icon = document.getElementById('collapseIcon');

    this.testLightCollapsed = !this.testLightCollapsed;
    if (this.testLightCollapsed) {
      content.style.display = 'none';
      icon.textContent = '▶';
    } else {
      content.style.display = 'block';
      icon.textContent = '▼';
    }
  }

  async loadPharmacyOptions() {
    try {
      console.log('[Monitor] 開始加載藥局列表...');
      console.log('[Monitor] 使用 API 地址:', window.api_ip);

      // 調用 medCarList/get_phar API 獲取藥局列表
      const response = await this.callMedCarListAPI('get_phar', null);

      console.log('[Monitor] 藥局列表回應:', response);
      console.log('[Monitor] response 類型:', typeof response);
      console.log('[Monitor] response 是否為物件:', response && typeof response === 'object');

      // 檢查 response 的實際結構
      let data = response;
      let code = response?.Code;

      // 如果 response 是字符串，嘗試解析
      if (typeof response === 'string') {
        console.log('[Monitor] response 是字符串，嘗試解析...');
        try {
          data = JSON.parse(response);
          code = data.Code;
        } catch (e) {
          console.error('[Monitor] 解析字符串失敗:', e);
        }
      }

      console.log('[Monitor] 解析後 data:', data);
      console.log('[Monitor] 解析後 code:', code);
      console.log('[Monitor] data.Data:', data?.Data);

      if (data && code === 200 && data.Data && Array.isArray(data.Data)) {
        this.pharmacyList = data.Data;
        console.log('[Monitor] ✓ 成功加載藥局列表，共', this.pharmacyList.length, '個');
        console.log('[Monitor] pharmacyList 內容:', this.pharmacyList);

        // 檢查數據結構
        if (this.pharmacyList.length > 0) {
          console.log('[Monitor] 第一個藥局數據:', this.pharmacyList[0]);
          console.log('[Monitor] phar_name 值:', this.pharmacyList[0].phar_name);
        }

        this.populatePharmacyDropdown();
      } else {
        const errorMsg = data?.Result || '未知錯誤';
        console.warn('[Monitor] ✗ 無法加載藥局列表:', errorMsg);
        console.warn('[Monitor] 完整回應:', response);
        console.warn('[Monitor] 解析後數據:', data);
      }
    } catch (error) {
      console.error('[Monitor] ✗ 加載藥局列表失敗:', error);
      console.error('[Monitor] 錯誤類型:', error.constructor.name);
      console.error('[Monitor] 錯誤堆棧:', error.stack);
    }
  }

  populatePharmacyDropdown() {
    console.log('[Monitor] 開始填充藥局下拉選單...');
    const select = document.getElementById('pharmacy');
    console.log('[Monitor] select 元素:', select);

    // 清除現有選項（保留預設選項）
    while (select.options.length > 1) {
      select.remove(1);
    }

    console.log('[Monitor] this.pharmacyList:', this.pharmacyList);

    // 按照藥局名稱排序並添加選項
    if (this.pharmacyList && this.pharmacyList.length > 0) {
      console.log('[Monitor] 開始排序...');
      this.pharmacyList.sort((a, b) => (a.phar_name || '').localeCompare(b.phar_name || ''));

      console.log('[Monitor] 開始添加選項...');
      this.pharmacyList.forEach((pharmacy, index) => {
        console.log(`[Monitor] 添加選項 ${index}:`, pharmacy.phar, pharmacy.phar_name);
        const option = document.createElement('option');
        option.value = pharmacy.phar; // 保存 phar 值供後續使用
        option.textContent = pharmacy.phar_name; // 顯示 phar_name
        select.appendChild(option);
      });

      console.log('[Monitor] ✓ 已填充藥局下拉選單，共', this.pharmacyList.length, '個選項');
      console.log('[Monitor] select.options.length:', select.options.length);
    } else {
      console.warn('[Monitor] ✗ pharmacyList 為空或未定義');
    }
  }

  async loadServerNameOptions(departmentType) {
    try {
      console.log('[Monitor] 開始加載調劑台列表，部門:', departmentType);

      // 調用 ServerSetting/get_serversetting_by_department_type API 獲取該部門的調劑台列表
      const response = await this.callServerSettingAPI('get_serversetting_by_department_type', [departmentType]);

      console.log('[Monitor] 調劑台列表回應:', response);
      console.log('[Monitor] response 類型:', typeof response);

      // 檢查 response 的實際結構
      let data = response;
      let code = response?.Code;

      // 如果 response 是字符串，嘗試解析
      if (typeof response === 'string') {
        console.log('[Monitor] response 是字符串，嘗試解析...');
        try {
          data = JSON.parse(response);
          code = data.Code;
        } catch (e) {
          console.error('[Monitor] 解析字符串失敗:', e);
        }
      }

      console.log('[Monitor] 解析後 data:', data);
      console.log('[Monitor] 解析後 code:', code);
      console.log('[Monitor] data.Data:', data?.Data);

      if (data && code === 200 && data.Data && Array.isArray(data.Data)) {
        this.serverList = data.Data;
        console.log('[Monitor] ✓ 成功加載調劑台列表，共', this.serverList.length, '個');
        console.log('[Monitor] serverList 內容:', this.serverList);

        if (this.serverList.length > 0) {
          console.log('[Monitor] 第一個調劑台數據:', this.serverList[0]);
        }

        this.populateServerNameDropdown();
      } else {
        const errorMsg = data?.Result || '未知錯誤';
        console.warn('[Monitor] ✗ 無法加載調劑台列表:', errorMsg);
        console.warn('[Monitor] 完整回應:', response);
      }
    } catch (error) {
      console.error('[Monitor] ✗ 加載調劑台列表失敗:', error);
    }
  }

  populateServerNameDropdown() {
    console.log('[Monitor] 開始填充調劑台下拉選單...');
    const select = document.getElementById('serverName');
    console.log('[Monitor] select 元素:', select);

    // 清除現有選項（保留預設選項）
    while (select.options.length > 1) {
      select.remove(1);
    }

    console.log('[Monitor] this.serverList:', this.serverList);

    // 按照調劑台名稱排序並添加選項
    if (this.serverList && this.serverList.length > 0) {
      console.log('[Monitor] 開始排序...');
      this.serverList.sort((a, b) => (a.name || '').localeCompare(b.name || ''));

      console.log('[Monitor] 開始添加選項...');
      this.serverList.forEach((server, index) => {
        console.log(`[Monitor] 添加選項 ${index}:`, server.name, server.type);
        const option = document.createElement('option');
        option.value = server.name; // 保存 name 值供後續使用
        option.textContent = server.name; // 顯示 name
        select.appendChild(option);
      });

      select.options[0].text = '-- 請選擇調劑台 --';
      console.log('[Monitor] ✓ 已填充調劑台下拉選單，共', this.serverList.length, '個選項');
      console.log('[Monitor] select.options.length:', select.options.length);
    } else {
      console.warn('[Monitor] ✗ serverList 為空或未定義');
    }
  }

  async loadLightCodeOptions(serverName, serverType) {
    try {
      console.log('[Monitor] 開始加載儲位代碼列表，調劑台:', serverName, '類型:', serverType);

      // 調用 device/list API 獲取該調劑台的儲位列表
      const response = await this.callDeviceListAPI(serverName, serverType);

      console.log('[Monitor] 儲位列表回應:', response);

      // 檢查回應結構
      let data = response;
      let code = response?.Code;

      // 如果 response 是字符串，嘗試解析
      if (typeof response === 'string') {
        console.log('[Monitor] response 是字符串，嘗試解析...');
        try {
          data = JSON.parse(response);
          code = data.Code;
        } catch (e) {
          console.error('[Monitor] 解析字符串失敗:', e);
        }
      }

      console.log('[Monitor] 解析後 code:', code);
      console.log('[Monitor] data.Data:', data?.Data);

      if (data && code === 200 && data.Data && Array.isArray(data.Data)) {
        console.log('[Monitor] ✓ 成功加載儲位代碼列表，共', data.Data.length, '個');

        // 提取唯一的設備（按代碼去重）
        const uniqueDevices = [];
        const seenCodes = new Set();

        data.Data.forEach(device => {
          if (device.Code && device.Code.trim() && !seenCodes.has(device.Code)) {
            seenCodes.add(device.Code);
            uniqueDevices.push(device);
          }
        });

        // 按代碼排序
        uniqueDevices.sort((a, b) => (a.Code || '').localeCompare(b.Code || ''));

        this.deviceList = uniqueDevices;
        console.log('[Monitor] ✓ 已保存', uniqueDevices.length, '個唯一設備');

        // 顯示所有儲位代碼提示
        this.showLightCodeSuggestions('');
      } else {
        const errorMsg = data?.Result || '未知錯誤';
        console.warn('[Monitor] ✗ 無法加載儲位代碼列表:', errorMsg);
        this.deviceList = [];
        this.hideLightCodeSuggestions();
      }
    } catch (error) {
      console.error('[Monitor] ✗ 加載儲位代碼列表失敗:', error);
      this.deviceList = [];
      this.hideLightCodeSuggestions();
    }
  }

  handleLightCodeSearch(searchText) {
    if (this.deviceList.length === 0) {
      this.hideLightCodeSuggestions();
      return;
    }

    this.showLightCodeSuggestions(searchText);
  }

  showLightCodeSuggestions(searchText) {
    const suggestions = document.getElementById('lightCodeSuggestions');
    const searchLower = searchText.toLowerCase().trim();

    // 過濾並排序設備
    let filteredDevices = this.deviceList;

    if (searchLower) {
      filteredDevices = this.deviceList.filter(device => {
        const code = (device.Code || '').toLowerCase();
        const name = (device.ChineseName || '').toLowerCase();
        return code.includes(searchLower) || name.includes(searchLower);
      });
    }

    // 優先匹配代碼完全相等或開頭相同
    filteredDevices.sort((a, b) => {
      const aCode = (a.Code || '').toLowerCase();
      const bCode = (b.Code || '').toLowerCase();

      if (searchLower) {
        const aStartsWith = aCode.startsWith(searchLower);
        const bStartsWith = bCode.startsWith(searchLower);
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;
      }

      return aCode.localeCompare(bCode);
    });

    if (filteredDevices.length === 0) {
      suggestions.innerHTML = '<div class="light-code-empty-state">無符合的藥品</div>';
    } else {
      suggestions.innerHTML = filteredDevices.map((device, index) => `
        <div class="light-code-suggestion-item" data-index="${index}">
          <div class="light-code-suggestion-code">${this.highlightMatch(device.Code, searchText)}</div>
          <div class="light-code-suggestion-name">${device.ChineseName || ''}</div>
        </div>
      `).join('');

      // 添加點擊事件監聽
      suggestions.querySelectorAll('.light-code-suggestion-item').forEach((item, index) => {
        item.addEventListener('click', () => {
          const device = filteredDevices[index];
          this.addLightCode(device.Code);
          document.getElementById('lightCodeInput').value = '';
          this.showLightCodeSuggestions(''); // 重新顯示所有選項
        });
      });
    }

    suggestions.classList.add('show');
    suggestions.style.display = 'block';
  }

  hideLightCodeSuggestions() {
    const suggestions = document.getElementById('lightCodeSuggestions');
    suggestions.classList.remove('show');
    suggestions.style.display = 'none';
  }

  addLightCode(code) {
    // 檢查是否已經存在
    if (this.selectedLightCodes.includes(code)) {
      console.log('[Monitor] 藥品碼已選擇:', code);
      return;
    }

    this.selectedLightCodes.push(code);
    console.log('[Monitor] ✓ 已新增藥品碼:', code);
    this.renderLightCodeTags();
  }

  removeLightCode(code) {
    const index = this.selectedLightCodes.indexOf(code);
    if (index > -1) {
      this.selectedLightCodes.splice(index, 1);
      console.log('[Monitor] ✓ 已移除藥品碼:', code);
      this.renderLightCodeTags();
    }
  }

  renderLightCodeTags() {
    const tagsContainer = document.getElementById('lightCodeTags');

    if (this.selectedLightCodes.length === 0) {
      tagsContainer.innerHTML = '';
      tagsContainer.style.display = 'none';
      return;
    }

    tagsContainer.style.display = 'block';
    tagsContainer.innerHTML = this.selectedLightCodes.map((code) => `
      <div class="light-code-tag">
        <span class="tag-code">${this.escapeHtml(code)}</span>
        <button type="button" class="tag-remove" data-code="${this.escapeHtml(code)}">×</button>
      </div>
    `).join('');

    // 添加移除按鈕事件監聽
    tagsContainer.querySelectorAll('.tag-remove').forEach((btn) => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        this.removeLightCode(code);
      });
    });
  }

  highlightMatch(text, searchText) {
    if (!searchText) return text;
    const regex = new RegExp(`(${searchText})`, 'gi');
    return text.replace(regex, '<span class="light-code-suggestion-highlight">$1</span>');
  }

  async callDeviceListAPI(serverName, serverType) {
    try {
      // 使用與 medicine_cart 相同的方式轉換 API IP
      const apiIp = window.api_ip || 'http://www.ketech.tw:4435/';
      const tempDomain = typeof transform_api_ip_4433 === 'function'
        ? transform_api_ip_4433(apiIp)
        : apiIp;
      const apiUrl = `${tempDomain}api/device/list`;
      console.log('[Monitor] 調用 device/list API:', apiUrl);

      const payload = {
        ValueAry: [
          `ServerName=${serverName}`,
          `ServerType=${serverType}`
        ]
      };

      console.log('[Monitor] 請求 Payload:', payload);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('[Monitor] device/list API 回應狀態:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[Monitor] device/list API 錯誤:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('[Monitor] device/list API 回應資料:', data);
      return data;
    } catch (error) {
      console.error('[Monitor] callDeviceListAPI 錯誤:', error);
      throw error;
    }
  }

  async testLightOn() {
    const serverName = document.getElementById('serverName').value.trim();
    const lightColor = document.getElementById('lightColor').value.trim();
    const lightDuration = document.getElementById('lightDuration').value.trim();

    if (!serverName || this.selectedLightCodes.length === 0 || !lightColor) {
      alert('請選擇調劑台、至少一個藥品碼和亮燈顏色');
      return;
    }

    const selectedServer = this.serverList.find((s) => s.name === serverName);
    if (!selectedServer) {
      console.warn('[Monitor] 請選擇有效的調劑台');
      return;
    }

    try {
      const btn = document.getElementById('testLightOnBtn');
      btn.disabled = true;
      btn.textContent = `傳送中 (${this.selectedLightCodes.length} 個)...`;

      // 組合逗號分隔的藥品碼列表，一次發送
      const codesString = this.selectedLightCodes.join(',');
      const payload = {
        ServerName: serverName,
        ServerType: selectedServer.type,
        ValueAry: [codesString, lightColor, lightDuration || '180'],
      };

      console.log('[Monitor] 發送亮燈指令:', payload);
      const response = await this.callLightOnAPI(payload);
      console.log('[Monitor] ✓ 亮燈指令已發送:', response.Result || '完成');

      // 刷新日誌顯示（api_monitor.js 會自動記錄）
      setTimeout(() => this.loadAndRenderLogs(), 100);

      btn.disabled = false;
      btn.textContent = '亮燈';
    } catch (error) {
      console.error('[Monitor] ✗ 亮燈失敗:', error.message);
      const btn = document.getElementById('testLightOnBtn');
      btn.disabled = false;
      btn.textContent = '亮燈';
    }
  }

  async callServerSettingAPI(method, valueAry) {
    try {
      // 使用與 medicine_cart 相同的方式轉換 API IP
      const apiIp = window.api_ip || 'http://www.ketech.tw:4435/';
      const tempDomain = typeof transform_api_ip_4433 === 'function'
        ? transform_api_ip_4433(apiIp)
        : apiIp;
      const apiUrl = `${tempDomain}api/ServerSetting/${method}`;
      console.log('[Monitor] 調用 ServerSetting API:', apiUrl);
      console.log('[Monitor] 方法:', method);
      console.log('[Monitor] 參數 ValueAry:', valueAry);

      const payload = {
        ValueAry: valueAry || [],
      };

      console.log('[Monitor] 請求 Payload:', payload);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('[Monitor] ServerSetting API 回應狀態:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[Monitor] ServerSetting API 錯誤:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('[Monitor] ServerSetting API 回應資料:', data);
      return data;
    } catch (error) {
      console.error('[Monitor] callServerSettingAPI 錯誤:', error);
      throw error;
    }
  }

  async callMedCarListAPI(method, valueAry) {
    try {
      // 使用與 medicine_cart 相同的方式轉換 API IP
      const apiIp = window.api_ip || 'http://www.ketech.tw:4435/';
      const tempDomain = typeof transform_api_ip_4433 === 'function'
        ? transform_api_ip_4433(apiIp)
        : apiIp;
      const apiUrl = `${tempDomain}api/medCarList/${method}`;
      console.log('[Monitor] 調用 API:', apiUrl);
      console.log('[Monitor] 當前 api_ip:', window.api_ip);

      const payload = {
        ValueAry: valueAry || [],
      };

      console.log('[Monitor] 請求 Payload:', payload);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('[Monitor] API 回應狀態:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[Monitor] API 錯誤回應:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('[Monitor] API 回應資料:', data);
      return data;
    } catch (error) {
      console.error('[Monitor] callMedCarListAPI 錯誤:', error);
      console.error('[Monitor] 錯誤詳情:', error.message);
      throw error;
    }
  }

  async callLightOnAPI(payload) {
    try {
      // 使用與 medicine_cart 相同的方式轉換 API IP
      const apiIp = window.api_ip || 'http://www.ketech.tw:4435/';
      const tempDomain = typeof transform_api_ip_4433 === 'function'
        ? transform_api_ip_4433(apiIp)
        : apiIp;
      const apiUrl = `${tempDomain}api/device/light_on_by_code`;
      console.log('[Monitor] 調用亮燈 API:', apiUrl);
      console.log('[Monitor] 亮燈 Payload:', payload);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('[Monitor] 亮燈 API 回應:', data);
      return data;
    } catch (error) {
      console.error('[Monitor] callLightOnAPI 錯誤:', error);
      throw error;
    }
  }

  loadAndRenderLogs() {
    // 直接從 localStorage 讀取監控數據
    const logsJson = localStorage.getItem('light_on_api_logs');
    this.logs = logsJson ? JSON.parse(logsJson) : [];
    this.renderStats();
    this.renderLogs();
  }

  renderStats() {
    const stats = this.calculateStats();

    document.getElementById('totalCount').textContent = stats.total;
    document.getElementById('successCount').textContent = stats.success;
    document.getElementById('failedCount').textContent = stats.failed;
    document.getElementById('avgFrontendTime').textContent = `${stats.avgFrontendDuration} ms`;
    document.getElementById('avgExtraTime').textContent = `${stats.avgExtraDuration} ms`;
    document.getElementById('logsCount').textContent = `共 ${stats.total} 筆`;
  }

  calculateStats() {
    const total = this.logs.length;
    const success = this.logs.filter(log => log.status === 'success').length;
    const failed = total - success;

    const avgFrontendDuration = total > 0
      ? Math.round(this.logs.reduce((sum, log) => sum + (log.duration_frontend || 0), 0) / total * 100) / 100
      : 0;

    const avgExtraDuration = total > 0
      ? Math.round(this.logs.reduce((sum, log) => sum + (log.duration_extra || 0), 0) / total * 100) / 100
      : 0;

    return {
      total,
      success,
      failed,
      avgFrontendDuration,
      avgExtraDuration
    };
  }

  renderLogs() {
    const logsList = document.getElementById('logsList');
    const emptyState = document.getElementById('emptyState');

    if (this.logs.length === 0) {
      logsList.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    logsList.innerHTML = this.logs.map((log) => this.createLogItem(log)).join('');

    // 為每個詳情按鈕添加事件監聽
    document.querySelectorAll('.log-detail-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const logId = e.target.dataset.logId;
        const log = this.logs.find((l) => l.id === logId);
        if (log) {
          this.showDetail(log);
        }
      });
    });
  }

  createLogItem(log) {
    const statusClass = log.status === 'success' ? 'status-success' : 'status-failed';
    const statusIcon = log.status === 'success' ? '✓' : '✗';
    const sendTime = this.formatTime(log.sendDate);
    const receiveTime = this.formatTimeFromDate(log.sendDate, log.receiveTime - log.sendTime);

    // 確定來源和樣式
    const source = log.source || '藥車亮燈';
    const sourceBadgeClass = source === '亮燈測試' ? 'source-badge-test' : 'source-badge-cart';

    // 確定調劑台名稱
    const serverName = log.serverName || '-';

    return `
      <div class="log-item ${statusClass}">
        <div class="log-main">
          <div class="log-time">
            <span class="status-icon">${statusIcon}</span>
            <span class="source-badge ${sourceBadgeClass}">${source}</span>
            <span>${sendTime}</span>
            <span class="arrow">→</span>
            <span>${receiveTime}</span>
          </div>
          <div class="log-durations">
            <span class="duration-item">前端總耗時: <strong>${log.duration_frontend} ms</strong></span>
            <span class="duration-separator">|</span>
            <span class="duration-item">API 耗時: <strong>${log.duration_api} ms</strong></span>
            <span class="duration-separator">|</span>
            <span class="duration-item">額外耗時: <strong>${log.duration_extra} ms</strong></span>
          </div>
          <div class="log-result">
            <span class="result-label">狀態:</span>
            <span class="result-text">${log.status === 'success' ? '成功' : '失敗'}</span>
            <span class="result-separator">|</span>
            <span class="result-label">調劑台:</span>
            <span class="result-text">${this.escapeHtml(serverName)}</span>
            <span class="result-separator">|</span>
            <span class="result-label">結果:</span>
            <span class="result-text">${this.escapeHtml(log.result)}</span>
          </div>
        </div>
        <div class="log-actions">
          <button class="log-detail-btn" data-log-id="${log.id}">詳情</button>
        </div>
      </div>
    `;
  }

  showDetail(log) {
    this.currentDetailLog = log;

    const sendTime = this.formatTime(log.sendDate);
    const receiveTime = this.formatTimeFromDate(log.sendDate, log.receiveTime - log.sendTime);

    document.getElementById('detailSendTime').textContent = sendTime;
    document.getElementById('detailReceiveTime').textContent = receiveTime;
    document.getElementById('detailFrontendDuration').textContent = `${log.duration_frontend} ms`;
    document.getElementById('detailApiDuration').textContent = `${log.duration_api} ms`;
    document.getElementById('detailExtraDuration').textContent = `${log.duration_extra} ms`;
    document.getElementById('detailStatus').textContent =
      log.status === 'success' ? '成功' : '失敗';

    // 添加來源信息到 detailStatus 旁邊
    const statusElement = document.getElementById('detailStatus');
    const source = log.source || '藥車亮燈';
    const serverName = log.serverName || '-';
    const sourceInfo = `${source} (${serverName})`;
    statusElement.textContent = `${log.status === 'success' ? '成功' : '失敗'} - ${sourceInfo}`;

    document.getElementById('detailPayload').textContent = log.payload
      ? JSON.stringify(log.payload, null, 2)
      : '(無)';
    document.getElementById('detailResponse').textContent = log.response
      ? JSON.stringify(log.response, null, 2)
      : '(無)';

    this.openModal();
  }

  openModal() {
    document.getElementById('detailModal').style.display = 'flex';
  }

  closeModal() {
    document.getElementById('detailModal').style.display = 'none';
    this.currentDetailLog = null;
  }

  clearAllLogs() {
    if (confirm('確定要清除所有監控數據嗎？此操作無法復原。')) {
      localStorage.removeItem('light_on_api_logs');
      this.loadAndRenderLogs();
      console.log('[Monitor] ✓ 已清除所有數據');
    }
  }

  formatTime(date) {
    if (!date) return '-';
    // 如果是字符串，轉換為 Date 對象
    if (typeof date === 'string') {
      date = new Date(date);
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ms = String(date.getMilliseconds()).padStart(3, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${ms}`;
  }

  formatTimeFromDate(baseDate, offsetMs) {
    if (!baseDate) return '-';
    // 如果是字符串，轉換為 Date 對象
    if (typeof baseDate === 'string') {
      baseDate = new Date(baseDate);
    }
    const newDate = new Date(baseDate.getTime() + offsetMs);
    return this.formatTime(newDate);
  }

  escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// 初始化應用
document.addEventListener('DOMContentLoaded', () => {
  new APIMonitorApp();
});

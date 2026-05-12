// ===== 藥品搜尋應用邏輯 =====

class MedSearchApp {
  constructor() {
    this.pharmacyList = [];
    this.serverList = [];
    this.medicinesCache = {};
    this.selectedServers = new Set(); // 儲存已選擇的調劑台名稱
    this.selectedPharmacy = null;
    this.searchKeyword = ''; // 搜尋關鍵字
    this.filteredMedicinesCache = {}; // 快取篩選後的藥品

    this.init();
  }

  async init() {
    console.log('[MedSearch] 初始化應用...');
    this.setupEventListeners();
    await this.waitForAPIReady();
    await this.loadPharmacyOptions();
    console.log('[MedSearch] ✓ 應用初始化完成');
  }

  async waitForAPIReady() {
    console.log('[MedSearch] 等待 API 初始化完成...');
    let retries = 0;
    while (!window.apiInitialized && retries < 100) {
      await new Promise(resolve => setTimeout(resolve, 100));
      retries++;
      if (retries % 10 === 0) {
        console.log(`[MedSearch] 等待中... (${retries / 10}秒)`);
      }
    }
    console.log('[MedSearch] ✓ API 初始化完成');
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  setupEventListeners() {
    // 藥局選擇
    document.getElementById('pharmacy').addEventListener('change', (e) => {
      this.handlePharmacyChange(e.target.value);
    });

    // 搜尋輸入框
    document.getElementById('medicineSearchInput').addEventListener('input', (e) => {
      this.searchKeyword = e.target.value.toLowerCase().trim();
      this.applySearchFilter();
    });

    // 清除篩選按鈕
    document.getElementById('clearSearchBtn').addEventListener('click', () => {
      this.clearSearchFilters();
    });
  }

  async loadPharmacyOptions() {
    try {
      this.showLoading(true);
      this.clearError();
      const list = await apiHandlers.getPharmacyList();
      this.pharmacyList = list;
      this.populatePharmacyDropdown();
    } catch (error) {
      console.error('[MedSearch] 加載藥局失敗:', error);
      this.showError('加載藥局列表失敗: ' + error.message);
    } finally {
      this.showLoading(false);
    }
  }

  populatePharmacyDropdown() {
    const select = document.getElementById('pharmacy');
    while (select.options.length > 1) {
      select.remove(1);
    }

    if (this.pharmacyList && this.pharmacyList.length > 0) {
      this.pharmacyList.sort((a, b) => (a.phar_name || '').localeCompare(b.phar_name || ''));
      this.pharmacyList.forEach((pharmacy) => {
        const option = document.createElement('option');
        option.value = pharmacy.phar;
        option.textContent = pharmacy.phar_name;
        select.appendChild(option);
      });
      console.log('[MedSearch] ✓ 已填充藥局下拉選單，共', this.pharmacyList.length, '個');
    }
  }

  async handlePharmacyChange(pharValue) {
    console.log('[MedSearch] 藥局選擇變更:', pharValue);
    this.clearError();

    // 重置狀態
    this.selectedServers.clear();
    this.selectedPharmacy = null;
    this.medicinesCache = {};
    this.filteredMedicinesCache = {};
    this.clearSearchFilters();
    this.clearMedicinesDisplay();

    if (!pharValue) {
      this.hideSections();
      return;
    }

    try {
      const selectedPharma = this.pharmacyList.find(p => p.phar === pharValue);
      if (!selectedPharma) {
        throw new Error('找不到選擇的藥局');
      }

      console.log('[MedSearch] 選擇的藥局:', selectedPharma);
      this.selectedPharmacy = selectedPharma;

      this.showLoading(true);
      const serverList = await apiHandlers.getServerListByPharmacy(selectedPharma.phar_name);
      this.serverList = serverList;
      this.populateServerButtons();
      this.showSections();
    } catch (error) {
      console.error('[MedSearch] 加載調劑台失敗:', error);
      this.showError('加載調劑台列表失敗: ' + error.message);
      this.hideSections();
    } finally {
      this.showLoading(false);
    }
  }

  populateServerButtons() {
    const container = document.getElementById('serverButtonsContainer');
    container.innerHTML = '';

    if (!this.serverList || this.serverList.length === 0) {
      container.innerHTML = '<p style="color: #999;">無可用的調劑台</p>';
      return;
    }

    // 按名稱排序
    this.serverList.sort((a, b) => (a.name || '').localeCompare(b.name || ''));

    // 預設選擇所有調劑台
    this.serverList.forEach(server => {
      this.selectedServers.add(server.name);
    });

    // 渲染按鈕
    this.serverList.forEach(server => {
      const button = document.createElement('button');
      button.className = 'server-button selected'; // 預設選中
      button.textContent = server.name;
      button.dataset.serverName = server.name;
      button.dataset.serverType = server.type;

      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleServerSelection(server.name, button);
      });

      container.appendChild(button);
    });

    // 展示藥品列表（顯示所有選中的調劑台）
    this.renderMedicineAccordion();

    console.log('[MedSearch] ✓ 已填充調劑台按鈕，共', this.serverList.length, '個');
  }

  toggleServerSelection(serverName, buttonElement) {
    console.log('[MedSearch] 切換調劑台選擇:', serverName);

    if (this.selectedServers.has(serverName)) {
      this.selectedServers.delete(serverName);
      buttonElement.classList.remove('selected');
      console.log('[MedSearch] ✓ 取消選擇:', serverName);
    } else {
      this.selectedServers.add(serverName);
      buttonElement.classList.add('selected');
      console.log('[MedSearch] ✓ 已選擇:', serverName);
    }

    // 重新渲染藥品列表
    this.renderMedicineAccordion();
  }

  async renderMedicineAccordion() {
    const accordion = document.getElementById('medicinesAccordion');
    accordion.innerHTML = '';

    if (this.selectedServers.size === 0) {
      document.getElementById('emptyState').style.display = 'block';
      return;
    }

    document.getElementById('emptyState').style.display = 'none';

    // 按順序渲染選中的調劑台
    const serverNames = Array.from(this.selectedServers).sort();

    for (const serverName of serverNames) {
      const server = this.serverList.find(s => s.name === serverName);
      if (!server) continue;

      const item = document.createElement('div');
      item.className = 'accordion-item';
      item.dataset.serverName = serverName;

      const header = document.createElement('div');
      header.className = 'accordion-header';
      header.innerHTML = `
        <span>${serverName}</span>
        <span class="accordion-toggle-icon">▼</span>
      `;

      const content = document.createElement('div');
      content.className = 'accordion-content';

      let isLoading = false;

      header.addEventListener('click', async () => {
        header.classList.toggle('open');
        content.classList.toggle('open');

        // 展開時載入藥品資料
        if (content.classList.contains('open') && !isLoading) {
          isLoading = true;
          try {
            await this.loadMedicinesForServer(serverName, server.type, content);
          } catch (error) {
            console.error('[MedSearch] 加載藥品失敗:', error);
            content.innerHTML = `<div class="medicine-no-data">載入失敗: ${error.message}</div>`;
          } finally {
            isLoading = false;
          }
        }
      });

      item.appendChild(header);
      item.appendChild(content);
      accordion.appendChild(item);
    }

    console.log('[MedSearch] ✓ 藥品列表已渲染，共', this.selectedServers.size, '個調劑台');
  }

  async loadMedicinesForServer(serverName, serverType, contentElement) {
    try {
      console.log('[MedSearch] 加載藥品資料:', serverName);
      contentElement.innerHTML = '<div class="loading-indicator"><div class="spinner"></div><p>載入中...</p></div>';

      const medicines = await apiHandlers.getMedicinesForServer(serverName, serverType);
      this.renderMedicineList(medicines, contentElement);
    } catch (error) {
      console.error('[MedSearch] 加載藥品失敗:', error);
      contentElement.innerHTML = `<div class="medicine-no-data">載入失敗: ${error.message}</div>`;
      throw error;
    }
  }

  clearMedicinesDisplay() {
    const accordion = document.getElementById('medicinesAccordion');
    accordion.innerHTML = '';
    document.getElementById('emptyState').style.display = 'block';
  }

  showSections() {
    document.getElementById('serverSectionContainer').style.display = 'block';
    document.getElementById('medicineSearchContainer').style.display = 'block';
    document.getElementById('medicinesSectionContainer').style.display = 'block';
  }

  hideSections() {
    document.getElementById('serverSectionContainer').style.display = 'none';
    document.getElementById('medicineSearchContainer').style.display = 'none';
    document.getElementById('medicinesSectionContainer').style.display = 'none';
  }

  showLoading(show) {
    const loader = document.getElementById('loadingIndicator');
    if (show) {
      loader.style.display = 'flex';
    } else {
      loader.style.display = 'none';
    }
  }

  showError(message) {
    const errorEl = document.getElementById('errorMessage');
    errorEl.textContent = message;
    errorEl.style.display = 'block';
    console.error('[MedSearch]', message);
  }

  clearError() {
    const errorEl = document.getElementById('errorMessage');
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }

  applySearchFilter() {
    console.log('[MedSearch] 應用搜尋篩選:', this.searchKeyword);
    this.clearMedicinesDisplay();
    this.renderMedicineAccordion();
  }

  clearSearchFilters() {
    console.log('[MedSearch] 清除搜尋篩選');
    this.searchKeyword = '';
    document.getElementById('medicineSearchInput').value = '';
    this.filteredMedicinesCache = {};
    this.clearMedicinesDisplay();
    this.renderMedicineAccordion();
  }

  getFilteredMedicines(medicines) {
    if (!medicines || medicines.length === 0) return [];

    if (!this.searchKeyword) return medicines;

    return medicines.filter(medicine => {
      const code = (medicine.Code || '').toLowerCase();
      const chineseName = (medicine.ChineseName || '').toLowerCase();
      // 模糊匹配：藥品碼或中文名包含搜尋關鍵字
      return code.includes(this.searchKeyword) || chineseName.includes(this.searchKeyword);
    });
  }

  renderMedicineList(medicines, contentElement) {
    // 應用搜尋篩選
    const filtered = this.getFilteredMedicines(medicines);

    if (!filtered || filtered.length === 0) {
      contentElement.innerHTML = '<div class="medicine-no-data">無符合的藥品資訊</div>';
      return;
    }

    const list = document.createElement('div');
    list.className = 'medicine-list';

    // 找到對應的調劑台信息
    const serverName = contentElement.closest('.accordion-item')?.dataset.serverName;
    const server = this.serverList.find(s => s.name === serverName);

    filtered.forEach(medicine => {
      const item = document.createElement('div');
      item.className = 'medicine-item';

      // 創建內容容器
      const content = document.createElement('div');
      content.className = 'medicine-content';
      content.innerHTML = `
        <div class="medicine-code">${this.escapeHtml(medicine.Code || '-')}</div>
        <div class="medicine-name">${this.escapeHtml(medicine.ChineseName || '(無名稱)')}</div>
      `;

      // 創建亮燈按鈕
      const lightBtn = document.createElement('button');
      lightBtn.className = 'medicine-light-btn';
      lightBtn.textContent = '亮燈';
      lightBtn.dataset.medicineCode = medicine.Code;
      lightBtn.dataset.serverName = serverName;
      lightBtn.dataset.serverType = server?.type;

      lightBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        await this.handleMedicineLightOn(medicine.Code, serverName, server?.type, lightBtn);
      });

      item.appendChild(content);
      item.appendChild(lightBtn);
      list.appendChild(item);
    });

    contentElement.innerHTML = '';
    contentElement.appendChild(list);
    console.log('[MedSearch] 藥品列表已渲染，共', filtered.length, '個');
  }

  async handleMedicineLightOn(medicineCode, serverName, serverType, buttonElement) {
    try {
      buttonElement.disabled = true;
      buttonElement.textContent = '發送中...';

      const result = await apiHandlers.lightOn(serverName, serverType, medicineCode, '180');
      console.log('[MedSearch] 亮燈成功:', result);

      buttonElement.textContent = '成功';
      setTimeout(() => {
        buttonElement.textContent = '亮燈';
        buttonElement.disabled = false;
      }, 1500);
    } catch (error) {
      console.error('[MedSearch] 亮燈失敗:', error);
      buttonElement.textContent = '失敗';
      setTimeout(() => {
        buttonElement.textContent = '亮燈';
        buttonElement.disabled = false;
      }, 1500);
      this.showError('亮燈失敗: ' + error.message);
    }
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
  new MedSearchApp();
});

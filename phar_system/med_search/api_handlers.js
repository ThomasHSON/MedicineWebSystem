// ===== API 處理模組 =====

class APIHandlers {
  constructor() {
    this.cache = {
      medicines: {} // 快取已載入的藥品資料 { serverName: [...] }
    };
  }

  async getPharmacyList() {
    try {
      console.log('[MedSearch] 開始加載藥局列表...');
      const response = await this.callAPI('medCarList', 'get_phar', null);

      let data = response;
      let code = response?.Code;

      if (typeof response === 'string') {
        try {
          data = JSON.parse(response);
          code = data.Code;
        } catch (e) {
          console.error('[MedSearch] 解析字符串失敗:', e);
        }
      }

      if (data && code === 200 && data.Data && Array.isArray(data.Data)) {
        console.log('[MedSearch] ✓ 成功加載藥局列表，共', data.Data.length, '個');
        return data.Data;
      } else {
        const errorMsg = data?.Result || '未知錯誤';
        console.warn('[MedSearch] ✗ 無法加載藥局列表:', errorMsg);
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.error('[MedSearch] 加載藥局列表失敗:', error);
      throw error;
    }
  }

  async getServerListByPharmacy(pharName) {
    try {
      console.log('[MedSearch] 開始加載調劑台列表，藥局:', pharName);
      const response = await this.callAPI('ServerSetting', 'get_serversetting_by_type', ['調劑台']);

      let data = response;
      let code = response?.Code;

      if (typeof response === 'string') {
        try {
          data = JSON.parse(response);
          code = data.Code;
        } catch (e) {
          console.error('[MedSearch] 解析字符串失敗:', e);
        }
      }

      if (data && code === 200 && data.Data && Array.isArray(data.Data)) {
        console.log('[MedSearch] ✓ 成功加載調劑台列表，共', data.Data.length, '個');
        return data.Data;
      } else {
        const errorMsg = data?.Result || '未知錯誤';
        console.warn('[MedSearch] ✗ 無法加載調劑台列表:', errorMsg);
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.error('[MedSearch] 加載調劑台列表失敗:', error);
      throw error;
    }
  }

  async getMedicinesForServer(serverName, serverType) {
    try {
      // 檢查快取
      if (this.cache.medicines[serverName]) {
        console.log('[MedSearch] ✓ 使用快取藥品資料:', serverName);
        return this.cache.medicines[serverName];
      }

      console.log('[MedSearch] 開始加載藥品列表，調劑台:', serverName, '類型:', serverType);

      const apiIp = window.api_ip || 'http://www.ketech.tw:4435/';
      const tempDomain = typeof transform_api_ip_4433 === 'function'
        ? transform_api_ip_4433(apiIp)
        : apiIp;
      const apiUrl = `${tempDomain}api/device/list`;

      const payload = {
        ValueAry: [
          `ServerName=${serverName}`,
          `ServerType=${serverType}`
        ]
      };

      console.log('[MedSearch] 請求 Payload:', payload);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('[MedSearch] device/list API 回應狀態:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[MedSearch] device/list API 錯誤:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('[MedSearch] device/list API 回應資料:', data);

      // 驗證回應結構
      if (data && data.Code === 200 && data.Data && Array.isArray(data.Data)) {
        console.log('[MedSearch] ✓ 成功加載藥品列表，共', data.Data.length, '個');

        // 提取唯一的設備（按代碼去重）
        const uniqueMedicines = [];
        const seenCodes = new Set();

        data.Data.forEach(medicine => {
          if (medicine.Code && medicine.Code.trim() && !seenCodes.has(medicine.Code)) {
            seenCodes.add(medicine.Code);
            uniqueMedicines.push(medicine);
          }
        });

        // 按代碼排序
        uniqueMedicines.sort((a, b) => (a.Code || '').localeCompare(b.Code || ''));

        // 保存到快取
        this.cache.medicines[serverName] = uniqueMedicines;

        return uniqueMedicines;
      } else {
        const errorMsg = data?.Result || '未知錯誤';
        console.warn('[MedSearch] ✗ 無法加載藥品列表:', errorMsg);
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.error('[MedSearch] 加載藥品列表失敗:', error);
      throw error;
    }
  }

  async callAPI(apiType, method, valueAry) {
    try {
      const apiIp = window.api_ip || 'http://www.ketech.tw:4435/';
      const tempDomain = typeof transform_api_ip_4433 === 'function'
        ? transform_api_ip_4433(apiIp)
        : apiIp;
      const apiUrl = `${tempDomain}api/${apiType}/${method}`;
      console.log('[MedSearch] 調用 API:', apiUrl);

      const payload = {
        ValueAry: valueAry || [],
      };

      console.log('[MedSearch] 請求 Payload:', payload);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('[MedSearch] API 回應狀態:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[MedSearch] API 錯誤:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('[MedSearch] API 回應資料:', data);
      return data;
    } catch (error) {
      console.error('[MedSearch] 調用 API 失敗:', error);
      throw error;
    }
  }

  async lightOn(serverName, serverType, medicineCode, lightDuration = '180') {
    try {
      console.log('[MedSearch] 觸發亮燈:', { serverName, medicineCode });

      const apiIp = window.api_ip || 'http://www.ketech.tw:4435/';
      const tempDomain = typeof transform_api_ip_4433 === 'function'
        ? transform_api_ip_4433(apiIp)
        : apiIp;
      const apiUrl = `${tempDomain}api/device/light_on_by_code`;

      const payload = {
        ServerName: serverName,
        ServerType: serverType,
        ValueAry: [medicineCode, '40,255,40', lightDuration],
      };

      console.log('[MedSearch] 亮燈 Payload:', payload);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[MedSearch] 亮燈 API 錯誤:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('[MedSearch] 亮燈 API 回應:', data);
      return data;
    } catch (error) {
      console.error('[MedSearch] 亮燈失敗:', error);
      throw error;
    }
  }

  clearMedicineCache() {
    console.log('[MedSearch] 清除藥品快取');
    this.cache.medicines = {};
  }
}

// 建立全域 API 處理器實例
const apiHandlers = new APIHandlers();

// ===== API 監控腳本 =====
// 功能：攔截 light_on_by_code API，記錄完整的時間和數據
// 存儲位置：localStorage -> light_on_api_logs

(function () {
  // 配置
  const CONFIG = {
    MAX_LOGS: 300,
    LOG_KEY: 'light_on_api_logs',
    API_PATTERN: 'api/device/light_on_by_code',
    RETENTION_HOURS: 24,
  };

  // 初始化監控
  function initMonitor() {
    // 覆蓋全局 fetch
    const originalFetch = window.fetch;
    window.fetch = function (...args) {
      const url = args[0];
      const isSwitchLightAPI = typeof url === 'string' && url.includes(CONFIG.API_PATTERN);

      if (isSwitchLightAPI) {
        return monitorFetch.call(this, originalFetch, args);
      }
      return originalFetch.apply(this, args);
    };

    // 頁面加載時清理過期數據
    // cleanExpiredLogs();
    console.log('[API Monitor] 已初始化監控');
  }

  // 監控 fetch 請求
  function monitorFetch(originalFetch, args) {
    const url = args[0];
    const options = args[1] || {};
    const sendTime = performance.now();
    const sendDate = new Date();

    // 保存原始 body
    let requestPayload = null;
    if (options.body) {
      try {
        requestPayload = JSON.parse(options.body);
      } catch (e) {
        requestPayload = options.body;
      }
    }

    return originalFetch.apply(window, args)
      .then((response) => {
        const receiveTime = performance.now();
        return response.json().then((data) => {
          recordLog({
            sendTime: sendTime,
            sendDate: sendDate,
            receiveTime: receiveTime,
            url: url,
            requestPayload: requestPayload,
            response: data,
          });
          return new Response(JSON.stringify(data), {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
          });
        });
      })
      .catch((error) => {
        const receiveTime = performance.now();
        recordLog({
          sendTime: sendTime,
          sendDate: sendDate,
          receiveTime: receiveTime,
          url: url,
          requestPayload: requestPayload,
          response: null,
          error: error.message,
        });
        throw error;
      });
  }

  // 記錄日誌
  function recordLog(logData) {
    const frontendDuration = logData.receiveTime - logData.sendTime;
    const apiDuration = logData.response?.TimeTaken
      ? parseFloat(logData.response.TimeTaken)
      : 0;
    const extraDuration = frontendDuration - apiDuration;

    const log = {
      id: generateId(),
      timestamp: Date.now(),
      sendTime: logData.sendTime,
      receiveTime: logData.receiveTime,
      sendDate: logData.sendDate,
      duration_frontend: parseFloat(frontendDuration.toFixed(3)),
      duration_api: apiDuration,
      duration_extra: parseFloat(Math.max(0, extraDuration).toFixed(3)),
      status: logData.response?.Code === 200 ? 'success' : 'failed',
      code: logData.response?.Code || null,
      result: logData.response?.Result || (logData.error ? `Error: ${logData.error}` : 'Unknown'),
      payload: logData.requestPayload,
      response: logData.response,
      url: logData.url,
    };

    saveLog(log);
    console.log('[API Monitor] 記錄:', log);
  }

  // 保存日誌
  function saveLog(log) {
    try {
      let logs = getLogs();
      logs.unshift(log); // 最新的在最前面
      logs = logs.slice(0, CONFIG.MAX_LOGS); // 只保留最近的 N 筆
      localStorage.setItem(CONFIG.LOG_KEY, JSON.stringify(logs));
    } catch (e) {
      console.error('[API Monitor] 存儲失敗:', e);
    }
  }

  // 取得所有日誌
  function getLogs() {
    try {
      const logsJson = localStorage.getItem(CONFIG.LOG_KEY);
      return logsJson ? JSON.parse(logsJson) : [];
    } catch (e) {
      console.error('[API Monitor] 讀取失敗:', e);
      return [];
    }
  }

  // 清理過期日誌
  function cleanExpiredLogs() {
    try {
      let logs = getLogs();
      const nowTime = Date.now();
      const retentionMs = CONFIG.RETENTION_HOURS * 60 * 60 * 1000;

      const validLogs = logs.filter((log) => {
        return nowTime - log.timestamp < retentionMs;
      });

      if (validLogs.length < logs.length) {
        localStorage.setItem(CONFIG.LOG_KEY, JSON.stringify(validLogs));
        console.log(
          `[API Monitor] 已清理 ${logs.length - validLogs.length} 筆過期日誌`
        );
      }
    } catch (e) {
      console.error('[API Monitor] 清理失敗:', e);
    }
  }

  // 生成唯一 ID
  function generateId() {
    return `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // 初始化
  initMonitor();

  // 暴露全局方法（供監控頁面使用）
  window.APIMonitor = {
    getLogs: getLogs,
    clearAllLogs: function () {
      try {
        localStorage.removeItem(CONFIG.LOG_KEY);
        console.log('[API Monitor] 已清除所有日誌');
        return true;
      } catch (e) {
        console.error('[API Monitor] 清除失敗:', e);
        return false;
      }
    },
    getLogStats: function () {
      const logs = getLogs();
      if (logs.length === 0) {
        return {
          total: 0,
          success: 0,
          failed: 0,
          avgFrontendDuration: 0,
          avgExtraDuration: 0,
        };
      }

      const stats = {
        total: logs.length,
        success: logs.filter((l) => l.status === 'success').length,
        failed: logs.filter((l) => l.status === 'failed').length,
        avgFrontendDuration: 0,
        avgExtraDuration: 0,
      };

      stats.avgFrontendDuration = parseFloat(
        (
          logs.reduce((sum, l) => sum + l.duration_frontend, 0) / logs.length
        ).toFixed(3)
      );
      stats.avgExtraDuration = parseFloat(
        (logs.reduce((sum, l) => sum + l.duration_extra, 0) / logs.length).toFixed(3)
      );

      return stats;
    },
  };
})();

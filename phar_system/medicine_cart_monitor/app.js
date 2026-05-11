// ===== 監控面板應用邏輯 =====

class APIMonitorApp {
  constructor() {
    this.logs = [];
    this.currentDetailLog = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadAndRenderLogs();
    // 每2秒自動刷新
    setInterval(() => this.loadAndRenderLogs(), 2000);
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

    return `
      <div class="log-item ${statusClass}">
        <div class="log-main">
          <div class="log-time">
            <span class="status-icon">${statusIcon}</span>
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
      alert('已清除所有數據');
    }
  }

  formatTime(date) {
    if (!date) return '-';
    // 如果是字符串，轉換為 Date 對象
    if (typeof date === 'string') {
      date = new Date(date);
    }
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ms = String(date.getMilliseconds()).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${ms}`;
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

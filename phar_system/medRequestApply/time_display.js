let timeDisplayInterval = null;

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateTimeDisplay() {
  const now = new Date();
  const dateElement = document.getElementById('time-display-date');
  const timeElement = document.getElementById('time-display-time');

  if (dateElement) {
    dateElement.textContent = formatDate(now);
  }

  if (timeElement) {
    timeElement.textContent = formatTime(now);
  }
}

function createTimeDisplayHTML() {
  const now = new Date();
  const formattedDate = formatDate(now);
  const formattedTime = formatTime(now);

  return `
    <div style="
      background-color: white;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 24px;
    ">
      <div style="display: flex; align-items: center; gap: 8px;">
        <svg style="width: 20px; height: 20px; color: #6b7280; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <div style="display: flex; flex-direction: column;">
          <label style="
            font-size: 12px;
            color: #6b7280;
            font-weight: 500;
            margin-bottom: 4px;
            font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
          ">日期</label>
          <span
            id="time-display-date"
            style="
              font-size: 16px;
              color: #1f2937;
              font-weight: 600;
              font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
              min-width: 120px;
            "
          >${formattedDate}</span>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 8px;">
        <svg style="width: 20px; height: 20px; color: #6b7280; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div style="display: flex; flex-direction: column;">
          <label style="
            font-size: 12px;
            color: #6b7280;
            font-weight: 500;
            margin-bottom: 4px;
            font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
          ">時間</label>
          <span
            id="time-display-time"
            style="
              font-size: 16px;
              color: #1f2937;
              font-weight: 600;
              font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
              min-width: 100px;
            "
          >${formattedTime}</span>
        </div>
      </div>
    </div>
  `;
}

function createTimeDisplay() {
  const div = document.createElement('div');
  div.innerHTML = createTimeDisplayHTML();

  // Start updating time every second
  if (timeDisplayInterval) {
    clearInterval(timeDisplayInterval);
  }
  timeDisplayInterval = setInterval(updateTimeDisplay, 1000);

  return div;
}

// Clean up interval when page unloads
window.addEventListener('beforeunload', () => {
  if (timeDisplayInterval) {
    clearInterval(timeDisplayInterval);
  }
});

var IsLogged = (function() {
  try {
    const user_session = sessionStorage.getItem('login_json');
    return user_session ? true : false;
  } catch (err) {
    return false;
  }
})();

async function popup_login_finished() {
  console.log("登入完成");
  if (typeof popup_login_div !== 'undefined') {
    popup_login_div.Set_Visible(false);
  }

  // Re-fetch stations after successful login
  if (typeof fetchStations === 'function') {
    const stations = await fetchStations();
    if (stations.length > 0) {
      const stationContainer = document.getElementById('station-selector-container');
      if (stationContainer) {
        stationContainer.innerHTML = createStationSelectorHTML();

        // 如果自動匹配成功，觸發選擇事件
        if (stationSelectorState.matchedStation) {
          await selectStation(stationSelectorState.matchedStation.name);
        } else {
          // 否則附加事件監聽
          const headerButton = stationContainer.querySelector('#station-selector-header');
          if (headerButton) {
            headerButton.addEventListener('click', toggleStationExpanded);
          }

          const buttons = stationContainer.querySelectorAll('.station-selector-button');
          buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              const stationName = btn.getAttribute('data-station');
              selectStation(stationName);
            });
          });
        }
      }
    }
  }

}

function create_navbar() {
  const navbar = document.createElement('div');
  navbar.className = 'navbar';

  const user_session = JSON.parse(sessionStorage.getItem("user_session"));
  const user_name = user_session?.Name || "使用者";

  navbar.innerHTML = `
    <div class="navbar-left">
      <button class="navbar-btn-system" title="返回首頁">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
        </svg>
      </button>
      <div class="navbar-title">
        <h1>新增換領單</h1>
        <p>鴻森智能科技</p>
      </div>
    </div>
    <div class="navbar-right">
      <button class="navbar-btn-action">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" style="margin-right: 8px;">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
        繁體中文
      </button>
      <button class="navbar-btn-logout" id="logout-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" style="margin-right: 8px;">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" x2="9" y1="12" y2="12"></line>
        </svg>
        登出
      </button>
    </div>
  `;

  // 返回首頁按鈕事件
  navbar.querySelector('.navbar-btn-system').addEventListener('click', () => {
    const pathLevel = window.location.pathname.split('/').length - 3;
    let frontpage_path = "";
    for (let i = 0; i < pathLevel; i++) {
      frontpage_path += "../";
    }
    frontpage_path += "frontpage/";
    window.location.href = frontpage_path;
  });

  // 登出按鈕事件
  navbar.querySelector('#logout-btn').addEventListener('click', () => {
    if (confirm('確定要登出嗎？')) {
      sessionStorage.clear();
      // 顯示登入弹窗
      if (typeof popup_login_div !== 'undefined') {
        popup_login_div.Show();
      }
    }
  });

  return navbar;
}

async function get_main() {
  const main_div = document.createElement('div');
  main_div.id = 'main';
  main_div.className = 'main-wrapper';
  main_div.innerHTML = `
    <div class="main-content" style="display: flex; flex-direction: column; gap: 24px;">
      <div id="time-display-container"></div>
      <div id="station-selector-container"></div>
      <div id="drug-selector-container"></div>
    </div>
  `;

  // Add time display
  const timeDisplay = createTimeDisplay();
  const timeContainer = main_div.querySelector('#time-display-container');
  if (timeContainer) {
    timeContainer.appendChild(timeDisplay);
  }

  // Add station selector
  const stationSelector = await createStationSelector();
  const stationContainer = main_div.querySelector('#station-selector-container');
  if (stationContainer) {
    stationContainer.appendChild(stationSelector);
  }

  // Add drug selector
  const drugSelectorContainer = main_div.querySelector('#drug-selector-container');
  if (drugSelectorContainer) {
    drugSelectorContainer.innerHTML = createDrugSelector();
    // 初始化藥品表格
    updateDrugSelectorUI();
  }

  return main_div;
}

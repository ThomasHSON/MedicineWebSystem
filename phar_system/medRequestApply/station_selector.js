let stationSelectorState = {
  stations: [],
  selectedStation: '',
  isExpanded: false,
  matchedStation: null
};

async function fetchStations() {
  try {
    const request = {
      ValueAry: ['調劑台']
    };

    // Get base API URL from global session_url (initialized by LoadAPIServer)
    let baseUrl = '';
    if (typeof session_url !== 'undefined' && session_url) {
      baseUrl = session_url.replace('/api/session', '');
      if (!baseUrl.endsWith('/')) {
        baseUrl += '/';
      }
    }

    if (!baseUrl) {
      console.error('session_url not initialized. Call LoadAPIServer() first.');
      return [];
    }

    // Ensure baseUrl ends with / and remove duplicate / from endpoint
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/';
    }

    const fullUrl = `${baseUrl}api/ServerSetting/get_serversetting_by_type`;
    console.log('Fetching stations from:', fullUrl);

    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    });

    console.log('Fetch response status:', response.status);
    const jsonResponse = await response.json();
    console.log('Fetch response data:', jsonResponse);

    if (jsonResponse && jsonResponse.Code === 200 && jsonResponse.Data) {
      console.log('Stations found:', jsonResponse.Data.length);
      stationSelectorState.stations = jsonResponse.Data;

      // 自動匹配 Employer 值到護理站 name
      const employer = sessionStorage.getItem('loggedEmployer');
      console.log('Current Employer:', employer);

      if (employer) {
        const matched = jsonResponse.Data.find(station => station.name === employer);
        if (matched) {
          stationSelectorState.matchedStation = matched;
          stationSelectorState.selectedStation = matched.name;
          console.log('Matched station:', matched.name);
        } else {
          console.warn('No matching station found for Employer:', employer);
        }
      }

      return jsonResponse.Data;
    } else {
      console.error('Failed to fetch stations - invalid response:', jsonResponse);
      return [];
    }
  } catch (error) {
    console.error('Error fetching stations - exception:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    });
    return [];
  }
}

async function selectStation(stationName) {
  stationSelectorState.selectedStation = stationName;

  // Fetch device items for the selected station
  if (typeof fetchDeviceItems === 'function') {
    if (typeof drugSelectorState !== 'undefined') {
      drugSelectorState.isLoading = true;
      if (typeof updateDrugSelectorUI === 'function') {
        updateDrugSelectorUI();
      }
    }

    await fetchDeviceItems(stationName);

    if (typeof updateDrugSelectorUI === 'function') {
      updateDrugSelectorUI();
    }
  }

  const event = new CustomEvent('stationSelected', { detail: { station: stationName } });
  document.dispatchEvent(event);
}

function toggleStationExpanded() {
  stationSelectorState.isExpanded = !stationSelectorState.isExpanded;
  updateStationSelectorUI();
}

function updateStationSelectorUI() {
  const headerButton = document.getElementById('station-selector-header');
  const contentDiv = document.getElementById('station-selector-content');
  const outerDiv = document.getElementById('station-selector-outer');
  const selectedBadge = document.getElementById('station-selected-badge');
  const chevron = document.getElementById('station-selector-chevron');

  if (!headerButton || !contentDiv) return;

  // Update content visibility
  if (stationSelectorState.isExpanded) {
    contentDiv.style.maxHeight = '500px';
    contentDiv.style.opacity = '1';
    if (outerDiv) {
      outerDiv.style.border = '1px solid #e5e7eb';
    }
    if (headerButton) {
      headerButton.style.borderBottom = '1px solid #e5e7eb';
    }
    // Show down chevron
    if (chevron) {
      chevron.style.transform = 'rotate(0deg)';
      chevron.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>';
    }
  } else {
    contentDiv.style.maxHeight = '0';
    contentDiv.style.opacity = '0';
    if (outerDiv) {
      outerDiv.style.border = 'none';
      outerDiv.style.borderRadius = '0';
      outerDiv.style.backgroundColor = 'transparent';
    }
    if (headerButton) {
      headerButton.style.borderBottom = 'none';
    }
    // Show right chevron
    if (chevron) {
      chevron.style.transform = 'rotate(0deg)';
      chevron.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>';
    }
  }

  // Update selected badge
  if (selectedBadge) {
    if (stationSelectorState.selectedStation) {
      selectedBadge.textContent = stationSelectorState.selectedStation;
      selectedBadge.style.display = 'inline-block';
    } else {
      selectedBadge.style.display = 'none';
    }
  }

  // Update button styles
  const buttons = document.querySelectorAll('.station-selector-button');
  buttons.forEach(btn => {
    const stationName = btn.getAttribute('data-station');
    if (stationName === stationSelectorState.selectedStation) {
      btn.style.backgroundColor = '#eff6ff';
      btn.style.color = '#1f2937';
      btn.style.borderColor = '#2563eb';
      btn.style.borderWidth = '2px';
      btn.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
      btn.style.fontWeight = '600';
    } else {
      btn.style.backgroundColor = 'white';
      btn.style.color = '#374151';
      btn.style.borderColor = '#d1d5db';
      btn.style.borderWidth = '1px';
      btn.style.boxShadow = 'none';
      btn.style.fontWeight = '500';
    }
  });
}

function createStationSelectorHTML() {
  if (stationSelectorState.matchedStation) {
    return `
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 8px; min-width: 80px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table w-5 h-5">
          <path d="M12 3v18"></path><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
          <h3 style="
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            color: #1f2937;
            font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
            white-space: nowrap;
          ">護理站：</h3>
        </div>
        <div style="
          padding: 8px 16px;
          background-color: #eff6ff;
          border: 2px solid #2563eb;
          border-radius: 6px;
          color: #1f2937;
          font-weight: 600;
          font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
          font-size: 14px;
          white-space: nowrap;
        ">
          ${stationSelectorState.matchedStation.name}
        </div>
      </div>
    `;
  }

  const stationsHTML = stationSelectorState.stations
    .map(station => `
      <button
        class="station-selector-button"
        data-station="${station.name || station.id}"
        style="
          min-width: 120px;
          padding: 10px 16px;
          border-radius: 6px;
          border: 1px solid #d1d5db;
          background-color: white;
          color: #374151;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
          font-size: 14px;
        "
        onmouseover="this.style.borderColor='#9ca3af'; this.style.backgroundColor='#f9fafb'"
        onmouseout="this.style.borderColor='#d1d5db'; this.style.backgroundColor='white'"
      >
        ${station.name || station.id}
      </button>
    `)
    .join('');

  return `
    <div id="station-selector-outer" style="
      background-color: white;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      overflow: hidden;
    ">
      <div
        id="station-selector-header"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          cursor: pointer;
          background-color: white;
          border-bottom: 1px solid #e5e7eb;
          user-select: none;
        "
        onmouseover="this.style.backgroundColor='#f9fafb'"
        onmouseout="this.style.backgroundColor='white'"
      >
        <div style="display: flex; align-items: center; gap: 12px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-table w-5 h-5">
          <path d="M12 3v18"></path><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
          <div>
            <h3 style="
              margin: 0;
              font-size: 18px;
              font-weight: 600;
              color: #1f2937;
              font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
            ">護理站</h3>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span
            id="station-selected-badge"
            style="
              display: none;
              padding: 4px 12px;
              background-color: #dbeafe;
              color: #1e40af;
              font-size: 13px;
              font-weight: 500;
              border-radius: 16px;
              font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
            "
          ></span>
          <svg
            id="station-selector-chevron"
            style="
              width: 20px;
              height: 20px;
              color: #6b7280;
              transition: transform 0.2s ease;
              flex-shrink: 0;
            "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <div
        id="station-selector-content"
        style="
          max-height: 500px;
          opacity: 1;
          overflow: hidden;
          transition: all 0.3s ease;
          padding: 16px;
        "
      >
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          ${stationsHTML}
        </div>
      </div>
    </div>
  `;
}

async function createStationSelector() {
  const div = document.createElement('div');

  div.innerHTML = `
    <div style="
      background-color: white;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      padding: 16px;
      text-align: center;
      color: #6b7280;
    ">
      載入護理站中...
    </div>
  `;

  console.log("createStationSelector: fetching stations...");
  const stations = await fetchStations();
  console.log("createStationSelector: fetched stations:", stations);

  if (stations && stations.length > 0) {
    console.log("createStationSelector: rendering station selector with", stations.length, "stations");
    div.innerHTML = createStationSelectorHTML();

    // 如果已自動匹配到護理站，觸發選擇事件
    if (stationSelectorState.matchedStation) {
      console.log("createStationSelector: matched station found, triggering selection");
      await selectStation(stationSelectorState.matchedStation.name);
    } else {
      // 未自動匹配時，自動選擇第一個護理站
      if (stations.length > 0) {
        const firstStation = stations[0].name || stations[0].id;
        console.log("createStationSelector: auto-selecting first station:", firstStation);
        stationSelectorState.selectedStation = firstStation;
        await selectStation(firstStation);
        div.innerHTML = createStationSelectorHTML();
      } else {
        // 附加事件監聽
        const headerButton = div.querySelector('#station-selector-header');
        if (headerButton) {
          headerButton.addEventListener('click', toggleStationExpanded);
          console.log("createStationSelector: header button listener attached");
        }

        const buttons = div.querySelectorAll('.station-selector-button');
        console.log("createStationSelector: found", buttons.length, "station buttons");
        buttons.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const stationName = btn.getAttribute('data-station');
            console.log("Station selected:", stationName);
            selectStation(stationName);
          });
        });
      }
    }
  } else {
    console.warn("createStationSelector: no stations returned or stations is empty");
    // 如果沒有護理站，使用默認值
    stationSelectorState.selectedStation = '測試護理站';
    await selectStation('測試護理站');
  }

  return div;
}

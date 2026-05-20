var popup_login_div;
var popup_login_finishedEvent = [];

async function popup_login_init() {
  // 初始化 API Server 配置
  try {
    console.log("========== 開始 LoadAPIServer ==========");
    console.log("LoadAPIServer 前 session_url:", session_url);

    await LoadAPIServer();

    console.log("========== LoadAPIServer 完成 ==========");
    console.log("LoadAPIServer 後 session_url:", session_url);
    console.log("APIServer 資料:", APIServer);
  } catch (err) {
    console.error("========== LoadAPIServer 失敗 ==========");
    console.error("錯誤:", err);
  }

  // 創建 HTML 結構
  const loginHTML = `
    <div id="popup_login_overlay" style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: white;
      display: flex;
      flex-direction: column;
      z-index: 1000;
      pointer-events: auto;
    ">
      <div class="nav_logo_container" style="
        display: flex;
        align-items: center;
        padding: 20px 32px;
        border-bottom: 1px solid #e5e7eb;
      ">
        <img class="nav_logo_img" alt="鴻森智能科技logo" src="../image/hs_logo.png" style="
          max-width: 60px;
          height: auto;
          margin-right: 20px;
        ">
        <div class="nav_content">
          <h1 class="nav_content_cht_name" style="
            font-size: 18px;
            font-weight: bold;
            color: #111827;
            margin: 0;
            font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
          ">鴻森智能科技</h1>
          <h2 class="nav_content_name" style="
            font-size: 12px;
            color: #6b7280;
            margin: 4px 0 0 0;
            font-family: Arial, sans-serif;
            font-weight: normal;
          ">HONGSEN Intelligent Technology Co.,Ltd.</h2>
        </div>
      </div>

      <div style="
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      ">
        <div style="
          max-width: 448px;
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
        ">
          <div style="
            background-color: white;
            padding: 48px 32px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
          ">
            <h2 style="
              text-align: center;
              font-size: 24px;
              font-weight: bold;
              color: #111827;
              margin-top: 0;
              margin-bottom: 24px;
              font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
            ">新增換領單</h2>

          <form id="login_form" style="display: flex; flex-direction: column; gap: 24px;">
            <div id="error_container"></div>

            <div>
              <label for="login_id" style="
                display: block;
                font-size: 14px;
                font-weight: 500;
                color: #374151;
                margin-bottom: 6px;
                font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
              ">帳號</label>
              <input
                type="text"
                id="login_id"
                required
                style="
                  width: 100%;
                  border: 1px solid #d1d5db;
                  border-radius: 6px;
                  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                  padding: 10px 12px;
                  font-size: 14px;
                  font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                  box-sizing: border-box;
                  height: 36px;
                  pointer-events: auto;
                "
                onmouseover="this.style.borderColor='#9ca3af'"
                onmouseout="this.style.borderColor='#d1d5db'"
                onfocus="this.style.outline='none'; this.style.borderColor='#3b82f6'; this.style.boxShadow='0 0 0 3px rgba(59, 130, 246, 0.1)'"
                onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='0 1px 2px rgba(0, 0, 0, 0.05)'"
              />
            </div>

            <div>
              <label for="login_password" style="
                display: block;
                font-size: 14px;
                font-weight: 500;
                color: #374151;
                margin-bottom: 6px;
                font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
              ">密碼</label>
              <input
                type="password"
                id="login_password"
                required
                style="
                  width: 100%;
                  border: 1px solid #d1d5db;
                  border-radius: 6px;
                  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                  padding: 10px 12px;
                  font-size: 14px;
                  font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                  box-sizing: border-box;
                  height: 36px;
                  pointer-events: auto;
                "
                onmouseover="this.style.borderColor='#9ca3af'"
                onmouseout="this.style.borderColor='#d1d5db'"
                onfocus="this.style.outline='none'; this.style.borderColor='#3b82f6'; this.style.boxShadow='0 0 0 3px rgba(59, 130, 246, 0.1)'"
                onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='0 1px 2px rgba(0, 0, 0, 0.05)'"
              />
            </div>

            <button
              type="submit"
              id="login_btn"
              style="
                width: 100%;
                padding: 8px 16px;
                border: none;
                border-radius: 6px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                font-size: 14px;
                font-weight: 500;
                color: white;
                background-color: #2563eb;
                cursor: pointer;
                font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
                transition: background-color 0.2s;
                height: 36px;
                pointer-events: auto;
              "
              onmouseover="this.style.backgroundColor='#1d4ed8'"
              onmouseout="this.style.backgroundColor='#2563eb'"
            >登入</button>
          </form>
        </div>
      </div>

      <div class="under-line" style="
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        padding: 0;
        color: #4b5563;
        font-size: 14px;
        background-color: #ffffff;
        z-index: 50;
        border-top: 1px solid #e5e7eb;
      ">
        <b style="font-weight: 400;">Copyright ©2024 鴻森智能科技</b>
      </div>
    </div>
  `;

  // 創建容器
  const container = document.createElement('div');
  container.innerHTML = loginHTML;
  popup_login_div = container.firstElementChild;
  // 確保登入弹窗可以接收焦點
  popup_login_div.style.outline = 'none';
  document.body.appendChild(popup_login_div);

  // 處理表單 Tab 鍵
  const loginForm = document.getElementById('login_form');
  const loginId = document.getElementById('login_id');
  const loginPassword = document.getElementById('login_password');
  const loginBtn = document.getElementById('login_btn');

  loginForm.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (document.activeElement === loginId && !e.shiftKey) {
        e.preventDefault();
        loginPassword.focus();
      } else if (document.activeElement === loginPassword && !e.shiftKey) {
        e.preventDefault();
        loginBtn.focus();
      } else if (document.activeElement === loginBtn && e.shiftKey) {
        e.preventDefault();
        loginPassword.focus();
      } else if (document.activeElement === loginPassword && e.shiftKey) {
        e.preventDefault();
        loginId.focus();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      loginForm.dispatchEvent(new Event('submit'));
    }
  });

  // 綁定表單提交事件
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = loginId.value;
    const password = loginPassword.value;
    const btn = document.getElementById('login_btn');

    if (!id || !password) {
      showError('請輸入帳號和密碼');
      return;
    }

    btn.disabled = true;
    btn.textContent = '登入中...';

    try {
      const session_login = await login(id, password);

      if (!session_login || session_login.Code != 200) {
        const errorMsg = session_login?.Result || '登入失敗，請檢查帳號和密碼';
        showError(errorMsg);
        btn.disabled = false;
        btn.textContent = '登入';
        return;
      }

      // 保存登入信息
      if (session_login.Data) {
        sessionStorage.setItem("login_json", JSON.stringify(session_login.Data));
        sessionStorage.setItem('GUuser', session_login.Data.GUID || session_login.Data.GUuser || '');
        sessionStorage.setItem('loggeduser', session_login.Data.user || session_login.Data.ID || '');
        sessionStorage.setItem('loggedPassword', session_login.Data.Password || '');
        sessionStorage.setItem('loggedName', session_login.Data.Name || '');
        sessionStorage.setItem('loggedEmployer', session_login.Data.Employer || '');
        sessionStorage.setItem('loggedlevel', session_login.Data.level || '');
        sessionStorage.setItem('loggedTime', session_login.Data.loginTime || '');
        sessionStorage.setItem('loggedID', session_login.Data.ID || '');
        sessionStorage.setItem('color', session_login.Data.color || '');

        const greeting = `${session_login.Data.Name} 登入成功!`;
        alert(greeting);

        // 觸發登入完成事件
        for (let i = 0; i < popup_login_finishedEvent.length; i++) {
          if (typeof popup_login_finishedEvent[i] == "function") {
            await popup_login_finishedEvent[i]();
          }
        }

        // 隱藏登入畫面
        popup_login_div.style.display = 'none';
      }
    } catch (err) {
      console.error("Login error:", err);
      showError('系統錯誤，請稍後再試');
      btn.disabled = false;
      btn.textContent = '登入';
    }
  });

  // Show 和 Hide 方法
  popup_login_div.Show = async function() {
    this.style.display = 'flex';
    // 重置表單
    const form = document.getElementById('login_form');
    if (form) {
      form.reset();
    }
    // 清空錯誤訊息
    const errorContainer = document.getElementById('error_container');
    if (errorContainer) {
      errorContainer.innerHTML = '';
    }
    // 重置登入按鈕
    const btn = document.getElementById('login_btn');
    if (btn) {
      btn.disabled = false;
      btn.textContent = '登入';
    }
    // 設置焦點到帳號輸入框
    const idInput = document.getElementById('login_id');
    if (idInput) {
      idInput.focus();
    }
  };

  popup_login_div.Hide = async function() {
    this.style.display = 'none';
  };

  popup_login_div.Close = async function() {
    this.style.display = 'none';
  };

  popup_login_div.Set_Visible = function(visible) {
    this.style.display = visible ? 'flex' : 'none';
  };

  return popup_login_div;
}

function showError(message) {
  const errorContainer = document.getElementById('error_container');
  errorContainer.innerHTML = `
    <div style="
      background-color: #fef2f2;
      padding: 16px;
      border-radius: 6px;
      display: flex;
      align-items: flex-start;
    ">
      <svg style="
        width: 20px;
        height: 20px;
        color: #dc2626;
        margin-top: 2px;
        margin-right: 12px;
        flex-shrink: 0;
      " fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <p style="
        font-size: 14px;
        color: #7f1d1d;
        margin: 0;
        font-family: 'Microsoft JhengHei', '微軟正黑體', sans-serif;
      ">${message}</p>
    </div>
  `;
}

async function popup_login_content_submit_button_click(event) {
  event.preventDefault();

  const user = document.querySelector("#popup_login_content_user_input").value;
  const password = document.querySelector("#popup_login_content_pwd_input").value;
  const loginBtn = document.querySelector("#popup_login_content_submit_button");

  if (user === "" || password === "") {
    alert("請輸入帳號和密碼！");
    return false;
  }

  loginBtn.disabled = true;
  loginBtn.textContent = "登入中...";

  try {
    const session_login = await login(user, password);
    console.log(session_login);

    if (!session_login || session_login.Code != 200) {
      loginBtn.disabled = false;
      loginBtn.textContent = "登入";
      const errorMsg = session_login?.Result || "登入失敗，請檢查帳號和密碼";
      alert(errorMsg);
      return false;
    }

    loginBtn.disabled = false;
    loginBtn.textContent = "登入";

    // 保存登入信息
    if (session_login.Data) {
      sessionStorage.setItem("login_json", JSON.stringify(session_login.Data));
      sessionStorage.setItem('GUuser', session_login.Data.GUID || session_login.Data.GUuser || '');
      sessionStorage.setItem('loggeduser', session_login.Data.user || '');
      sessionStorage.setItem('loggedPassword', session_login.Data.Password || '');
      sessionStorage.setItem('loggedName', session_login.Data.Name || '');
      sessionStorage.setItem('loggedEmployer', session_login.Data.Employer || '');
      sessionStorage.setItem('loggedlevel', session_login.Data.level || '');
      sessionStorage.setItem('loggedTime', session_login.Data.loginTime || '');
      sessionStorage.setItem('loggedID', session_login.Data.ID || '');
      sessionStorage.setItem('color', session_login.Data.color || '');

      const greeting = `${session_login.Data.Name} 登入成功!`;
      alert(greeting);
    }

    return true;
  } catch (err) {
    console.error("Login error:", err);
    loginBtn.disabled = false;
    loginBtn.textContent = "登入";
    alert("登入失敗，請檢查網路連線或聯絡工程師");
    return false;
  }
}

async function login(user, password) {
  const loginUrl = `${session_url}/login`;
  const param = {
    "Data": {
      "ID": user,
      "Password": password
    }
  };
  const response = await postDataToAPI(loginUrl, param);
  return response;
}

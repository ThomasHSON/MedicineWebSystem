let deliver_cart_staff = null;
function set_deliver_login() {
  let body = document.querySelector("body");

  let deliver_login_container = document.createElement("div");
  deliver_login_container.classList.add("deliver_login_container");

  let deliver_login_container_background = document.createElement("div");
  deliver_login_container_background.classList.add(
    "deliver_login_container_background"
  );
  let deliver_login_container_div = set_main_deliver_div();

  deliver_login_container.appendChild(deliver_login_container_background);
  deliver_login_container.appendChild(deliver_login_container_div);

  body.appendChild(deliver_login_container);
}
function set_main_deliver_div() {
  let deliver_login_container_div = document.createElement("div");
  deliver_login_container_div.classList.add("deliver_login_container_div");

  let deliver_login_container_close_btn = document.createElement("img");
  deliver_login_container_close_btn.classList.add(
    "deliver_login_container_close_btn"
  );
  deliver_login_container_close_btn.src = "../image/close.png";
  deliver_login_container_close_btn.addEventListener("click", () => {
    deliver_login_div_toggle(false);
  });
  deliver_login_container_div.appendChild(deliver_login_container_close_btn);

  // Title
  let title = document.createElement("h2");
  title.classList.add("deliver_login_title");
  title.textContent = "交車人員登入";
  deliver_login_container_div.appendChild(title);

  // 帳號 label + input
  let accountLabel = document.createElement("label");
  accountLabel.classList.add("deliver_login_label");
  accountLabel.textContent = "帳號";
  deliver_login_container_div.appendChild(accountLabel);

  let accountInput = document.createElement("input");
  accountInput.type = "text";
  accountInput.classList.add("deliver_login_input");
  accountInput.classList.add("deliver_login_account");
  deliver_login_container_div.appendChild(accountInput);

  // 密碼 label + input
  let passwordLabel = document.createElement("label");
  passwordLabel.classList.add("deliver_login_label");
  passwordLabel.textContent = "密碼";
  deliver_login_container_div.appendChild(passwordLabel);

  let passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.classList.add("deliver_login_input");
  passwordInput.classList.add("deliver_login_password");
  deliver_login_container_div.appendChild(passwordInput);

  // 登入按鈕
  let loginBtn = document.createElement("button");
  loginBtn.classList.add("deliver_login_button");
  loginBtn.textContent = "登入";
  loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await get_deliver_login_staff_info();
  });
  deliver_login_container_div.appendChild(loginBtn);

  // ★★ 讓 Enter 可以跳下一個 ★★
  const focusable = [accountInput, passwordInput, loginBtn];

  focusable.forEach((el, idx) => {
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // 防止表單亂觸發
        loginBtn.click(); // 最後一個就觸發登入
      }

      if (e.key === "Tab") {
        e.preventDefault(); // 防止表單亂觸發
        if (idx == 0) {
          focusable[1].focus();
        }
        if (idx == 1) {
          focusable[0].focus();
        }
      }
    });
  });

  return deliver_login_container_div;
}

function deliver_login_div_toggle(boolean) {
  let deliver_login_container = document.querySelector(
    ".deliver_login_container"
  );
  if (boolean) {
    deliver_login_container.style.display = "block";
  } else {
    deliver_login_container.style.display = "none";
  }
}

async function get_deliver_login_staff_info() {
  let accountInput = document.querySelector(".deliver_login_account");
  let passwordInput = document.querySelector(".deliver_login_password");

  if (accountInput == "" || passwordInput == "") {
    alert("請輸入帳號/密碼");
    return;
  }

  let start_p = performance.now();
  try {
    let temp_doman = transform_api_ip_4433(api_ip);
    let temp_data = await fetch(`${temp_doman}api/session/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ServerName: "Main",
        ServerType: "網頁",
        Data: {
          ID: accountInput.value,
          Password: passwordInput.value,
          UID: "",
          BARCODE: "",
        },
      }),
    }).then((response) => {
      return response.json();
    });

    if (temp_data.Code == 200) {
      deliver_cart_staff = temp_data.Data;
      console.log("登入人員資料", temp_data);
      console.log("登入人員資料", deliver_cart_staff);
      let result = await med_cart_handover_go(
        current_pharmacy.phar,
        deliver_temp_nurnum
      );
      result = result.Data;
      if (result.hand_status == "") {
        deliver_login_div_toggle(false);
        deliver_temp_nurnum = null;
      } else {
        deliver_login_div_toggle(false);
        let temp_time = getNowDateTime();

        console.log("carlog request:", {
          pharm: current_pharmacy.phar,
          nurnum: deliver_temp_nurnum,
          senderID: deliver_cart_staff.ID,
          senderName: deliver_cart_staff.Name,
          sendTime: temp_time,
        });
        let temp_result = await fetch(`${temp_doman}api/med_carlog/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pharm: current_pharmacy.phar,
            nurnum: deliver_temp_nurnum,
            senderID: deliver_cart_staff.ID,
            senderName: deliver_cart_staff.Name,
            sendTime: temp_time,
          }),
        }).then((response) => {
          return response.json();
        });

        console.log(temp_result);
        if (temp_result.Code != 200) alert(temp_result.Result);

        deliver_cart_staff = null;
        deliver_temp_nurnum = null;
        accountInput.value = "";
        passwordInput.value = "";
        deliver_cart_data = await get_all_med_cart_by_phar(
          current_pharmacy.phar
        );
        deliver_cart_data = deliver_cart_data.Data;
        display_deliver_func();
        reset_cart_list_container();
      }
    } else {
      deliver_cart_staff = null;
      alert(temp_data.Result);
    }
  } catch (error) {
    console.error(error);
  }

  let end_p = performance.now();
  console.log(end_p - start_p);
}

function getNowDateTime() {
  const now = new Date();
  return now.toISOString().slice(0, 19);
}

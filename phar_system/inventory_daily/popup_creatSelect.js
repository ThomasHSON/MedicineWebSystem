var popup_creatSelect_div;
var review_data = [];
var popup_creatSelect_creat = [];
var popup_creatSelect_finishedEvent = [];
var daily_data_today = [];
var daily_data_other = [];
var daily_data_all = [];

async function popup_creatSelect_load() {
  const serverName = "";
  const serverType = "網頁";
  APIServer = await LoadAPIServer();
  const API01 = serch_APIServer(serverName, serverType, "API01");
  const API02 = serch_APIServer(serverName, serverType, "API02");
  console.log("API01", API01);
  console.log("API02", API02);
  await check_ip(API01[0].server, API02[0].server);

  popup_creatSelect_creat = await get_all_unlock_creat();
  console.log("creatSelect", popup_creatSelect_creat);
  const creats = popup_creatSelect_creat.Data.filter(function (item) {
    return item.IC_SN.charAt(0) != "Q";
  });
  popup_creatSelect_creat.Data = creats;

  daily_data_all = popup_creatSelect_creat.Data.filter((item) => {
    return item.IC_SN.includes("EVD");
  });

  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const todayStr = `${y}/${m}/${d}`;

  // 2. 使用 forEach 進行分類
  daily_data_today = [];
  daily_data_other = [];
  daily_data_all.forEach((item) => {
    // 判斷 CT_TIME 是否以今天日期 "YYYY/MM/DD" 開頭
    if (item.CT_TIME.startsWith(todayStr)) {
      daily_data_today.push(item);
    } else {
      daily_data_other.push(item);
    }
  });

  daily_data_other.sort((a, b) => {
    const nameA = a.IC_NAME.toUpperCase(); // 轉大寫確保排序穩定
    const nameB = b.IC_NAME.toUpperCase();

    if (nameA < nameB) {
      return 1; // nameA 排在前面
    }
    if (nameA > nameB) {
      return -1; // nameA 排在後面
    }
    return 0; // 兩者相等
  });

  console.log("每日盤點", daily_data_all);
  console.log("當日盤點", daily_data_today);
  console.log("其餘盤點", daily_data_other);

  let content = popup_creatSelect_content_init();
  let temp_pp_div = document.querySelector("#popup_creatSelect");
  console.log(content);

  temp_pp_div.innerHTML = "";
  temp_pp_div.appendChild(content);
}
async function popup_creatSelect_closed() {}
async function popup_creatSelect_init() {
  popup_creatSelect_div = new Basic_popup_Div(
    "popup_creatSelect",
    "popup_creatSelect",
    "90svw",
    "",
  );
  popup_creatSelect_div._popup_div.style.border = "10px solid white";
  popup_creatSelect_div._popup_div.style.boxSizing = "border-box";
  popup_creatSelect_div._popup_div.style.width = "90vw";
  popup_creatSelect_div._popup_div.style.maxWidth = "600px";
  popup_creatSelect_div._popup_div.style.minWidth = "330px";
  popup_creatSelect_div.LoadEvent.push(popup_creatSelect_load);
  popup_creatSelect_div.ClosedEvent.push(popup_creatSelect_closed);
  popup_creatSelect_div.Close();
  document.body.appendChild(popup_creatSelect_div.div);
}

function popup_creatSelect_content_init() {
  let popup_creatSelect_container = document.createElement("div");
  popup_creatSelect_container.classList.add("popup_creatSelect_container");

  let pp_today_list_container = document.createElement("div");
  pp_today_list_container.classList.add("pp_today_list_container");

  let pp_today_title = document.createElement("div");
  pp_today_title.classList.add("pp_today_title");
  pp_today_title.innerHTML = "選擇區域(當日)";

  let pp_today_card_container = document.createElement("div");
  pp_today_card_container.classList.add("pp_today_card_container");

  daily_data_today.forEach((element) => {
    let pp_today_card = document.createElement("div");
    pp_today_card.classList.add("pp_today_card");
    let card_name = element.IC_NAME.split("-")[1];
    pp_today_card.innerHTML = card_name;
    pp_today_card.addEventListener("click", async () => {
      const IC_SN = element.IC_SN;
      console.log("IC_SN", IC_SN);
      sessionStorage.setItem("IC_SN", IC_SN);
      for (var i = 0; i < popup_creatSelect_finishedEvent.length; i++) {
        if (typeof popup_creatSelect_finishedEvent[i] == "function") {
          await popup_creatSelect_finishedEvent[i]();
        }
      }
      popup_creatSelect_div.Close();
    });

    pp_today_card_container.appendChild(pp_today_card);
  });

  pp_today_list_container.appendChild(pp_today_title);
  pp_today_list_container.appendChild(pp_today_card_container);

  let pp_other_list_container = document.createElement("div");
  pp_other_list_container.classList.add("pp_other_list_container");

  let pp_other_title = document.createElement("div");
  pp_other_title.classList.add("pp_other_title");
  pp_other_title.innerHTML = "每日盤點單清單";

  let pp_other_card_container = document.createElement("div");
  pp_other_card_container.classList.add("pp_other_card_container");

  daily_data_other.forEach((element) => {
    let pp_other_card = document.createElement("div");
    pp_other_card.classList.add("pp_other_card");
    pp_other_card.innerHTML = element.IC_NAME;
    pp_other_card.addEventListener("click", async () => {
      const IC_SN = element.IC_SN;
      console.log("IC_SN", IC_SN);
      sessionStorage.setItem("IC_SN", IC_SN);
      for (var i = 0; i < popup_creatSelect_finishedEvent.length; i++) {
        if (typeof popup_creatSelect_finishedEvent[i] == "function") {
          await popup_creatSelect_finishedEvent[i]();
        }
      }
      popup_creatSelect_div.Close();
    });

    pp_other_card_container.appendChild(pp_other_card);
  });

  pp_other_list_container.appendChild(pp_other_title);
  pp_other_list_container.appendChild(pp_other_card_container);

  popup_creatSelect_container.appendChild(pp_today_list_container);
  popup_creatSelect_container.appendChild(pp_other_list_container);

  return popup_creatSelect_container;
}

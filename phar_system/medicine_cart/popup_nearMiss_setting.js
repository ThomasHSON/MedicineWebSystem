let popup_nearMiss_setting_div;

function get_popup_nearMiss_setting() {
  popup_nearMiss_setting_div = new Basic_popup_Div(
    "popup_nearMiss_setting_div",
    "popup_nearMiss_setting_div",
    "",
    "",
  );
  popup_nearMiss_setting_div._popup_div.style.border = "10px solid white";

  let header = get_pp_nearMiss_setting_header();
  let main = get_pp_nearMiss_setting_main();
  let footer = get_pp_nearMiss_setting_footer();

  popup_nearMiss_setting_div.AddControl(header);
  popup_nearMiss_setting_div.AddControl(main);
  popup_nearMiss_setting_div.AddControl(footer);

  return popup_nearMiss_setting_div;
}
function get_pp_nearMiss_setting_header() {
  let ppnmss_header_container = document.createElement("div");
  ppnmss_header_container.classList.add("ppnmss_header_container");

  let ppnmss_h_title = document.createElement("div");
  ppnmss_h_title.classList.add("ppnmss_h_title");
  ppnmss_h_title.innerHTML = `錯誤選項編輯`;

  let ppnmss_h_close_btn = document.createElement("img");
  ppnmss_h_close_btn.classList.add("ppnmss_h_close_btn");
  ppnmss_h_close_btn.src = "../image/close.png";
  ppnmss_h_close_btn.addEventListener("click", async () => {
    await popup_nearMiss_setting_div_close();
    popup_nearMiss_div_open();
  });

  ppnmss_header_container.appendChild(ppnmss_h_title);
  ppnmss_header_container.appendChild(ppnmss_h_close_btn);

  return ppnmss_header_container;
}
function get_pp_nearMiss_setting_main() {
  let ppnmss_main_container = document.createElement("div");
  ppnmss_main_container.classList.add("ppnmss_main_container");

  let ppnmss_main_title = document.createElement("div");
  ppnmss_main_title.classList.add("ppnmss_main_title");
  ppnmss_main_title.innerHTML = "回報選項";

  let ppnmss_main_option_container = document.createElement("div");
  ppnmss_main_option_container.classList.add("ppnmss_main_option_container");

  ppnmss_main_container.appendChild(ppnmss_main_title);
  ppnmss_main_container.appendChild(ppnmss_main_option_container);

  return ppnmss_main_container;
}
function get_pp_nearMiss_setting_footer() {
  let ppnmss_footer_container = document.createElement("div");
  ppnmss_footer_container.classList.add("ppnmss_footer_container");

  let ppnmss_footer_notice = document.createElement("div");
  ppnmss_footer_notice.classList.add("ppnmss_footer_notice");
  ppnmss_footer_notice.innerHTML = `請勿輸入";"標點符號`;

  let ppmnss_footer_input_container = document.createElement("div");
  ppmnss_footer_input_container.classList.add("ppmnss_footer_input_container");

  let ppmnss_footer_input = document.createElement("input");
  ppmnss_footer_input.classList.add("ppmnss_footer_input");
  ppmnss_footer_input.type = "text";
  ppmnss_footer_input.placeholder = "請輸入選項敘述";

  let ppmnss_footer_add = document.createElement("div");
  ppmnss_footer_add.classList.add("ppmnss_footer_add");
  ppmnss_footer_add.classList.add("btn");
  ppmnss_footer_add.innerHTML = "新增";
  ppmnss_footer_add.addEventListener("click", () => {
    ppmnss_footer_add.innerHTML = "新增中...";
    if (ppmnss_footer_add.innerHTML == "新增中...") {
      return;
    }
    let temp_str = ppmnss_footer_input.value;
    if (temp_str == "") {
      alert("請勿輸入空值");
      ppmnss_footer_add.innerHTML = "新增";
      return;
    }

    if (temp_str.includes(";")) {
      alert(`檢測到非法文字，請確認後再新增`);
      ppmnss_footer_add.innerHTML = "新增";
      return;
    }
    let temp_arr = [];
    if (page_setting_params.dispense_error_options) {
      temp_arr = page_setting_params.dispense_error_options.value_db.split(";");
    }
    if (temp_arr.includes(ppmnss_footer_input.value)) {
      alert("已有重複選項，請確認後再進行新增");
      ppmnss_footer_add.innerHTML = "新增";
      return;
    }
    // 這邊處理資料加入
  });

  ppmnss_footer_input_container.appendChild(ppmnss_footer_input);
  ppmnss_footer_input_container.appendChild(ppmnss_footer_add);

  ppnmss_footer_container.appendChild(ppnmss_footer_notice);
  ppnmss_footer_container.appendChild(ppmnss_footer_input_container);

  return ppnmss_footer_container;
}
async function popup_nearMiss_setting_div_close() {
  popup_nearMiss_setting_div.Set_Visible(false);
}
function popup_nearMiss_setting_div_open() {
  init_nearMiss_options();
  popup_nearMiss_setting_div.Set_Visible(true);
}
function init_nearMiss_options() {
  let ppnmss_main_option_container = document.querySelector(
    ".ppnmss_main_option_container",
  );

  ppnmss_main_option_container.innerHTML = "";

  let temp_arr = [];
  if (page_setting_params.dispense_error_options) {
    temp_arr = page_setting_params.dispense_error_options.value_db.split(";");
  }
  if (temp_arr.length > 0) {
    temp_arr.forEach((element, index) => {
      let ppmnss_card = document.createElement("ppmnss_card");
      ppmnss_card.classList.add("ppmnss_card");

      let ppmnss_card_info = document.createElement("div");
      ppmnss_card_info.classList.add("ppmnss_card_info");
      ppmnss_card_info.innerHTML = element;

      let ppmnss_card_delete = document.createElement("img");
      ppmnss_card_delete.classList.add("ppmnss_card_delete");
      ppmnss_card_delete.src = "../image/trash.png";

      ppmnss_card.appendChild(ppmnss_card_info);
      ppmnss_card.appendChild(ppmnss_card_delete);

      ppnmss_main_option_container.appendChild(ppmnss_card);
    });
  } else {
    ppnmss_main_option_container.innerHTML = "暫無選項，請用下方輸入加入新選項";
  }
}

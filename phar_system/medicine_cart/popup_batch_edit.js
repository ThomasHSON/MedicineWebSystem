let popup_batch_edit_div;
let ppbe_cpoe_batch_edit_data = [];

function get_popup_batch_edit() {
  popup_batch_edit_div = new Basic_popup_Div(
    "popup_batch_edit_div",
    "popup_batch_edit_div",
    "",
    "",
  );
  popup_batch_edit_div._popup_div.style.border = "10px solid white";

  let header = get_pp_batch_edit_header();
  let main = get_pp_batch_edit_main();
  let footer = get_pp_batch_edit_footer();

  popup_batch_edit_div.AddControl(header);
  popup_batch_edit_div.AddControl(main);
  popup_batch_edit_div.AddControl(footer);

  return popup_batch_edit_div;
}
function get_pp_batch_edit_header() {
  let ppbe_header_container = document.createElement("div");
  ppbe_header_container.classList.add("ppbe_header_container");

  let ppbe_h_title = document.createElement("div");
  ppbe_h_title.classList.add("ppbe_h_title");
  ppbe_h_title.innerHTML = `批號回寫`;

  let ppbe_h_close_btn = document.createElement("img");
  ppbe_h_close_btn.classList.add("ppbe_h_close_btn");
  ppbe_h_close_btn.src = "../image/close.png";
  ppbe_h_close_btn.addEventListener("click", () => {
    popup_batch_edit_div_close();
  });

  ppbe_header_container.appendChild(ppbe_h_title);
  ppbe_header_container.appendChild(ppbe_h_close_btn);

  return ppbe_header_container;
}
function get_pp_batch_edit_main() {
  let ppbe_main_container = document.createElement("div");
  ppbe_main_container.classList.add("ppbe_main_container");

  let ppbe_main_head = document.createElement("div");
  ppbe_main_head.classList.add("ppbe_main_head");

  let ppbe_main_head_patient = document.createElement("div");
  ppbe_main_head_patient.classList.add("ppbe_main_head_patient");

  let ppbe_main_head_page = document.createElement("div");
  ppbe_main_head_page.classList.add("ppbe_main_head_page");

  ppbe_main_head.appendChild(ppbe_main_head_patient);
  ppbe_main_head.appendChild(ppbe_main_head_page);

  let ppbe_main_func_display = document.createElement("div");
  ppbe_main_func_display.classList.add("ppbe_main_func_display");
  ppbe_main_func_display.setAttribute("step", 1);

  let ppbe_main_footer = document.createElement("div");
  ppbe_main_footer.classList.add("ppbe_main_footer");

  let ppbe_step_pre_btn = document.createElement("div");
  ppbe_step_pre_btn.classList.add("ppbe_step_pre_btn");
  ppbe_step_pre_btn.classList.add("btn");
  ppbe_step_pre_btn.innerHTML = "上一步";

  let ppbe_step_next_btn = document.createElement("div");
  ppbe_step_next_btn.classList.add("ppbe_step_next_btn");
  ppbe_step_next_btn.classList.add("btn");
  ppbe_step_next_btn.innerHTML = "下一步";
  ppbe_step_next_btn.addEventListener("click", () => {
    if (ppbe_step_next_btn.classList.contains("ppbe_step_btn_disable")) return;
    let ppbe_main_func_display = document.querySelector(
      ".ppbe_main_func_display",
    );
    let current_step = ppbe_main_func_display.getAttribute("step");
    current_step = +current_step + 1;

    let max_page = 2;
    if (ppbe_cpoe_batch_edit_data.length > 0)
      max_page = ppbe_cpoe_batch_edit_data.length + 2;

    if (max_page < current_step) current_step = max_page;

    ppbe_main_func_display.setAttribute("step", current_step);
    ppbe_step_next_btn.classList.add("ppbe_step_btn_disable");
    ppbe_set_step_display(current_step);
    ppbe_step_next_btn.classList.remove("ppbe_step_btn_disable");
  });

  let ppbe_step_submit_btn = document.createElement("div");
  ppbe_step_submit_btn.classList.add("ppbe_step_submit_btn");
  ppbe_step_submit_btn.classList.add("btn");
  ppbe_step_submit_btn.innerHTML = "更新";

  ppbe_main_footer.appendChild(ppbe_step_pre_btn);
  ppbe_main_footer.appendChild(ppbe_step_next_btn);
  ppbe_main_footer.appendChild(ppbe_step_submit_btn);

  ppbe_main_container.appendChild(ppbe_main_head);
  ppbe_main_container.appendChild(ppbe_main_func_display);
  ppbe_main_container.appendChild(ppbe_main_footer);

  return ppbe_main_container;
}
function get_pp_batch_edit_footer() {
  let ppbe_footer_container = document.createElement("div");
  ppbe_footer_container.classList.add("ppbe_footer_container");

  return ppbe_footer_container;
}
async function popup_batch_edit_div_close() {
  ppbe_init_data();
  popup_batch_edit_div.Set_Visible(false);
}
function popup_batch_edit_div_open() {
  ppbe_set_cpoe_list();
  popup_batch_edit_div.Set_Visible(true);
}
function ppbe_init_data() {
  ppbe_cpoe_batch_edit_data = [];
}

function ppbe_set_cpoe_list() {
  // 設定初始化彈窗
  let cpoe_info;
  let ppbe_main_head_patient = document.querySelector(
    ".ppbe_main_head_patient",
  );
  let ppbe_main_head_page = document.querySelector(".ppbe_main_head_page");
  let ppbe_main_func_display = document.querySelector(
    ".ppbe_main_func_display",
  );
  ppbe_main_func_display.setAttribute("step", 1);
  try {
    // 設定初始化抬頭資訊(護理站-床號 病人姓名)
    ppbe_main_head_patient.innerHTML = `${current_p_bed_data.nurnum}-${current_p_bed_data.bednum}床 ${current_p_bed_data.pnamec}`;
    if (ppbe_cpoe_batch_edit_data.length > 0) {
      ppbe_main_head_page.innerHTML = `1/${+ppbe_cpoe_batch_edit_data.length + 2}`;
    } else {
      ppbe_main_head_page.innerHTML = "1/1";
    }
    ppbe_main_func_display.innerHTML = "";
    cpoe_info = current_p_bed_data.cpoe;

    if (cpoe_info.length > 0) {
      cpoe_info.forEach((object) => {
        let temp_card = ppbe_set_cpoe_card(object);

        ppbe_main_func_display.appendChild(temp_card);
      });
    } else {
      ppbe_main_func_display.innerHTML = "該床無處方資料";
    }
  } catch (error) {
    console.error(error);
    ppbe_main_head_patient.innerHTML = ``;
    ppbe_main_head_page.innerHTML = "1/1";
    ppbe_main_func_display.innerHTML = `錯誤：${error}`;
  }
  ppbe_step_btn_set();
}

function ppbe_set_cpoe_card(object) {
  let ppbe_card = document.createElement("label");
  ppbe_card.classList.add("ppbe_card");
  ppbe_card.setAttribute("for", object.GUID);
  ppbe_card.setAttribute("guid", object.GUID);

  let ppbe_input = document.createElement("input");
  ppbe_input.classList.add("ppbe_input");
  ppbe_input.id = object.GUID;
  ppbe_input.setAttribute("code", object.code);
  ppbe_input.type = "checkbox";
  let temp_GUID_arr = [];
  ppbe_cpoe_batch_edit_data.forEach((element) => {
    temp_GUID_arr.push(element.GUID);
  });
  if (temp_GUID_arr.includes(object.GUID)) ppbe_input.checked = true;
  ppbe_input.addEventListener("click", () => {
    let ppbe_main_head_page = document.querySelector(".ppbe_main_head_page");
    let ppbe_step_next_btn = document.querySelector(".ppbe_step_next_btn");
    if (ppbe_input.checked) {
      // 這邊點擊加入編輯批號
      ppbe_cpoe_batch_edit_data.push(object);
    } else {
      // 取消編輯批號
      ppbe_cpoe_batch_edit_data = ppbe_cpoe_batch_edit_data.filter((item) => {
        return item.GUID != object.GUID;
      });
    }

    console.log(ppbe_cpoe_batch_edit_data);
    if (ppbe_cpoe_batch_edit_data.length > 0) {
      ppbe_main_head_page.innerHTML = `1/${+ppbe_cpoe_batch_edit_data.length + 2}`;
      ppbe_step_next_btn.classList.remove("ppbe_step_btn_disable");
    } else {
      ppbe_main_head_page.innerHTML = `1/1`;
      ppbe_step_next_btn.classList.add("ppbe_step_btn_disable");
    }
    ppbe_step_btn_set();
  });

  let ppbe_card_med_info_container = document.createElement("div");
  ppbe_card_med_info_container.classList.add("ppbe_card_med_info_container");

  let ppbe_card_med_name = document.createElement("div");
  ppbe_card_med_name.classList.add("ppbe_card_med_name");
  ppbe_card_med_name.innerHTML = object.name;

  let ppbe_card_med_cht_name = document.createElement("div");
  ppbe_card_med_cht_name.classList.add("ppbe_card_med_cht_name");
  ppbe_card_med_cht_name.innerHTML = object.cht_name;

  let ppbe_card_med_detail = document.createElement("div");
  ppbe_card_med_detail.classList.add("ppbe_card_med_detail");

  let ppbe_card_med_ordseq = document.createElement("div");
  ppbe_card_med_ordseq.classList.add("ppbe_card_med_ordseq");
  ppbe_card_med_ordseq.innerHTML = `序號：${object.ordseq}`;

  let ppbe_card_med_dosage = document.createElement("div");
  ppbe_card_med_dosage.classList.add("ppbe_card_med_dosage");
  ppbe_card_med_dosage.innerHTML = `劑量：${object.dosage} ${object.dunit}`;

  let ppbe_card_med_freqn = document.createElement("div");
  ppbe_card_med_freqn.classList.add("ppbe_card_med_freqn");
  let temp_str = object.freqn.toUpperCase();
  if (temp_str.includes("PRN")) {
    ppbe_card_med_freqn.innerHTML = `頻次：<span class="s_color">${object.freqn}</span>`;
  } else {
    ppbe_card_med_freqn.innerHTML = `頻次：${object.freqn}`;
  }

  let ppbe_card_med_route = document.createElement("div");
  ppbe_card_med_route.classList.add("ppbe_card_med_route");
  ppbe_card_med_route.innerHTML = `途徑：${object.route}`;

  let ppbe_card_med_code = document.createElement("div");
  ppbe_card_med_code.classList.add("ppbe_card_med_code");
  ppbe_card_med_code.innerHTML = `藥碼：${object.code}`;

  let ppbe_card_med_store_position = document.createElement("div");
  ppbe_card_med_store_position.classList.add("ppbe_card_med_store_position");
  ppbe_card_med_store_position.innerHTML = `儲位：${object.store_position}`;

  let ppbe_card_med_unit = document.createElement("div");
  ppbe_card_med_unit.classList.add("ppbe_card_med_unit");
  ppbe_card_med_unit.innerHTML = `儲位：${object.dunit}`;

  temp_check_isArray =
    page_setting_params &&
    page_setting_params["display_block"] &&
    page_setting_params["display_block"].value;

  if (temp_check_isArray) {
    for (
      let i = 0;
      i < page_setting_params["display_block"]["value"].length;
      i++
    ) {
      const item = page_setting_params["display_block"]["value"][i];
      switch (item.name) {
        case "ordseq":
          if (item.value == "True")
            ppbe_card_med_detail.appendChild(ppbe_card_med_ordseq);
          break;
        case "dosage":
          if (item.value == "True")
            ppbe_card_med_detail.appendChild(ppbe_card_med_dosage);
          break;
        case "dunit":
          if (item.value == "True")
            ppbe_card_med_detail.appendChild(ppbe_card_med_unit);
          break;
        case "freqn":
          if (item.value == "True")
            ppbe_card_med_detail.appendChild(ppbe_card_med_freqn);
          break;
        case "route":
          if (item.value == "True")
            ppbe_card_med_detail.appendChild(ppbe_card_med_route);
          break;
        case "code":
          if (item.value == "True")
            ppbe_card_med_detail.appendChild(ppbe_card_med_code);
          break;
        case "storage":
          if (item.value == "True")
            ppbe_card_med_detail.appendChild(ppbe_card_med_store_position);
          break;

        default:
          break;
      }
    }
  } else {
    ppbe_card_med_detail.appendChild(ppbe_card_med_ordseq);
    ppbe_card_med_detail.appendChild(ppbe_card_med_dosage);
    ppbe_card_med_detail.appendChild(ppbe_card_med_unit);
    ppbe_card_med_detail.appendChild(ppbe_card_med_route);
    ppbe_card_med_detail.appendChild(ppbe_card_med_freqn);
    ppbe_card_med_detail.appendChild(ppbe_card_med_code);
  }

  ppbe_card_med_detail.appendChild(ppbe_card_med_ordseq);
  ppbe_card_med_detail.appendChild(ppbe_card_med_dosage);
  ppbe_card_med_detail.appendChild(ppbe_card_med_freqn);
  ppbe_card_med_detail.appendChild(ppbe_card_med_route);
  ppbe_card_med_detail.appendChild(ppbe_card_med_code);
  ppbe_card_med_detail.appendChild(ppbe_card_med_store_position);

  ppbe_card_med_info_container.appendChild(ppbe_card_med_name);
  if (object.cht_name)
    ppbe_card_med_info_container.appendChild(ppbe_card_med_cht_name);
  ppbe_card_med_info_container.appendChild(ppbe_card_med_detail);

  let ppbe_card_med_qty = document.createElement("div");
  ppbe_card_med_qty.classList.add("ppbe_card_med_qty");
  ppbe_card_med_qty.innerHTML = `總量：${object.qty}`;

  ppbe_card.appendChild(ppbe_input);
  ppbe_card.appendChild(ppbe_card_med_info_container);
  ppbe_card.appendChild(ppbe_card_med_qty);

  return ppbe_card;
}
function ppbe_step_btn_set() {
  let ppbe_main_func_display = document.querySelector(
    ".ppbe_main_func_display",
  );
  let ppbe_main_footer = document.querySelector(".ppbe_main_footer");
  let ppbe_step_pre_btn = document.querySelector(".ppbe_step_pre_btn");
  let ppbe_step_next_btn = document.querySelector(".ppbe_step_next_btn");
  let ppbe_step_submit_btn = document.querySelector(".ppbe_step_submit_btn");

  let current_step = ppbe_main_func_display.getAttribute("step");
  if (ppbe_cpoe_batch_edit_data.length > 0) {
    ppbe_step_next_btn.classList.remove("ppbe_step_btn_disable");
  } else {
    ppbe_step_next_btn.classList.add("ppbe_step_btn_disable");
  }
  let max_page = 2;
  if (ppbe_cpoe_batch_edit_data.length > 0)
    max_page = ppbe_cpoe_batch_edit_data.length + 2;

  switch (+current_step) {
    case 1:
      console.log("按鈕首頁");
      ppbe_step_pre_btn.style.display = "none";
      ppbe_step_next_btn.style.display = "block";
      ppbe_step_submit_btn.style.display = "none";
      ppbe_main_footer.style.justifyContent = "end";
      break;

    case +max_page:
      ppbe_step_pre_btn.style.display = "none";
      ppbe_step_next_btn.style.display = "none";
      ppbe_step_submit_btn.style.display = "block";
      ppbe_main_footer.style.justifyContent = "end";
      break;

    default:
      ppbe_step_pre_btn.style.display = "block";
      ppbe_step_next_btn.style.display = "block";
      ppbe_step_submit_btn.style.display = "none";
      ppbe_main_footer.style.justifyContent = "space-between";
      break;
  }
}

function ppbe_set_step_display(step) {
  console.log(step);
  try {
    let max_page = 2;
    if (ppbe_cpoe_batch_edit_data.length > 0)
      max_page = ppbe_cpoe_batch_edit_data.length + 2;

    switch (+step) {
      case "1":
        // 初始首頁
        ppbe_set_cpoe_list();
        break;

      case +max_page:
        // 提交資料最後一頁
        break;

      default:
        // 中間頁
        ppbe_set_middle_page(step, max_page);
        break;
    }
  } catch (error) {}
  ppbe_step_btn_set();
}

function ppbe_set_middle_page(step, max_page) {
  let ppbe_main_head_page = document.querySelector(".ppbe_main_head_page");
  let ppbe_main_func_display = document.querySelector(
    ".ppbe_main_func_display",
  );

  try {
    ppbe_main_func_display.innerHTML = "";
    ppbe_main_head_page.innerHTML = `${step}/${max_page}`;
  } catch (error) {}
}
function ppbe_set_submit_page() {}

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
  ppbe_step_pre_btn.addEventListener("click", () => {
    if (ppbe_step_pre_btn.classList.contains("ppbe_step_btn_disable")) return;
    let ppbe_main_func_display = document.querySelector(
      ".ppbe_main_func_display",
    );
    let current_step = ppbe_main_func_display.getAttribute("step");
    current_step = +current_step - 1;

    let max_page = 2;
    if (ppbe_cpoe_batch_edit_data.length > 0)
      max_page = ppbe_cpoe_batch_edit_data.length + 2;

    if (max_page < current_step) current_step = max_page;

    ppbe_main_func_display.setAttribute("step", current_step);
    ppbe_set_step_display(current_step);
  });

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
  ppbe_step_submit_btn.addEventListener("click", async () => {
    console.log(ppbe_cpoe_batch_edit_data);
    let temp_arr = [];
    ppbe_cpoe_batch_edit_data.forEach((element) => {
      let temp_object = {};
      temp_object.GUID = element.GUID;
      temp_object.lot_exp = element.lot_exp;

      temp_arr.push(temp_object);
    });
    let post_data = {
      Data: temp_arr,
    };
    console.log(post_data);
    let return_data = await update_lot_exp_api(post_data);
    console.log(return_data);
    if (return_data.Code == 200) {
      ppbe_cpoe_batch_edit_data = [];
      console.log(ppbe_cpoe_batch_edit_data);

      return_data.Data.forEach((element) => {
        // 選取 class 為 batch_info_container_for_cpoe 且 GUID 為 "abc-123-def" 的元素
        const temp_div = document.querySelector(
          `.batch_info_container_for_cpoe[GUID="${element.GUID}"]`,
        );

        temp_div.innerHTML = "";
        if (element.lot_exp != "") {
          let temp_arr = [];
          temp_arr = element.lot_exp.split(";");

          if (temp_arr.length > 0) {
            temp_arr.forEach((element) => {
              let ppbe_sc_med_batch = document.createElement("div");
              ppbe_sc_med_batch.classList.add("ppnms_type_card");
              ppbe_sc_med_batch.innerHTML = element;

              temp_div.appendChild(ppbe_sc_med_batch);
            });
          }
        }
      });
      open_med_detail_info();
      await popup_batch_edit_div_close();
    } else {
      alert(return_data.Result);
    }
  });

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
  popup_batch_edit_div.Set_Visible(false);
}
function popup_batch_edit_div_open() {
  ppbe_set_cpoe_list();
  popup_batch_edit_div.Set_Visible(true);
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
        // 深拷貝
        // let temp_object = structuredClone(object);
        // 淺拷貝
        temp_object = object;
        let temp_card = ppbe_set_cpoe_card(temp_object);

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
  ppbe_card.setAttribute("for", `ppbe_${object.GUID}`);
  ppbe_card.setAttribute("guid", object.GUID);

  let ppbe_input = document.createElement("input");
  ppbe_input.classList.add("ppbe_input");
  ppbe_input.id = `ppbe_${object.GUID}`;
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
      ppbe_step_pre_btn.style.display = "block";
      ppbe_step_next_btn.style.display = "none";
      ppbe_step_submit_btn.style.display = "block";
      ppbe_main_footer.style.justifyContent = "space-between";
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
  try {
    let max_page = 2;
    if (ppbe_cpoe_batch_edit_data.length > 0)
      max_page = ppbe_cpoe_batch_edit_data.length + 2;

    switch (+step) {
      case 1:
        // 初始首頁
        console.log("第一頁");
        ppbe_set_cpoe_list();
        break;

      case +max_page:
        // 提交資料最後一頁
        ppbe_set_submit_page(step, max_page);
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

    let data_index = +step - 2;
    let temp_object = ppbe_cpoe_batch_edit_data[data_index];
    console.log(temp_object);

    let ppbe_med_info_container = document.createElement("div");
    ppbe_med_info_container.classList.add("ppbe_med_info_container");

    let ppbe_med_info = document.createElement("div");
    ppbe_med_info.classList.add("ppbe_med_info");

    let ppbe_card_med_name = document.createElement("div");
    ppbe_card_med_name.classList.add("ppbe_card_med_name");
    ppbe_card_med_name.innerHTML = temp_object.name;

    let ppbe_card_med_cht_name = document.createElement("div");
    ppbe_card_med_cht_name.classList.add("ppbe_card_med_cht_name");
    ppbe_card_med_cht_name.innerHTML = temp_object.cht_name;

    let ppbe_card_med_detail = document.createElement("div");
    ppbe_card_med_detail.classList.add("ppbe_card_med_detail");

    let ppbe_card_med_ordseq = document.createElement("div");
    ppbe_card_med_ordseq.classList.add("ppbe_card_med_ordseq");
    ppbe_card_med_ordseq.innerHTML = `序號：${temp_object.ordseq}`;

    let ppbe_card_med_dosage = document.createElement("div");
    ppbe_card_med_dosage.classList.add("ppbe_card_med_dosage");
    ppbe_card_med_dosage.innerHTML = `劑量：${temp_object.dosage} ${temp_object.dunit}`;

    let ppbe_card_med_freqn = document.createElement("div");
    ppbe_card_med_freqn.classList.add("ppbe_card_med_freqn");
    let temp_str = temp_object.freqn.toUpperCase();
    if (temp_str.includes("PRN")) {
      ppbe_card_med_freqn.innerHTML = `頻次：<span class="s_color">${temp_object.freqn}</span>`;
    } else {
      ppbe_card_med_freqn.innerHTML = `頻次：${temp_object.freqn}`;
    }

    let ppbe_card_med_route = document.createElement("div");
    ppbe_card_med_route.classList.add("ppbe_card_med_route");
    ppbe_card_med_route.innerHTML = `途徑：${temp_object.route}`;

    let ppbe_card_med_code = document.createElement("div");
    ppbe_card_med_code.classList.add("ppbe_card_med_code");
    ppbe_card_med_code.innerHTML = `藥碼：${temp_object.code}`;

    let ppbe_card_med_store_position = document.createElement("div");
    ppbe_card_med_store_position.classList.add("ppbe_card_med_store_position");
    ppbe_card_med_store_position.innerHTML = `儲位：${temp_object.store_position}`;

    let ppbe_card_med_unit = document.createElement("div");
    ppbe_card_med_unit.classList.add("ppbe_card_med_unit");
    ppbe_card_med_unit.innerHTML = `儲位：${temp_object.dunit}`;

    let temp_check_isArray =
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

    ppbe_med_info.appendChild(ppbe_card_med_name);
    if (temp_object.cht_name) ppbe_med_info.appendChild(ppbe_card_med_cht_name);
    ppbe_med_info.appendChild(ppbe_card_med_detail);

    let ppbe_card_med_qty = document.createElement("div");
    ppbe_card_med_qty.classList.add("ppbe_card_med_qty");
    ppbe_card_med_qty.innerHTML = `總量：${temp_object.qty}`;

    ppbe_med_info_container.appendChild(ppbe_med_info);
    ppbe_med_info_container.appendChild(ppbe_card_med_qty);

    let ppbe_batch_info_head = document.createElement("div");
    ppbe_batch_info_head.classList.add("ppbe_batch_info_head");

    let ppbe_batch_info_title = document.createElement("div");
    ppbe_batch_info_title.classList.add("ppbe_batch_info_title");
    ppbe_batch_info_title.innerHTML = "批號資訊";

    let ppbe_batch_info_add_btn = document.createElement("div");
    ppbe_batch_info_add_btn.classList.add("ppbe_batch_info_add_btn");
    ppbe_batch_info_add_btn.classList.add("btn");
    ppbe_batch_info_add_btn.innerHTML = "新增批號";
    ppbe_batch_info_add_btn.addEventListener("click", () => {
      if (ppbe_cpoe_batch_edit_data[data_index].lot_exp == "") {
        ppbe_cpoe_batch_edit_data[data_index].lot_exp =
          `[效期]:${batch_getToday()},[批號]:,[數量]:`;
      } else {
        ppbe_cpoe_batch_edit_data[data_index].lot_exp +=
          `;[效期]:${batch_getToday()},[批號]:,[數量]:`;
      }
      set_ppbe_batch_card_init(
        ppbe_cpoe_batch_edit_data[data_index].lot_exp,
        data_index,
      );
    });

    ppbe_batch_info_head.appendChild(ppbe_batch_info_title);
    ppbe_batch_info_head.appendChild(ppbe_batch_info_add_btn);

    let ppbe_batch_card_container = document.createElement("div");
    ppbe_batch_card_container.classList.add("ppbe_batch_card_container");
    // 這邊繼續生成卡片(包含新增刪除邏輯)
    console.log(ppbe_cpoe_batch_edit_data[data_index]);

    ppbe_main_func_display.appendChild(ppbe_med_info_container);
    ppbe_main_func_display.appendChild(ppbe_batch_info_head);
    ppbe_main_func_display.appendChild(ppbe_batch_card_container);
    if (Array.isArray(ppbe_cpoe_batch_edit_data[data_index].stock.qty)) {
      if (ppbe_cpoe_batch_edit_data[data_index].stock.qty.length > 0) {
        let ppbe_stock_batch_container = set_stock_batch_container(
          ppbe_cpoe_batch_edit_data[data_index].stock,
          data_index,
        );
        ppbe_main_func_display.appendChild(ppbe_stock_batch_container);
      }
    }

    set_ppbe_batch_card_init(
      ppbe_cpoe_batch_edit_data[data_index].lot_exp,
      data_index,
    );
  } catch (error) {
    console.error(error);
    ppbe_main_func_display.innerHTML = `錯誤：${error}`;
  }
}
function ppbe_set_submit_page(step, max_page) {
  let ppbe_main_head_page = document.querySelector(".ppbe_main_head_page");
  let ppbe_main_func_display = document.querySelector(
    ".ppbe_main_func_display",
  );

  try {
    ppbe_main_func_display.innerHTML = "";
    ppbe_main_head_page.innerHTML = `${step}/${max_page}`;

    ppbe_cpoe_batch_edit_data.forEach((element) => {
      let temp_div = set_ppbe_submit_card(element);

      ppbe_main_func_display.appendChild(temp_div);
    });
  } catch (error) {}
}
function set_ppbe_submit_card(object) {
  let ppbe_sub_card = document.createElement("div");
  ppbe_sub_card.classList.add("ppbe_sub_card");
  try {
    let ppbe_sub_card_med_info_container = document.createElement("div");
    ppbe_sub_card_med_info_container.classList.add(
      "ppbe_sub_card_med_info_container",
    );

    let ppbe_sc_med_name_container = document.createElement("div");
    ppbe_sc_med_name_container.classList.add("ppbe_sc_med_name_container");

    let ppbe_sc_med_name = document.createElement("div");
    ppbe_sc_med_name.classList.add("ppbe_sc_med_name");
    ppbe_sc_med_name.innerHTML = object.name;

    let ppbe_sc_med_cht_name = document.createElement("div");
    ppbe_sc_med_cht_name.classList.add("ppbe_sc_med_cht_name");
    ppbe_sc_med_cht_name.innerHTML = object.cht_name;

    ppbe_sc_med_name_container.appendChild(ppbe_sc_med_name);
    if (object.cht_name)
      ppbe_sc_med_name_container.appendChild(ppbe_sc_med_cht_name);

    let ppbe_sc_med_qty = document.createElement("div");
    ppbe_sc_med_qty.classList.add("ppbe_sc_med_qty");
    ppbe_sc_med_qty.innerHTML = object.qty;

    ppbe_sub_card_med_info_container.appendChild(ppbe_sc_med_name_container);
    ppbe_sub_card_med_info_container.appendChild(ppbe_sc_med_qty);

    let ppbe_sc_med_batch_container = document.createElement("div");
    ppbe_sc_med_batch_container.classList.add("ppbe_sc_med_batch_container");

    let temp_arr = [];
    if (object.lot_exp != "") temp_arr = object.lot_exp.split(";");

    if (temp_arr.length > 0) {
      temp_arr.forEach((element) => {
        let ppbe_sc_med_batch = document.createElement("div");
        ppbe_sc_med_batch.classList.add("ppbe_sc_med_batch");
        ppbe_sc_med_batch.innerHTML = element;

        ppbe_sc_med_batch_container.appendChild(ppbe_sc_med_batch);
      });
    } else {
      ppbe_sc_med_batch_container.innerHTML = "無批號資料";
    }

    ppbe_sub_card.appendChild(ppbe_sub_card_med_info_container);
    ppbe_sub_card.appendChild(ppbe_sc_med_batch_container);

    return ppbe_sub_card;
  } catch (error) {
    ppbe_sub_card.innerHTML = `資料錯誤：${error}`;
    return ppbe_sub_card;
  }
}
function set_ppbe_batch_card_init(str, data_index) {
  // "[效期]:2200/01/01,[批號]:自動補足,[數量]:100;[效期]:2200/01/01,[批號]:自動補足,[數量]:100"
  let ppbe_batch_card_container = document.querySelector(
    ".ppbe_batch_card_container",
  );

  let temp_arr = batch_parseData(str);
  console.log("生成資料的陣列", temp_arr);

  ppbe_batch_card_container.innerHTML = "";

  if (temp_arr.length > 0) {
    // 這邊加入批號卡片
    temp_arr.forEach((element, index) => {
      let ppbe_batch_card = document.createElement("div");
      ppbe_batch_card.classList.add("ppbe_batch_card");

      let ppbe_bc_head = document.createElement("div");
      ppbe_bc_head.classList.add("ppbe_bc_head");

      let ppbe_bc_h_title = document.createElement("div");
      ppbe_bc_h_title.classList.add("ppbe_bc_h_title");
      ppbe_bc_h_title.innerHTML = `批號${index + 1}`;

      let ppbe_bc_h_delete = document.createElement("img");
      ppbe_bc_h_delete.classList.add("ppbe_bc_h_delete");
      ppbe_bc_h_delete.src = "../image/trash.png";
      ppbe_bc_h_delete.addEventListener("click", () => {
        console.log("刪除的資料", temp_arr[index]);
        console.log("刪除的資料索引直", index);
        let new_arr = temp_arr.filter((item, x) => {
          console.log(x);
          console.log(index);
          return x != index;
        });
        console.log("刪除後的陣列", new_arr);
        let temp_str = batch_stringifyData(new_arr);
        console.log("刪除後的字串", temp_str);
        ppbe_cpoe_batch_edit_data[data_index].lot_exp = temp_str;
        set_ppbe_batch_card_init(temp_str, data_index);
      });

      ppbe_bc_head.appendChild(ppbe_bc_h_title);
      ppbe_bc_head.appendChild(ppbe_bc_h_delete);

      let ppbe_bc_main = document.createElement("div");
      ppbe_bc_main.classList.add("ppbe_bc_main");

      let temp_object_data = [
        { en: "lot", ch: "批號", type: "text" },
        { en: "expiry_date", ch: "效期", type: "date" },
        { en: "qty", ch: "數量", type: "text" },
      ];

      temp_object_data.forEach((item) => {
        let ppbe_bc_info = document.createElement("div");
        ppbe_bc_info.classList.add("ppbe_bc_info");

        let ppbe_bc_label = document.createElement("label");
        ppbe_bc_label.classList.add("ppbe_bc_label");
        ppbe_bc_label.innerHTML = item.ch;
        ppbe_bc_label.setAttribute("for", `${item.en}_${index}`);

        let ppbe_bc_input = document.createElement("input");
        ppbe_bc_input.classList.add("ppbe_bc_input");
        ppbe_bc_input.placeholder = "請輸入資料";
        ppbe_bc_input.id = `${item.en}_${index}`;
        if (item.en == "expiry_date") {
          ppbe_bc_input.type = "date";
          let temp_str = element[`${item.en}`].replaceAll("/", "-");
          ppbe_bc_input.value = temp_str;
          ppbe_bc_input.addEventListener("change", () => {
            let temp_date_str = ppbe_bc_input.value.replaceAll("-", "/");
            temp_arr[index].expiry_date = temp_date_str;
            let temp_str = batch_stringifyData(temp_arr);
            console.log(temp_str);
            ppbe_cpoe_batch_edit_data[data_index].lot_exp = temp_str;
          });
        } else {
          ppbe_bc_input.type = "text";
          ppbe_bc_input.value = element[`${item.en}`];
          ppbe_bc_input.addEventListener("input", () => {
            temp_arr[index][`${item.en}`] = ppbe_bc_input.value;
            let temp_str = batch_stringifyData(temp_arr);
            console.log(temp_str);
            ppbe_cpoe_batch_edit_data[data_index].lot_exp = temp_str;
          });
        }

        ppbe_bc_info.appendChild(ppbe_bc_label);
        ppbe_bc_info.appendChild(ppbe_bc_input);

        ppbe_bc_main.appendChild(ppbe_bc_info);
      });

      ppbe_batch_card.appendChild(ppbe_bc_head);
      ppbe_batch_card.appendChild(ppbe_bc_main);

      ppbe_batch_card_container.appendChild(ppbe_batch_card);
    });
  } else {
    ppbe_batch_card_container.innerHTML = "暫無批號資訊";
  }
}
function batch_getToday() {
  const d = new Date();

  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return `${y}/${m}/${day}`;
}
function batch_parseData(str) {
  // 擋空資料（最重要的一行）
  if (!str || !str.trim()) {
    return [];
  }

  const keyMap = {
    批號: "lot",
    效期: "expiry_date",
    數量: "qty",
  };

  return str.split(";").map((item) => {
    const obj = {};

    item.split(",").forEach((pair) => {
      const match = pair.match(/\[(.*?)\]:(.*)/);

      if (match) {
        const zhKey = match[1];
        const value = match[2]?.trim() || "";

        const enKey = keyMap[zhKey] || zhKey;

        obj[enKey] = enKey === "qty" ? Number(value) : value;
      }
    });

    return obj;
  });
}
function batch_stringifyData(arr) {
  // 防呆：不是陣列直接回空字串
  if (!Array.isArray(arr) || arr.length === 0) {
    return "";
  }

  const reverseKeyMap = {
    expiry_date: "效期",
    lot: "批號",
    qty: "數量",
  };

  return arr
    .map((item) => {
      return Object.keys(reverseKeyMap)
        .map((key) => {
          const zhKey = reverseKeyMap[key];
          const value = item[key] ?? "";

          return `[${zhKey}]:${value}`;
        })
        .join(",");
    })
    .join(";");
}

function set_stock_batch_container(object, data_index) {
  let ppbe_stock_batch_container = document.createElement("div");
  ppbe_stock_batch_container.classList.add("ppbe_stock_batch_container");

  let ppbe_stock_head = document.createElement("div");
  ppbe_stock_head.classList.add("ppbe_stock_head");
  ppbe_stock_head.innerHTML = "庫存批號";

  let ppbe_stock_main = document.createElement("div");
  ppbe_stock_main.classList.add("ppbe_stock_main");

  object.qty.forEach((element, index) => {
    let ppbe_stock_card = document.createElement("div");
    ppbe_stock_card.classList.add("ppbe_stock_card");

    let ppbe_stock_add = document.createElement("img");
    ppbe_stock_add.classList.add("ppbe_stock_add");
    ppbe_stock_add.src = "../image/add_wh.png";
    ppbe_stock_add.addEventListener("click", () => {
      let temp_str = ppbe_cpoe_batch_edit_data[data_index].lot_exp;
      let temp_arr = batch_parseData(temp_str);
      let temp_object = {
        expiry_date: object.expiry_date[index],
        lot: object.lot[index],
        qty: object.qty[index],
      };
      temp_arr.push(temp_object);
      console.log(batch_stringifyData(temp_arr));

      ppbe_cpoe_batch_edit_data[data_index].lot_exp =
        batch_stringifyData(temp_arr);

      set_ppbe_batch_card_init(
        ppbe_cpoe_batch_edit_data[data_index].lot_exp,
        data_index,
      );
    });

    let ppbe_stock_info_div = document.createElement("div");
    ppbe_stock_info_div.classList.add("ppbe_stock_info_div");

    let ppbe_stock_lot = document.createElement("div");
    ppbe_stock_lot.classList.add("ppbe_stock_info");
    ppbe_stock_lot.innerHTML = `<div>批號</div><div>${object.lot[index]}</div>`;

    let ppbe_stock_expiry_date = document.createElement("div");
    ppbe_stock_expiry_date.classList.add("ppbe_stock_info");
    ppbe_stock_expiry_date.innerHTML = `<div>效期</div><div>${object.expiry_date[index]}</div>`;

    let ppbe_stock_qty = document.createElement("div");
    ppbe_stock_qty.classList.add("ppbe_stock_info");
    ppbe_stock_qty.innerHTML = `<div>數量</div><div>${object.qty[index]}</div>`;

    ppbe_stock_info_div.appendChild(ppbe_stock_lot);
    ppbe_stock_info_div.appendChild(ppbe_stock_expiry_date);
    ppbe_stock_info_div.appendChild(ppbe_stock_qty);

    ppbe_stock_card.appendChild(ppbe_stock_add);
    ppbe_stock_card.appendChild(ppbe_stock_info_div);

    ppbe_stock_main.appendChild(ppbe_stock_card);
  });

  ppbe_stock_batch_container.appendChild(ppbe_stock_head);
  ppbe_stock_batch_container.appendChild(ppbe_stock_main);

  return ppbe_stock_batch_container;
}

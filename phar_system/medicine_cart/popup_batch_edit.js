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
  popup_batch_edit_div.Set_Visible(false);
}
function popup_batch_edit_div_open() {
  ppbe_init_cpoe_list();
  popup_batch_edit_div.Set_Visible(true);
}

function ppbe_init_cpoe_list() {
  // 設定初始化彈窗
  let cpoe_info;
  let ppbe_main_head_patient = document.querySelector(
    ".ppbe_main_head_patient",
  );
  let ppbe_main_head_page = document.querySelector(".ppbe_main_head_page");
  let ppbe_main_func_display = document.querySelector(
    ".ppbe_main_func_display",
  );
  try {
    // 設定初始化抬頭資訊(護理站-床號 病人姓名)
    ppbe_main_head_patient.innerHTML = `${current_p_bed_data.nurnum}-${current_p_bed_data.bednum}床 ${current_p_bed_data.pnamec}`;
    ppbe_main_head_page.innerHTML = "1/1";
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

  ppbe_card.appendChild(ppbe_input);

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

  switch (current_step) {
    case "1":
      ppbe_step_pre_btn.style.display = "none";
      ppbe_step_next_btn.style.display = "block";
      ppbe_step_submit_btn.style.display = "none";
      ppbe_main_footer.style.justifyContent = "end";
      break;

    case max_page:
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

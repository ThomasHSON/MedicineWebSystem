let popup_large_add_option_div;

function get_popup_large_add_option() {
  popup_large_add_option_div = new Basic_popup_Div(
    "popup_large_add_option_div",
    "popup_large_add_option_div",
    "",
    ""
  );
  popup_large_add_option_div._popup_div.style.border = "10px solid white";

  let header = get_pplao_header();
  let main = get_pplao_main();
  let footer = get_pplao_footer();

  popup_large_add_option_div.AddControl(header);
  popup_large_add_option_div.AddControl(main);
  popup_large_add_option_div.AddControl(footer);

  return popup_large_add_option_div;
}

function get_pplao_header() {
  let pplao_header_container = document.createElement("div");
  pplao_header_container.classList.add("pplao_header_container");

  let pplao_h_title = document.createElement("div");
  pplao_h_title.classList.add("pplao_h_title");

  let pplao_h_title_content = document.createElement("div");
  pplao_h_title_content.classList.add("pplao_h_title_content");
  pplao_h_title_content.innerHTML = `新增選項`;

  pplao_h_title.appendChild(pplao_h_title_content);

  let pplao_h_close_btn = document.createElement("img");
  pplao_h_close_btn.classList.add("pplao_h_close_btn");
  pplao_h_close_btn.src = "../image/close.png";
  pplao_h_close_btn.addEventListener("click", () => {
    popup_large_add_option_div_close();
  });

  pplao_header_container.appendChild(pplao_h_title);
  pplao_header_container.appendChild(pplao_h_close_btn);

  return pplao_header_container;
}
function get_pplao_main() {
  let pplao_main_container = document.createElement("div");
  pplao_main_container.classList.add("pplao_main_container");

  let pplao_main_note_container = document.createElement("input");
  pplao_main_note_container.classList.add("pplao_main_note_container");
  pplao_main_note_container.setAttribute("name", "pplao_main_note_container");
  pplao_main_note_container.id = "pplao_main_note_container";

  pplao_main_container.appendChild(pplao_main_note_container);

  return pplao_main_container;
}
function get_pplao_footer() {
  let pplao_footer_container = document.createElement("div");
  pplao_footer_container.classList.add("pplao_footer_container");

  let pplao_footer_edit_btn = document.createElement("div");
  pplao_footer_edit_btn.classList.add("pplao_footer_edit_btn");
  pplao_footer_edit_btn.classList.add("btn");
  pplao_footer_edit_btn.innerHTML = "新增";
  pplao_footer_edit_btn.addEventListener("click", async () => {
    set_new_cpoe_large_option();
  });

  let pplao_footer_cancel_btn = document.createElement("div");
  pplao_footer_cancel_btn.classList.add("pplao_footer_cancel_btn");
  pplao_footer_cancel_btn.classList.add("btn");
  pplao_footer_cancel_btn.innerHTML = "取消";
  pplao_footer_cancel_btn.addEventListener("click", () => {
    popup_large_add_option_div_close();
  });

  pplao_footer_container.appendChild(pplao_footer_edit_btn);
  pplao_footer_container.appendChild(pplao_footer_cancel_btn);

  return pplao_footer_container;
}
async function popup_large_add_option_div_close() {
  popup_large_add_option_div.Set_Visible(false);
  add_new_option_cancel();
  large_add_option_init();
}
async function popup_large_add_option_div_open() {
  popup_large_add_option_div.Set_Visible(true);
  Set_main_div_enable(false);
}
function large_add_option_init() {
  let pplao_main_note_container = document.querySelector(
    ".pplao_main_note_container"
  );

  pplao_main_note_container.setAttribute("guid", "");
  pplao_main_note_container.setAttribute("index", "");
  pplao_main_note_container.value = "";
}
function set_cpoe_data_option(object, index) {
  let pplao_main_note_container = document.querySelector(
    ".pplao_main_note_container"
  );

  pplao_main_note_container.setAttribute("guid", object.GUID);
  pplao_main_note_container.setAttribute("index", index);
}
async function set_new_cpoe_large_option() {
  let cpoeOptions = [];

  const raw = localStorage.getItem("cpoe_options");

  if (raw !== null) {
    try {
      const parsed = JSON.parse(raw);

      if (Array.isArray(parsed)) {
        cpoeOptions = parsed;
      } else {
        console.warn("cpoe_options 不是陣列，已忽略");
      }
    } catch (e) {
      console.error("cpoe_options JSON 解析失敗", e);
    }
  }

  let pplao_main_note_container = document.querySelector(
    ".pplao_main_note_container"
  );

  let temp_guid = pplao_main_note_container.getAttribute("guid");
  let temp_index = pplao_main_note_container.getAttribute("index");
  let temp_value = pplao_main_note_container.value;

  if (temp_value) {
    cpoeOptions.push(temp_value);

    let post_data = {
      ValueAry: [temp_guid, temp_value],
    };
    api_logger_add(
      `${current_cart.hnursta}-${current_p_bed_data.bednum} \n${temp_guid} 大瓶藥標記變更`,
      "select change"
    );
    let return_data = await update_large_in_med_cpoe(post_data);
    if (return_data.Code == 200) {
      console.log("成功變更");
      current_p_bed_data["cpoe"][temp_index].large = temp_value;
      localStorage.setItem("cpoe_options", JSON.stringify(cpoeOptions));
      set_new_option();
      popup_large_add_option_div_close();
    } else {
      alert("變更失敗請確認資料");
    }
  } else {
    alert("請輸入資料");
  }
}

function add_new_option_cancel() {
  let pplao_main_note_container = document.querySelector(
    ".pplao_main_note_container"
  );
  let temp_guid = pplao_main_note_container.getAttribute("guid");
  if (temp_guid) {
    let med_card_type_select = document.querySelector(
      `.med_card_type_select[guid="${temp_guid}"]`
    );

    let temp_large_value = "";
    for (let i = 0; i < current_p_bed_data["cpoe"].length; i++) {
      const element = current_p_bed_data["cpoe"][i];
      if (element.GUID == temp_guid) temp_large_value = element.large;
    }
    if (temp_large_value == "L") {
      med_card_type_select.value = "L";
    } else {
      med_card_type_select.value = temp_large_value;
    }
  }
}

function set_new_option() {
  let med_card_type_select = document.querySelectorAll(".med_card_type_select");
  let temp_object = {};
  current_p_bed_data.cpoe.forEach((item) => {
    temp_object[`${item.GUID}`] = item;
  });
  med_card_type_select.forEach((element) => {
    element.innerHTML = "";

    let med_card_type_option_1 = document.createElement("option");
    med_card_type_option_1.classList.add("med_card_type_option");
    med_card_type_option_1.value = "";
    med_card_type_option_1.innerHTML = "-";

    element.appendChild(med_card_type_option_1);

    let temp_fake_type_data =
      page_setting_params.large_bottle_location_options.value.split(";");

    for (let index = 0; index < temp_fake_type_data.length; index++) {
      const item = temp_fake_type_data[index];

      let med_card_type_option = document.createElement("option");
      med_card_type_option.classList.add("med_card_type_option");
      med_card_type_option.value = item;
      med_card_type_option.innerHTML = item;

      element.appendChild(med_card_type_option);
    }

    let cpoeOptions = [];

    const raw = localStorage.getItem("cpoe_options");

    if (raw !== null) {
      try {
        const parsed = JSON.parse(raw);

        if (Array.isArray(parsed)) {
          cpoeOptions = parsed;

          for (let index = 0; index < cpoeOptions.length; index++) {
            const item = cpoeOptions[index];

            let med_card_type_option = document.createElement("option");
            med_card_type_option.classList.add("med_card_type_option");
            med_card_type_option.value = item;
            med_card_type_option.innerHTML = item;

            element.appendChild(med_card_type_option);
          }
        } else {
          console.warn("cpoe_options 不是陣列，已忽略");
        }
      } catch (e) {
        console.error("cpoe_options JSON 解析失敗", e);
      }
    }

    let med_card_big_type_option = document.createElement("option");
    med_card_big_type_option.classList.add("med_card_big_type_option");
    med_card_big_type_option.value = "L";
    med_card_big_type_option.innerHTML = "大瓶";

    element.appendChild(med_card_big_type_option);

    let med_card_type_option = document.createElement("option");
    med_card_type_option.classList.add("med_card_type_option");
    med_card_type_option.value = "其他";
    med_card_type_option.innerHTML = "其他";

    element.appendChild(med_card_type_option);

    let temp_guid = element.getAttribute("guid");
    element.value = temp_object[temp_guid].large;
  });
}

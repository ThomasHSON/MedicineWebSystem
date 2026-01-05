let popup_edit_note_div;

function get_popup_edit_note() {
  popup_edit_note_div = new Basic_popup_Div(
    "popup_edit_note_div",
    "popup_edit_note_div",
    "",
    ""
  );
  popup_edit_note_div._popup_div.style.border = "10px solid white";

  let header = get_ppen_header();
  let main = get_ppen_main();
  let footer = get_ppen_footer();

  popup_edit_note_div.AddControl(header);
  popup_edit_note_div.AddControl(main);
  popup_edit_note_div.AddControl(footer);

  return popup_edit_note_div;
}

function get_ppen_header() {
  let ppen_header_container = document.createElement("div");
  ppen_header_container.classList.add("ppen_header_container");

  let ppen_h_title = document.createElement("div");
  ppen_h_title.classList.add("ppen_h_title");

  let ppen_h_title_bed_info = document.createElement("div");
  ppen_h_title_bed_info.classList.add("ppen_h_title_bed_info");
  ppen_h_title_bed_info.innerHTML = "護理站-床號";

  let ppen_h_title_content = document.createElement("div");
  ppen_h_title_content.classList.add("ppen_h_title_content");
  ppen_h_title_content.innerHTML = `處方備註`;

  ppen_h_title.appendChild(ppen_h_title_bed_info);
  ppen_h_title.appendChild(ppen_h_title_content);

  let ppen_h_close_btn = document.createElement("img");
  ppen_h_close_btn.classList.add("ppen_h_close_btn");
  ppen_h_close_btn.src = "../image/close.png";
  ppen_h_close_btn.addEventListener("click", () => {
    popup_edit_note_div_close();
  });

  ppen_header_container.appendChild(ppen_h_title);
  ppen_header_container.appendChild(ppen_h_close_btn);

  return ppen_header_container;
}
function get_ppen_main() {
  let ppen_main_container = document.createElement("div");
  ppen_main_container.classList.add("ppen_main_container");

  let ppen_main_cpoe_container = document.createElement("div");
  ppen_main_cpoe_container.classList.add("ppen_main_cpoe_container");

  let ppen_main_cpoe_med_container = document.createElement("div");
  ppen_main_cpoe_med_container.classList.add("ppen_main_cpoe_med_container");

  let ppen_main_cpoe_med_name = document.createElement("div");
  ppen_main_cpoe_med_name.classList.add("ppen_main_cpoe_med_name");
  ppen_main_cpoe_med_name.innerHTML = "藥名";

  let ppen_main_cpoe_med_cht_name = document.createElement("div");
  ppen_main_cpoe_med_cht_name.classList.add("ppen_main_cpoe_med_cht_name");
  ppen_main_cpoe_med_cht_name.innerHTML = "中文名";

  let ppen_main_cpoe_med_code = document.createElement("div");
  ppen_main_cpoe_med_code.classList.add("ppen_main_cpoe_med_code");
  ppen_main_cpoe_med_code.innerHTML = "藥碼";

  ppen_main_cpoe_med_container.appendChild(ppen_main_cpoe_med_name);
  ppen_main_cpoe_med_container.appendChild(ppen_main_cpoe_med_cht_name);
  ppen_main_cpoe_med_container.appendChild(ppen_main_cpoe_med_code);

  let ppen_main_note_container = document.createElement("textarea");
  ppen_main_note_container.classList.add("ppen_main_note_container");
  ppen_main_note_container.setAttribute("name", "ppen_main_note_container");
  ppen_main_note_container.id = "ppen_main_note_container";

  ppen_main_container.appendChild(ppen_main_cpoe_med_container);
  ppen_main_container.appendChild(ppen_main_note_container);

  return ppen_main_container;
}
function get_ppen_footer() {
  let ppen_footer_container = document.createElement("div");
  ppen_footer_container.classList.add("ppen_footer_container");

  let ppen_footer_edit_btn = document.createElement("div");
  ppen_footer_edit_btn.classList.add("ppen_footer_edit_btn");
  ppen_footer_edit_btn.classList.add("btn");
  ppen_footer_edit_btn.innerHTML = "編輯";
  ppen_footer_edit_btn.addEventListener("click", async (e) => {
    let temp_guid = e.target.getAttribute("guid");
    if (temp_guid) {
      let ppen_main_note_container = document.querySelector(
        ".ppen_main_note_container"
      );
      let post_data = {
        Data: [
          {
            GUID: temp_guid,
            note: ppen_main_note_container.value,
          },
        ],
      };

      let return_data = await update_cpoe_note_api(post_data);
      api_logger_add(
        `${current_cart.hnursta}-${current_p_bed_data.bednum} \n${temp_guid} 處方備註更新`,
        "update note"
      );
      if (return_data.Code != 200) {
        alert(`編輯錯誤：${return_data.Result}`);
      } else {
        let med_card_main_display_container = document.querySelector(
          `.med_card_main_display_container[guid="${temp_guid}"]`
        );
        current_p_bed_data["cpoe"].forEach((element, index) => {
          if (element.GUID == temp_guid)
            current_p_bed_data["cpoe"][index].note =
              ppen_main_note_container.value;
        });

        // allocate_display_init("");

        if (ppen_main_note_container.value) {
          let med_card_note_container =
            med_card_main_display_container?.querySelector(
              ".med_card_note_container"
            );
          if (med_card_note_container) {
            med_card_note_container.innerHTML = `備註：${ppen_main_note_container.value}`;
          } else {
            let med_card_info_container =
              med_card_main_display_container.querySelector(
                ".med_card_info_container"
              );
            let med_card_note_container = document.createElement("div");
            med_card_note_container.classList.add("med_card_note_container");
            med_card_note_container.innerHTML = `備註：${ppen_main_note_container.value}`;

            med_card_info_container.insertAdjacentElement(
              "afterend",
              med_card_note_container
            );
          }
        } else {
          let med_card_note_container =
            med_card_main_display_container?.querySelector(
              ".med_card_note_container"
            );
          if (med_card_note_container) med_card_note_container.remove();
        }

        document.querySelectorAll(".med_card_open_tigger").forEach((el) => {
          const clean = el.cloneNode(true); // true = 保留子節點
          el.replaceWith(clean);
        });

        open_med_detail_info();

        let med_card_open_tigger = document.querySelector(
          `.med_card_open_tigger[guid="${temp_guid}"`
        );
        med_card_open_tigger.classList.remove("med_card_open");

        popup_edit_note_div_close();
      }
    } else {
      popup_edit_note_div_close();
    }
  });

  let ppen_footer_cancel_btn = document.createElement("div");
  ppen_footer_cancel_btn.classList.add("ppen_footer_cancel_btn");
  ppen_footer_cancel_btn.classList.add("btn");
  ppen_footer_cancel_btn.innerHTML = "取消";
  ppen_footer_cancel_btn.addEventListener("click", () => {
    popup_edit_note_div_close();
  });

  ppen_footer_container.appendChild(ppen_footer_edit_btn);
  ppen_footer_container.appendChild(ppen_footer_cancel_btn);

  return ppen_footer_container;
}
async function popup_edit_note_div_close() {
  popup_edit_note_div.Set_Visible(false);
  edit_note_init();
}
async function popup_edit_note_div_open() {
  popup_edit_note_div.Set_Visible(true);
  Set_main_div_enable(false);
}
function edit_note_init() {
  let ppen_footer_edit_btn = document.querySelector(".ppen_footer_edit_btn");
  let ppen_h_title_bed_info = document.querySelector(".ppen_h_title_bed_info");
  let ppen_main_cpoe_med_name = document.querySelector(
    ".ppen_main_cpoe_med_name"
  );
  let ppen_main_cpoe_med_cht_name = document.querySelector(
    ".ppen_main_cpoe_med_cht_name"
  );
  let ppen_main_cpoe_med_code = document.querySelector(
    ".ppen_main_cpoe_med_cht_name"
  );
  let ppen_main_note_container = document.querySelector(
    ".ppen_main_note_container"
  );

  ppen_footer_edit_btn.setAttribute("guid", "");
  ppen_h_title_bed_info.innerHTML = "護理站-床號";
  ppen_main_cpoe_med_name.innerHTML = "藥名";
  ppen_main_cpoe_med_cht_name.innerHTML = "中文名";
  ppen_main_cpoe_med_code.innerHTML = "藥碼";
  ppen_main_note_container.value = "";
}
function set_edit_note_info(object) {
  let ppen_footer_edit_btn = document.querySelector(".ppen_footer_edit_btn");
  let ppen_h_title_bed_info = document.querySelector(".ppen_h_title_bed_info");
  let ppen_main_cpoe_med_name = document.querySelector(
    ".ppen_main_cpoe_med_name"
  );
  let ppen_main_cpoe_med_cht_name = document.querySelector(
    ".ppen_main_cpoe_med_cht_name"
  );
  let ppen_main_cpoe_med_code = document.querySelector(
    ".ppen_main_cpoe_med_code"
  );
  let ppen_main_note_container = document.querySelector(
    ".ppen_main_note_container"
  );

  ppen_footer_edit_btn.setAttribute("guid", object.GUID);
  ppen_h_title_bed_info.innerHTML = `${object.nurnum}-${object.bednum}`;
  ppen_main_cpoe_med_name.innerHTML = object.med_cloud[0].NAME;
  ppen_main_cpoe_med_cht_name.innerHTML = object.med_cloud[0].CHT_NAME;
  ppen_main_cpoe_med_code.innerHTML = object.med_cloud[0].CODE;
  ppen_main_note_container.value = object.note;
}

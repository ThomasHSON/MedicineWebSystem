const qrCodeScanner = {
  init: qrCodeScannerInit,
  result: "幹你娘",
  cameraOn: cameraOn,
  cameraOff: cameraOff,
  barCodeSetOn: barCodeBuildOn,
  barCodeSetOff: barCodeBuildOff,
  DEFAULT_CONSTRAINTS: {
    audio: false,
    video: {
      facingMode: "environment",
      width: { ideal: 1920 },
      height: { ideal: 1080 },
      frameRate: { ideal: 30 },
    },
  },
  capTimer: null, // setInterval handler
  interval: 500,
  loopBusy: false, // 避免輪詢重入
  searchAPI_Url: "",
  scanAPI_Url: "",
  barcode: "",
  getMedResult: null,
  medicine_info: null,
  updateMed: null,
  updateMedAPIUrl: null,
};

// qrCodeScannerInit(掃描條碼API, 條碼搜尋藥品API, 藥品建立條碼API, 相機開啟按鈕綁定, 藥品清單檔案, 條碼搜尋結果func返回)
function qrCodeScannerInit(
  scan_url,
  search_url,
  updateUrl,
  btnEl,
  medicine_info,
  set_func
) {
  const body = document.querySelector("body");
  body.style.position = "relative";
  qrCodeScannerSet(body);
  qrCodeBuilderSet(body);
  qrCodeScanner.searchAPI_Url = search_url;
  qrCodeScanner.scanAPI_Url = scan_url;
  qrCodeScanner.getMedResult = set_func;
  qrCodeScanner.medicine_info = medicine_info;
  qrCodeScanner.updateMedAPIUrl = updateUrl;
  btnEl.addEventListener("click", () => {
    cameraOn();
  });
}

function qrCodeScannerSet(bodyElement) {
  const temp_str = "qcs_";
  const modal = document.createElement("div");
  modal.classList.add(`modal`);
  modal.classList.add(`${temp_str}modal`);

  const background = document.createElement("div");
  background.classList.add(`background`);

  const container = document.createElement("div");
  container.classList.add(`container`);
  container.classList.add(`${temp_str}container`);

  const head = document.createElement("div");
  head.classList.add(`head`);
  head.classList.add(`${temp_str}head`);

  const headTitle = document.createElement("div");
  headTitle.classList.add(`headTitle`);

  const camera_icon = document.createElement("img");
  camera_icon.classList.add("camera_icon");
  camera_icon.classList.add("d_camera_icon");
  camera_icon.src = "../lib/qrcodeScanner/img/camera.png";

  const m_camera_icon = document.createElement("img");
  m_camera_icon.classList.add("camera_icon");
  m_camera_icon.classList.add("m_camera_icon");
  m_camera_icon.src = "../lib/qrcodeScanner/img/cameraWhite.png";

  const headContent = document.createElement("div");
  headContent.classList.add(`headContent`);
  headContent.classList.add(`qcs_headContent`);
  headContent.innerHTML = "條碼掃描";

  headTitle.appendChild(camera_icon);
  headTitle.appendChild(m_camera_icon);
  headTitle.appendChild(headContent);

  const headCancel = document.createElement("img");
  headCancel.classList.add("headCancel");
  headCancel.classList.add("d_headCancel");
  headCancel.src = "../lib/qrcodeScanner/img/close.png";
  headCancel.addEventListener("click", qrCodeScanner.cameraOff);

  const m_headCancel = document.createElement("img");
  m_headCancel.classList.add("headCancel");
  m_headCancel.classList.add("m_headCancel");
  m_headCancel.src = "../lib/qrcodeScanner/img/closeWhite.png";
  m_headCancel.addEventListener("click", qrCodeScanner.cameraOff);

  head.appendChild(headTitle);
  head.appendChild(headCancel);
  head.appendChild(m_headCancel);

  const main = qrCodeScannerSetMain();

  const footer = document.createElement("div");
  footer.classList.add(`footer`);

  container.appendChild(head);
  container.appendChild(main);
  container.appendChild(footer);

  modal.appendChild(container);
  modal.appendChild(background);

  bodyElement.appendChild(modal);
}
function qrCodeScannerSetMain() {
  const temp_str = "qcs_";
  const main = document.createElement("div");
  main.classList.add(`main`);
  main.classList.add(`${temp_str}main`);

  const qcs_info_container = document.createElement("div");
  qcs_info_container.classList.add("qcs_info_container");

  const qcs_info = document.createElement("p");
  qcs_info.classList.add("qcs_info");
  qcs_info.innerHTML = "無法開啟相機，請確認相機權限已開啟";

  qcs_info_container.appendChild(qcs_info);

  const qcs_notice_container = document.createElement("div");
  qcs_notice_container.classList.add("qcs_notice_container");

  qcs_notice_container.innerHTML = `
  <div class="qcs_notice_head">請將條碼對準鏡頭</div>
  <div class="qcs_notice_mid">支援一維條碼與二維條碼（QR Code）</div>
  <div class="qcs_notice_bot">💡 點擊畫面可對焦</div>
  `;

  const m_qcs_info_container = document.createElement("div");
  m_qcs_info_container.classList.add("m_qcs_info_container");

  const m_qcs_info = document.createElement("p");
  m_qcs_info.classList.add("m_qcs_info");
  m_qcs_info.innerHTML = "無法開啟相機，請確認相機權限已開啟";

  m_qcs_info_container.appendChild(m_qcs_info);

  const qcs_video_container = qrCodeScannerSetVideo();

  main.appendChild(qcs_info_container);
  main.appendChild(qcs_video_container);
  main.appendChild(m_qcs_info_container);
  main.appendChild(qcs_notice_container);

  return main;
}
function qrCodeScannerSetVideo() {
  const qcs_video_container = document.createElement("div");
  qcs_video_container.classList.add("qcs_video_container");

  const video = document.createElement("video");
  video.classList.add("qcs_video");
  const canvas = document.createElement("canvas");
  canvas.classList.add("qcs_canvas");

  qcs_video_container.appendChild(video);
  qcs_video_container.appendChild(canvas);

  return qcs_video_container;
}

function show_camera_error(boolean) {
  const qcs_info_container = document.querySelector(".qcs_info_container");
  const m_qcs_info_container = document.querySelector(".m_qcs_info_container");
  const width = window.innerWidth;
  const is_moblie = width < 640 ? true : false;

  if (boolean) {
    if (is_moblie) {
      m_qcs_info_container.style.display = "block";
      qcs_info_container.style.display = "none";
    } else {
      m_qcs_info_container.style.display = "none";
      qcs_info_container.style.display = "block";
    }
  } else {
    m_qcs_info_container.style.display = "none";
    qcs_info_container.style.display = "none";
  }
}

async function cameraOn() {
  const video = document.querySelector(".qcs_video");
  const container = document.querySelector(".qcs_modal");
  const canvas = document.querySelector(".qcs_canvas");
  container.style.display = "block";

  await pcsStart(video, qrCodeScanner.DEFAULT_CONSTRAINTS);
  await getScanResult(video, canvas);
}

// ====== pcsStart / pcsEnd ======
async function pcsStart(videoEl, constraints) {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  videoEl.srcObject = stream;
  try {
    show_camera_error(false);
    await videoEl.play();
  } catch (err) {
    show_camera_error(true);
  }
  // 等到拿到實際尺寸
  await new Promise((res) => {
    if (videoEl.readyState >= 2 && videoEl.videoWidth) return res();
    const onReady = () => {
      if (videoEl.videoWidth) {
        videoEl.removeEventListener("loadedmetadata", onReady);
        videoEl.removeEventListener("canplay", onReady);
        res();
      }
    };
    videoEl.addEventListener("loadedmetadata", onReady, { once: true });
    videoEl.addEventListener("canplay", onReady, { once: true });
  });
  return stream;
}

function pcsEnd(videoEl) {
  const s = videoEl?.srcObject;
  if (s && s.getTracks) s.getTracks().forEach((t) => t.stop());
  if (videoEl) videoEl.srcObject = null;
}

function cameraOff() {
  const video = document.querySelector(".qcs_video");
  const container = document.querySelector(".qcs_modal");

  container.style.display = "none";

  pcsEnd(video);
}

async function getScanResult(videoEl, canvasEl) {
  let result = await capturePic(videoEl, canvasEl);
  if (result.results.length == 1 && result.results[0].code) {
    console.log(result);
    console.log(result.results[0].code);

    let barcodeResult = await getBarCodeSearch(result.results[0].code);
    console.log(barcodeResult);
    if (barcodeResult.Code == 200) {
      if (Array.isArray(barcodeResult.Data)) {
        qrCodeScanner.getMedResult(barcodeResult.Data);
        cameraOff();
        return;
      }
    } else if (barcodeResult.Result == "查無資料") {
      barCodeBuildOn(result.results[0].code);
      cameraOff();
      return;
    }
  } else if (result.results.length > 1) {
    console.log(result);
    getScanResult(videoEl, canvasEl);
    return;
  } else {
    console.log(result);
    getScanResult(videoEl, canvasEl);
    return;
  }
  return;
}
// ---- 單次擷取畫面上傳 ----
async function capturePic(videoEl, canvasEl) {
  const w = videoEl.videoWidth;
  const h = videoEl.videoHeight;
  if (!w || !h) return;

  canvasEl.width = w;
  canvasEl.height = h;
  const ctx = canvasEl.getContext("2d");
  ctx.drawImage(videoEl, 0, 0, w, h);

  const blob = await new Promise((res) =>
    canvasEl.toBlob(res, "image/jpeg", 1)
  );

  // 上傳到API
  const form = new FormData();
  form.append("file", blob);
  try {
    const rsp = await fetch(qrCodeScanner.scanAPI_Url, {
      method: "POST",
      body: form,
    });
    return rsp.json();
  } catch (err) {
    console.error(err);
    alert(qrCodeScanner.scanAPI_Url, err);
    cameraOff();
  }
}
async function getBarCodeSearch(barcode) {
  let post = {
    Value: barcode,
  };
  console.log(qrCodeScanner.searchAPI_Url);
  console.log(post);
  try {
    const rsp = await fetch(qrCodeScanner.searchAPI_Url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(post),
    });
    // console.log("fasdff");
    return rsp.json();
  } catch (err) {
    console.error(err);
    alert(qrCodeScanner.searchAPI_Url, err);
    cameraOff();
  }
}

function qrCodeBuilderSet(bodyElement) {
  const temp_str = "qcb_";
  const modal = document.createElement("div");
  modal.classList.add(`modal`);
  modal.classList.add(`${temp_str}modal`);

  const background = document.createElement("div");
  background.classList.add(`background`);

  const container = document.createElement("div");
  container.classList.add(`container`);
  container.classList.add(`${temp_str}container`);

  const head = qrCodeBuildHead();
  const main = qrCodeBuildMain();

  const footer = document.createElement("div");
  footer.classList.add(`${temp_str}footer`);

  const button = document.createElement("div");
  button.classList.add(`${temp_str}button`);
  //   button.classList.add(`${temp_str}button_uncheckable`);
  button.innerHTML = "確認建立";
  button.addEventListener("click", async (e) => {
    if (button.className.includes(`${temp_str}button_uncheckable`)) return;
    button.classList.add(`${temp_str}button_uncheckable`);
    button.innerHTML = "建立中...";

    if (qrCodeScanner.updateMed.FILE_STATUS == "關檔中") {
      alert("藥品鎖檔中，請確認後再進行條碼建置");
      button.classList.remove(`${temp_str}button_uncheckable`);
      button.innerHTML = "確認建立";
      return;
    }

    let temp_result = await buildBarCodeAPI();
    console.log(temp_result);
    if (temp_result.Code == 200) {
      qrCodeScanner.getMedResult(temp_result.Data);
      button.classList.remove(`${temp_str}button_uncheckable`);
      button.innerHTML = "確認建立";
      barCodeBuildOff();
    } else {
      alert("條碼建立失敗", temp_result.Result);
      button.classList.remove(`${temp_str}button_uncheckable`);
      button.innerHTML = "確認建立";
    }
  });

  footer.appendChild(button);

  container.appendChild(head);
  container.appendChild(main);
  container.appendChild(footer);

  modal.appendChild(container);
  modal.appendChild(background);

  bodyElement.appendChild(modal);
}
function qrCodeBuildHead() {
  const temp_str = "qcb_";
  const head = document.createElement("div");
  head.classList.add(`head`);
  head.classList.add(`${temp_str}head`);

  const headTitle = document.createElement("div");
  headTitle.classList.add(`headTitle`);

  const camera_icon = document.createElement("img");
  camera_icon.classList.add("plus_icon");
  camera_icon.src = "../lib/qrcodeScanner/img/plus.png";

  const headContent = document.createElement("div");
  headContent.classList.add(`headContent`);
  headContent.innerHTML = "條碼建立";

  headTitle.appendChild(camera_icon);
  headTitle.appendChild(headContent);

  const headCancel = document.createElement("img");
  headCancel.classList.add("headCancel");
  headCancel.src = "../lib/qrcodeScanner/img/close.png";
  headCancel.addEventListener("click", qrCodeScanner.barCodeSetOff);

  head.appendChild(headTitle);
  head.appendChild(headCancel);

  return head;
}
function qrCodeBuildMain() {
  const temp_str = "qcb_";
  const main = document.createElement("div");
  main.classList.add(`${temp_str}main`);
  main.classList.add(`main`);

  let infoArr = [
    {
      name: "barcode",
      cht: "條碼",
    },
    {
      name: "code",
      cht: "藥碼",
    },
    {
      name: "name",
      cht: "藥名",
    },
    {
      name: "cht_name",
      cht: "中文名",
    },
    {
      name: "SKDIACODE",
      cht: "料號",
    },
  ];

  infoArr.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("input_container");

    const label = document.createElement("label");
    label.classList.add(`${temp_str}label`);
    label.setAttribute("for", `${temp_str}${element.name}_input`);
    label.innerHTML = element.cht;
    if (element.name == "code") {
      label.innerHTML = `${element.cht} <span>*</span>`;
    }

    const filter_container = document.createElement("div");
    filter_container.classList.add("filter_container");

    const input = document.createElement("input");
    input.classList.add(`${temp_str}input`);
    input.id = `${temp_str}${element.name}_input`;
    input.placeholder = `輸入${element.cht}搜尋...`;
    input.type = "text";
    if (element.name == "barcode") input.disabled = true;
    input.addEventListener("blur", () => {
      setTimeout(() => {
        filter_container.style.display = "none";
        filter_container.innerHTML = "";
      }, 200);
    });
    input.addEventListener("input", (e) => {
      filter_container.innerHTML = "";
      let tempResult = qrCodeScanner.medicine_info;
      if (!e.target.value) {
        filter_container.style.display = "none";
        return;
      }
      console.log(e.target.value);
      switch (element.name) {
        case "code":
          tempResult = tempResult.filter((item) => {
            return item.CODE?.toUpperCase().includes(
              e.target.value.toUpperCase()
            );
          });
          break;
        case "name":
          tempResult = tempResult.filter((item) => {
            return item.NAME?.toUpperCase().includes(
              e.target.value.toUpperCase()
            );
          });
          break;
        case "cht_name":
          tempResult = tempResult.filter((item) => {
            return item.CHT_NAME?.toUpperCase().includes(
              e.target.value.toUpperCase()
            );
          });
          break;
        case "SKDIACODE":
          tempResult = tempResult.filter((item) => {
            return item.SKDIACODE?.toUpperCase().includes(
              e.target.value.toUpperCase()
            );
          });
          break;

        default:
          tempResult = [];
          filter_container.style.display = "none";
          break;
      }
      console.log(tempResult);
      if (tempResult.length > 0) {
        filter_container.style.display = "block";
        tempResult.forEach((item) => {
          const med_div = document.createElement("div");
          med_div.classList.add("qcb_med_div");
          med_div.addEventListener("click", () => {
            const qcb_code_input = document.querySelector("#qcb_code_input");
            const qcb_name_input = document.querySelector("#qcb_name_input");
            const qcb_cht_name_input = document.querySelector(
              "#qcb_cht_name_input"
            );
            const qcb_SKDIACODE_input = document.querySelector(
              "#qcb_SKDIACODE_input"
            );

            qcb_code_input.value = item.CODE;
            qcb_name_input.value = item.NAME;
            qcb_cht_name_input.value = item.CHT_NAME;
            qcb_SKDIACODE_input.value = item.SKDIACODE;

            qrCodeScanner.updateMed = item;
            console.log(item);
          });
          const med_name = document.createElement("div");
          med_name.classList.add("qcb_med_name");
          med_name.innerHTML = item.NAME;
          const med_code = document.createElement("div");
          med_code.classList.add("qcb_med_code");
          med_code.innerHTML = item.CODE;

          med_div.appendChild(med_name);
          med_div.appendChild(med_code);

          filter_container.appendChild(med_div);
        });
      }
    });

    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(filter_container);

    main.appendChild(div);
  });

  return main;
}

function barCodeBuildOff() {
  const container = document.querySelector(".qcb_modal");
  const qcb_barcode_input = document.querySelector("#qcb_barcode_input");
  const qcb_code_input = document.querySelector("#qcb_code_input");
  const qcb_name_input = document.querySelector("#qcb_name_input");
  const qcb_cht_name_input = document.querySelector("#qcb_cht_name_input");
  const qcb_SKDIACODE_input = document.querySelector("#qcb_SKDIACODE_input");

  qcb_barcode_input.value = "";
  qcb_code_input.value = "";
  qcb_name_input.value = "";
  qcb_cht_name_input.value = "";
  qcb_SKDIACODE_input.value = "";

  qrCodeScanner.updateMed = null;

  container.style.display = "none";
}
function barCodeBuildOn(barcode) {
  const modal = document.querySelector(".qcb_modal");
  const input = document.querySelector("#qcb_barcode_input");
  input.value = barcode;

  modal.style.display = "block";
}
async function buildBarCodeAPI() {
  const qcb_barcode_input = document.querySelector("#qcb_barcode_input");
  const med_info = qrCodeScanner.updateMed;
  let temp_arr = med_info.BARCODE;
  temp_arr.push(qcb_barcode_input.value);
  med_info.BARCODE = temp_arr;
  med_info.BARCODE2 = JSON.stringify(temp_arr);
  let post = { Data: [med_info] };

  console.log(post);
  try {
    const rsp = await fetch(qrCodeScanner.updateMedAPIUrl, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(post),
    });
    return rsp.json();
  } catch (err) {
    console.error(err);
    return {
      Code: -200,
      Result: "網路錯誤" + err,
    };
  }
}

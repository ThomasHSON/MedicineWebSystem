const qrCodeScanner = {
  init: qrCodeScannerInit,
  result: "幹你娘",
  cameraOn: "",
  cameraOff: "",
  barCodeSetOn: "",
  barCodeSetOff: "",
};

function qrCodeScannerInit() {
  const body = document.querySelector("body");
  body.style.position = "relative";
  qrCodeScannerSet(body);
  qrCodeBuilderSet(body);
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

  const m_headCancel = document.createElement("img");
  m_headCancel.classList.add("headCancel");
  m_headCancel.classList.add("m_headCancel");
  m_headCancel.src = "../lib/qrcodeScanner/img/closeWhite.png";

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
async function cameraOn(params) {
  const video = querySelector(".qcs_video");
  const container = querySelector(".qcs_modal");

  container.style.display = "block";
}
async function cameraOff(params) {
  const video = querySelector(".qcs_video");
  const container = querySelector(".qcs_modal");

  container.style.display = "none";
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

  const head = document.createElement("div");
  head.classList.add(`head`);

  const headTitle = document.createElement("div");
  headTitle.classList.add(`headTitle`);

  const camera_icon = document.createElement("img");
  camera_icon.classList.add("camera_icon");
  camera_icon.src = "../lib/qrcodeScanner/img/camera.png";

  const headContent = document.createElement("div");
  headContent.classList.add(`headContent`);
  headContent.innerHTML = "條碼掃描";

  headTitle.appendChild(camera_icon);
  headTitle.appendChild(headContent);

  head.appendChild(headTitle);

  const main = document.createElement("div");
  main.classList.add(`main`);

  const footer = document.createElement("div");
  footer.classList.add(`footer`);

  container.appendChild(head);
  container.appendChild(main);
  container.appendChild(footer);

  modal.appendChild(container);
  modal.appendChild(background);

  bodyElement.appendChild(modal);
}

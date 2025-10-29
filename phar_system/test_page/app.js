window.addEventListener("load", async () => {
  let temp_result = await get_medicine();
  qrCodeScanner.init(
    "https://36.230.221.108:3804/barcode",
    "https://www.kutech.tw:4443/api/MED_page/serch_by_BarCode",
    test_resultttt,
    temp_result.Data,
    "https://www.kutech.tw:4443/api/MED_page/add_med_clouds"
  );
  let a = qrCodeScanner.result;
  console.log(a);
  let gogo = document.querySelector("#gogo");
  gogo.addEventListener("click", (e) => {
    e.preventDefault();
    qrCodeScanner.cameraOn();
  });
  let nono = document.querySelector("#nono");
  nono.addEventListener("click", (e) => {
    e.preventDefault();
    qrCodeScanner.barCodeSetOn("gggg操");
  });
});
function test_resultttt(result) {
  console.log("我操你媽的雞巴巴巴", result);
}
async function get_medicine() {
  try {
    const rsp = await fetch(
      "https://www.kutech.tw:4443/api/MED_page/get_med_cloud",
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({}),
      }
    );
    return rsp.json();
  } catch (err) {
    console.error(err);
  }
}

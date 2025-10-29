window.addEventListener("load", () => {
  qrCodeScanner.init();
  let a = qrCodeScanner.result;
  console.log(a);
});

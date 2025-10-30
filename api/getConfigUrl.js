async function get_config_url() {
  try {
    const rsp = await fetch("../config.txt");
    const text = await rsp.text();
    const data = JSON.parse(text);
    return data;
  } catch (err) {
    console.log("取得config Url失敗");
  }
}

let a = "16";
let b = a.split(",");
let ab = document.querySelector("#gogo");
let abc = document.querySelector("#nono");
ab.innerHTML = b[0];
abc.innerHTML = b[1] ? b[1] : "0";

[
  { name: a, position: "0,0" },
  { name: b, position: "0,1" },
  { name: c, position: "1,0" },
  { name: d, position: "1,1" },
  { name: e, position: "2,0" },
  { name: f, position: "3,0" },
];

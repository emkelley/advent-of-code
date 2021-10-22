const CryptoJS = require("crypto-js");
const input = "iwrupvqb";

let i = 0;
while (i < 100000000) {
  const md5 = CryptoJS.MD5(input + i);
  if (md5.toString().substring(0, 6) === "000000") {
    console.log(i);
    break;
  }
  i++;
}

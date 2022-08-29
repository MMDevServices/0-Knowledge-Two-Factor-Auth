//config

const password = ""
const twoFactorCode = ""

//don't edit below unless you want to change the code

//requires

var CryptoJS = require("crypto-js");
var SHA256 = require("crypto-js/sha256");
var Base64 = require("crypto-js/enc-base64");

var key = CryptoJS.AES.encrypt(twoFactorCode, password).toString();
var passwordHashed = Base64.stringify(SHA256(password))

console.log(`Put the following in the config of the main file:\n \nKEY: ${key}\n \nPASSWORDHASH: ${passwordHashed}`)

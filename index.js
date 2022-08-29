//config

const KEY = ""
const PASSWORDHASH = ""
const PORT = 0

//don't edit below unless you want to change the code

//requires

var Fs = require('fs')
var speakeasy = require('speakeasy');
var CryptoJS = require("crypto-js");
var SHA256 = require("crypto-js/sha256");
var Base64 = require("crypto-js/enc-base64");
var express = require('express')

//setup check

if(KEY == "" || PASSWORDHASH == "" || PORT == 0) {
    return console.log("Config is empty.")
}

var exists = Fs.existsSync("./setup.js")
if(exists == true) {
    return console.log("For security reasons the setup.js file must be deleted before starting.")
}

//util functions

function getToken(secret) {
    var token = speakeasy.totp({
      secret: secret,
      encoding: 'base32'
    });

    return token
}

//express setup

var app = express()

app.get('/', function(req, res) {
    var password = req.query.password
    var passHash = Base64.stringify(SHA256(password))

    //if password matches hash then attempt to decrypt the 2 factor key
    //once decrypted use the key to generate a code and send it to the user

    if (passHash != PASSWORDHASH) {
        res.send("Wrong password.")
    } else {
        var bytes = CryptoJS.AES.decrypt(KEY, password);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);

        res.send(getToken(originalText))
    }
})
var server = app.listen(PORT)

// https://developers.google.com/identity/protocols/OAuth2
// OAUTH 2.0 ENDPOINTS at https://developers.google.com/identity/protocols/OAuth2UserAgent
var http = require("https");
const h5recorderSvc = require('./h5recorderSvc.js')
const StorageSvc = require('./StorageSvc.js')
const request = require('request')
const fs = require('fs')

const {redirectUri, clientId, clientSecret} = require('../config.json')

// let redirectUri = config.redirectUri
// let clientId = config.clientId
// let clientSecret = config.clientSecret

let scope = 'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file'

function oauthCodeExchange(authCode, callback) { //exchange auth code w ac token
  //

  var options = {
    "method": "POST",
    "hostname": "www.googleapis.com",
    "port": null,
    "path": "/oauth2/v4/token",
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      // "authorization": "Bearer "
    }
  };

  var _req = http.request(options, function (_res) {
    var chunks = [];

    _res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    _res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
      callback(JSON.parse(body.toString()))
    });
  });

  _req.write(`code=${authCode}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${clientSecret}&scope=${scope}&grant_type=authorization_code`);
  _req.end();
}

// https://developers.google.com/drive/api/v3/reference/files/create
function createConfig(accessToken, callback) {
  var options = {
    "method": "POST",
    "hostname": "www.googleapis.com",
    "port": null,
    "path": "/upload/drive/v3/files?uploadType=multipart",
    "headers": {
      "content-type": "multipart/related; boundary=foo_bar_baz",
      "authorization": `Bearer ${accessToken}`
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
      callback(JSON.parse(body.toString()))
    });
  });
/*
"parents": [
  "appDataFolder"
]
*/
  req.write(`--foo_bar_baz
Content-Type: application/json; charset=UTF-8

{
  "name": "HelloWorld.txt"
}

--foo_bar_baz
Content-Type: application/json; charset=UTF-8

{
  "config": {
    "hello": "world"
  }
}

--foo_bar_baz--`);
  req.end();
}


// https://developers.google.com/drive/api/v3/multipart-upload
function uploadFile(accessToken, path, callback) {
  let uri = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
  let headers = {
    "Content-Type": "multipart/related",
    "authorization": `Bearer ${accessToken}`
  }
  request({
    method: 'POST',
    preambleCRLF: true,
    postambleCRLF: true,
    uri,
    headers,
    multipart: [
      {
        'content-type': 'application/json',
        body: JSON.stringify({
          name: `storyreport-${new Date().getTime()}.mp4`
        })
      },
      {
        'content-type': 'video/mp4',
        body: fs.createReadStream(path)
      }
    ]
  }, callback)
}
module.exports = {

  // "https://www.googleapis.com/auth/drive.file"
  // drive.appdata

  // https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:8080/&prompt=consent&response_type=code&client_id=97556995695-49mcvffnf234m6rbp27r4kfr0aehn28f.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file&access_type=offline

// youtube
// https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:8080/&prompt=consent&response_type=code&client_id=97556995695-49mcvffnf234m6rbp27r4kfr0aehn28f.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.upload&access_type=offline

  oauthCodeExchange,
  uploadFile,

  getLoginURL (state) {
    // console.log(JSON.stringify(req.body))
    // //TODO validation
    return `https://accounts.google.com/o/oauth2/v2/auth?state=${state}&redirect_uri=${redirectUri}&prompt=consent&response_type=code&client_id=${clientId}&scope=${scope}&access_type=offline`;
  }

}

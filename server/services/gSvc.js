// https://developers.google.com/identity/protocols/OAuth2
// OAUTH 2.0 ENDPOINTS at https://developers.google.com/identity/protocols/OAuth2UserAgent
var http = require("https");
const h5recorderSvc = require('./h5recorderSvc.js')
const request = require('request')
const fs = require('fs')
const Busboy = require('busboy');

const {redirectUri, clientId, clientSecret, PREFIX_RESOURCE, PREFIX_OUTPUT} = require('../config')

// let redirectUri = config.redirectUri
// let clientId = config.clientId
// let clientSecret = config.clientSecret

// https://developers.google.com/drive/api/v3/about-auth
let scope = 'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file'

// https://stackoverflow.com/a/36903648/1683797
function postFilesToDrive (accessToken, req, callback) {
    var busboy = new Busboy({headers: req.headers});
    let videoWebContentLinks = []
    let audioWebContentLinks = []
    let fileStreamsRecievedCount = 0
    let driveResponseCount = 0
    let reqBody = {}
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      reqBody[fieldname] = val;
    });
    busboy.on('file', function (fieldname, fileStream, filename, encoding, mimetype) {

        fileStreamsRecievedCount++;
        console.log('busboy:file', fileStreamsRecievedCount);

        fileStream.on('data', function (data) {
            console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
        });
        fileStream.on('end', function () {
            console.log('File [' + fieldname + '] Finished');
        });
        uploadFileStreamToDrive(accessToken, fileStream, (err, webContentLink) => {
          if (fieldname === 'audio') {
            audioWebContentLinks.push(webContentLink)
          } else {
            videoWebContentLinks.push(webContentLink) //TODO
          }
          driveResponseCount++;
          console.log('busboy:file counts:', audioWebContentLinks, videoWebContentLinks, fileStreamsRecievedCount, driveResponseCount)
          if (fileStreamsRecievedCount <= driveResponseCount) {
            callback(videoWebContentLinks, audioWebContentLinks, reqBody)
          }
        })
        // var saveTo = path.join(__dirname, 'dir', path.basename(filename));
        // var outStream = fs.createWriteStream(saveTo);
        // fileStream.pipe(outStream);
    });

    busboy.on('finish', function () {
        console.log('busboy:finish')
        if (fileStreamsRecievedCount <= driveResponseCount) {
          callback([], reqBody)
        }
    });
    return req.pipe(busboy);
}

// https://developers.google.com/drive/api/v3/multipart-upload
// https://developers.google.com/drive/api/v3/reference/files/create
// https://stackoverflow.com/a/40488606/1683797
function uploadFileStreamToDrive(accessToken, fileStream, callback) {
  let uri = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart' // &fields=webContentLink
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
          name: `${PREFIX_RESOURCE}${new Date().getTime()}.mp4`,
          description: 'yoga1290.gitlab.io/stroyreport',
          writersCanShare: true,
          viewersCanCopyContent: true, //https://developers.google.com/drive/api/v3/manage-downloads
          copyRequiresWriterPermission: false
        })
      },
      {
        'content-type': 'video/mp4',
        body: fileStream
      }
    ]
  }, (err, resp) => {
    console.log('uploadFileStreamToDrive', err, resp.body)
    if (err) {
      callback(err)
    } else {
      console.log(resp.body);
      // let { webContentLink } = JSON.parse(resp.body) //resp.toJSON()
      let { id } = JSON.parse(resp.body)

      callback(err, id)
    }
  })
}

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

function oauthRefreshTokenExchange(refreshToken, callback) { //exchange auth code w ac token
  //

  var options = {
    "method": "POST",
    "hostname": "www.googleapis.com",
    "port": null,
    "path": "/oauth2/v4/token",
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
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
      let { access_token } = JSON.parse(body.toString())
      callback(access_token)
    });
  });

  _req.write(`client_secret=${clientSecret}&grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${clientId}`);
  _req.end();
}

// https://developers.google.com/drive/api/v3/reference/files/create
function postH5RConfigToDrive(accessToken, h5RConfig, callback) {
  let text = JSON.stringify(h5RConfig)
  var options = {
    "method": "POST",
    "hostname": "www.googleapis.com",
    "port": null,
    "path": "/upload/drive/v3/files?uploadType=multipart&fields=webContentLink",
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
      let { webContentLink } = JSON.parse(body.toString())
      callback(webContentLink)
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

${text}

--foo_bar_baz--`);
  req.end();
}

function downloadDriveFilesFromConfig(h5RConfig, accessToken, callback) {

  let outputs = []
  let outputCount = 0
  let loopAsync = (i, j) => {

    let headers = {
      "authorization": `Bearer ${accessToken}`
    }

    if (i < h5RConfig.length &&
        h5RConfig[i].overlay &&
        j < h5RConfig[i].overlay.length &&
        h5RConfig[i].overlay[j].video) {

          let url = h5RConfig[i].overlay[j].video
          console.log('downloading ', url)
          request({ headers, url })
          .on('response', function(response) {

            h5RConfig[i].overlay[j].video = `drive-${i}-${j}.mp4`;
            outputs[outputCount++] = `drive-${i}-${j}.mp4`
            console.log('video', url, `drive-${i}-${j}.mp4`)

            loopAsync(i, j + 1)
          })
          .pipe(fs.createWriteStream(`drive-${i}-${j}.mp4`))
    } else if (i < h5RConfig.length) {
      loopAsync(i + 1, 0)
    } else {
      callback(h5RConfig, outputs)
    }
  }

  loopAsync(0, 0)
}

// https://developers.google.com/drive/api/v3/multipart-upload
// https://developers.google.com/drive/api/v3/reference/files/create
// https://stackoverflow.com/a/40488606/1683797
function uploadFile(accessToken, path, callback) {
  let uri = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=webViewLink';
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
          name: `${PREFIX_OUTPUT}${new Date().getTime()}.mp4`,
          description: 'yoga1290.gitlab.io/stroyreport',
          writersCanShare: true
        })
      },
      {
        'content-type': 'video/mp4',
        body: fs.createReadStream(path)
      }
    ]
  }, callback)
}

function mapDriveFilesToEntries(entries, files) {
  let i = 0;
  // https://developers.google.com/drive/api/v3/manage-downloads
  files = files.map(f=>`https://www.googleapis.com/drive/v3/files/${f}?alt=media`)
  if (files && files.length > 0) {
    entries = entries.map((entry) => {
      if (entry.overlay && entry.overlay.length > 0) {
        entry.overlay = entry.overlay.map((it) => {
          it.video = (i < files.length && files[i]) ? files[i++]:'';
          return it;
        });
      }
      return entry;
    });
  }
  return entries;
}

function mapDriveFilesToAudioEntries(entries, files) {
  let i = 0;
  // https://developers.google.com/drive/api/v3/manage-downloads
  files = files.map(f=>`https://www.googleapis.com/drive/v3/files/${f}?alt=media`)
  if (files && files.length > 0) {
    entries = entries.map((entry) => {
      if (entry.audio && entry.audio.length > 0) {
        entry.audio = entry.audio.map((it) => {
          it.path = (i < files.length && files[i]) ? files[i++]:'';
          return it;
        });
      }
      return entry;
    });
  }
  return entries;
}

module.exports = {

  // "https://www.googleapis.com/auth/drive.file"
  // drive.appdata

  // https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:8080/&prompt=consent&response_type=code&client_id=97556995695-49mcvffnf234m6rbp27r4kfr0aehn28f.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file&access_type=offline

// youtube
// https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:8080/&prompt=consent&response_type=code&client_id=97556995695-49mcvffnf234m6rbp27r4kfr0aehn28f.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.upload&access_type=offline

  oauthCodeExchange,
  oauthRefreshTokenExchange,
  postFilesToDrive,
  postH5RConfigToDrive,
  downloadDriveFilesFromConfig,
  uploadFile,
  mapDriveFilesToEntries,
  mapDriveFilesToAudioEntries,

  getLoginURL (state) {
    // console.log(JSON.stringify(req.body))
    // //TODO validation
    return `https://accounts.google.com/o/oauth2/v2/auth?state=${state}&redirect_uri=${redirectUri}&prompt=consent&response_type=code&client_id=${clientId}&scope=${scope}&access_type=offline`;
  }

}

const express = require('express');
// const http = require('http'); //TODO
const path = require('path');
const fs = require('fs');
// https://expressjs.com/en/resources/middleware/multer.html
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

const { gSvc, StorageSvc, QueueSvc } = require('./services')
const h5recorder = require('h5recorder')
const { origins, exitTokenPage } = require('./config')

const PROD = (process.env.NODE_ENV === 'production')

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", origins);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

app.set('port', (process.env.PORT || 5000));

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

app.get('/drive/login', (req, res, next) => {
  let url = gSvc.getLoginURL('NIY')
  res.redirect(url)
})

app.post('/drive/upload', (req, res, next) => {
  console.log('/drive/upload')
  let accessToken = req.query.access_token
  let refreshToken = req.query.refresh_token

  gSvc.postFilesToDrive(accessToken, req, (driveFileIds, reqBody) => {
    console.log('END OF REQUEST', reqBody);
    let h5RConfig = JSON.parse(reqBody.data)
    h5RConfig = mapDriveFilesToEntries(h5RConfig, driveFileIds)
    res.send({ done: 'ok'})

    QueueSvc.queue(refreshToken, h5RConfig);
  })
})

app.get('/_oauth', (req, res) => {

    console.log('param:', req.query)
    let code = req.query.code
    let state = req.query.state

    console.log(code, state);
    gSvc.oauthCodeExchange(code, (body) => {
      console.log('body.access_token', body.access_token)
      let accessToken = body.access_token
      let refreshToken = body.refresh_token
      console.log('refreshToken', refreshToken)
      //TODO: store token on the server?
      res.send(`<script>
        window.location.href="${exitTokenPage}/?access_token=${accessToken}&refresh_token=${refreshToken}";
        setTimeout(function(){ window.close(); }, 2000);
      </script>`)

    })
});

function mapFilesPathToEntries(entries, files) {
  let i = 0;
  if (files && files.length > 0) {
    entries = entries.map((entry) => {
      if (entry.overlay && entry.overlay.length > 0) {
        entry.overlay = entry.overlay.map((it) => {
          it.video = (i < files.length && files[i]) ? files[i++].path:'';
          return it;
        });
      }
      return entry;
    });
  }
  return entries;
}
app.post('/submit', (req, res, next) => { //TODO: login
  // res.header("Access-Control-Allow-Origin", origins);
  console.log(req.body)
  //TODO validation
  // let state = StorageSvc.save(req.body)
  // gSvc.login(req, res, state)
  next();
},
  upload.array('file'),
  express.urlencoded(),
  (req, res, next) => {
    console.log(req.files, req.body)

    let data = JSON.parse(req.body.data)
    data = mapFilesPathToEntries(data, req.files);
    console.log('data', JSON.stringify(data, true))
    let state = StorageSvc.save(data);
    let url = gSvc.getLoginURL(state)
    res.send({ url })

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = {
  app
}

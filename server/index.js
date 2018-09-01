const express = require('express');
// const http = require('http'); //TODO
const path = require('path');
const fs = require('fs');
// https://expressjs.com/en/resources/middleware/multer.html
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

const { gSvc, StorageSvc} = require('./services')
const h5recorder = require('h5recorder')
const { origins } = require('./config.json')
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", origins);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('port', (process.env.PORT || 5000));
// app.use(express.static( path.resolve( __dirname, '../', 'frontend', 'dist')) );

// server-side rendering pug views:
// see http://expressjs.com/en/guide/using-template-engines.html
// app.set('views', path.resolve( __dirname, '../', 'frontend', 'views'));
// app.set('view engine', 'pug');

// app.post('/login', gSvc.login);

//
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

// app.use('/submit', express.urlencoded())
app.post('/submit', (req, res, next) => { //TODO: login
  // res.header("Access-Control-Allow-Origin", origins);

  console.log(req.body)
  //TODO validation
  // let state = StorageSvc.save(req.body)
  // gSvc.login(req, res, state)
  console.log('TODO');
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

      let data = StorageSvc.findByState(state)

      h5recorder(data).then((outputVideo) => {
        console.log('TODO', outputVideo)
        gSvc.uploadFile(accessToken, outputVideo, (err, response, body)=> {
          console.log('uploadFile', err, body);
          fs.unlinkSync(outputVideo);
        })
      }, (outputVideo, b) => {
        console.log('TODO2', outputVideo, b)
      })
    })
    res.send('Video(s) uploaded successfully and queued for proccessing & output will send to Drive')


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = {
  app
}

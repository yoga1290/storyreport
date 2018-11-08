const express = require('express');
const h5recorder = require('h5recorder')
// https://expressjs.com/en/resources/middleware/multer.html
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

const { gSvc, QueueSvc } = require('./services')
const {
  getLoginURL,
  postFilesToDrive,
  oauthCodeExchange,
  postFilesToLocalDisk,
  mapDriveFilesToEntries,
  mapDriveFilesToAudioEntries,
  mapLocalFilesToEntries,
  mapLocalFilesToAudioEntries
} = gSvc

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

app.get('/drive/login', (req, res, next) => {
  if (PROD) {
    let url = getLoginURL('NIY')
    res.redirect(url)
  } else {
    res.redirect(`${exitTokenPage}?access_token=a&refresh_token=b`)
  }
})

app.post('/drive/upload', (req, res, next) => {
  console.log('/drive/upload')
  let { accessToken = '', refreshToken = '' } = req.query

  if (PROD) {
    postFilesToDrive(accessToken, req, (driveFileIds, audioDriveFileIds, reqBody) => {
      console.log('END OF REQUEST', driveFileIds, audioDriveFileIds, reqBody);
      let h5RConfig = JSON.parse(reqBody.data)
      h5RConfig = mapDriveFilesToEntries(h5RConfig, driveFileIds)
      h5RConfig = mapDriveFilesToAudioEntries(h5RConfig, audioDriveFileIds)

      res.send({ done: 'ok', h5RConfig })

      QueueSvc.queue(refreshToken, h5RConfig);
    })
  } else {
    postFilesToLocalDisk(req, (localFileIds, audioLocalFileIds, reqBody) => {
      console.log('END OF REQUEST', localFileIds, audioLocalFileIds, reqBody);
      let h5RConfig = JSON.parse(reqBody.data)
      h5RConfig = mapLocalFilesToEntries(h5RConfig, localFileIds)
      h5RConfig = mapLocalFilesToAudioEntries(h5RConfig, audioLocalFileIds)

      h5recorder(h5RConfig).then((output)=>{
          console.log('respo');
          res.end(JSON.stringify({output}));
          //TODO: strem file may be for localhost
      }, (err) =>{
          console.log('error', err);
      })
    })
  }

})

app.get('/_oauth', (req, res) => {

    console.log('param:', req.query)
    let code = req.query.code
    let state = req.query.state

    console.log(code, state);
    oauthCodeExchange(code, (body) => {
      console.log('body.access_token', body.access_token)
      let accessToken = body.access_token
      let refreshToken = body.refresh_token
      console.log('refreshToken', refreshToken)
      //TODO: store token on the server, no?
      console.log('exitTokenPage', exitTokenPage)
      //TODO redirect
      res.send(`<script>
        window.location.href="${exitTokenPage}?access_token=${accessToken}&refresh_token=${refreshToken}";
        setTimeout(function(){ window.close(); }, 2000);
      </script>`)
    })
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = {
  app
}

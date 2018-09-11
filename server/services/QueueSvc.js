const fs = require('fs');
const {
  oauthRefreshTokenExchange, // xchange refresh w access
  downloadDriveFilesFromConfig, // drive to local
  uploadFile // upload final output
} = require('./gSvc.js')

const h5recorder = require('h5recorder')

let queue = []
let alreadyRunning = false;

function execEntry({ refreshToken, h5RConfig }, callback) {
  oauthRefreshTokenExchange(refreshToken, (accessToken) => {

    downloadDriveFilesFromConfig(h5RConfig, accessToken, (newH5RConfig, driveOutputs) => {
        console.log('downloadDriveFilesFromConfig', JSON.stringify(newH5RConfig));

        h5recorder(newH5RConfig).then((outputVideo) => {
          console.log('TODO', outputVideo)

          uploadFile(accessToken, outputVideo, (err, response, body)=> {
            console.log('uploadFile', err, body);
            fs.unlinkSync(outputVideo);
            driveOutputs.forEach(f=>fs.unlinkSync(f)) //clean
          })
          callback()

        }, (outputVideo, b) => {
          console.log('TODO2', outputVideo, b)
          callback()
        })
    })

  })
}

function runAsync() {
  if (queue.length > 0) {

    alreadyRunning = true
    let it = queue.shift() //dequeue
    execEntry(it, runAsync) // recurse on callback

  } else { // empty queue
    alreadyRunning = false
  }
}

module.exports = {

  queue(refreshToken, h5RConfig) {
    queue.push({ refreshToken, h5RConfig })

    if(!alreadyRunning) {
      runAsync()
    }
  }

}

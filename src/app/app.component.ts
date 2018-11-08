import { Component } from '@angular/core';
import { H5RService } from './services/h5r.service'
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public h5RService:H5RService) {
  // constructor() {

  }

  // Keys = Object.keys
  title = 'storyreport';
  selectedPage = 0;

  fileCount = 0;
  progressBuffer = 0
  progressValue = 0


  get closeMePage() {
    return window.location.href.match(/#closeme/) !== null
  }

  Keys:any = Object.keys

    data: any = []
    stepCount: number = 0;

    addStory() {
      this.selectedPage = this.data.length;
      this.data.push({});
    }

    onStoryDelete(index) {
      console.log('onStoryDelete', index, this.data)
      this.data.splice(index, 1);
      console.log('onStoryDelete', this.data)

    }

    test() {
      console.log(this.data)
    }


    loginToDrive() {
      console.log(this.data)
      this.stepCount = 1

      // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
      //TODO
      let win = window.open(`${environment.apiUrl}/drive/login`, "driveRequest")//"_blank");
      win.focus();

      let timer:any = () => {};
      timer = setInterval(()=>{

        if (!win.closed && win.location && win.location.href) {
          console.log(win.location.href)

          let mAccessToken = win.location.href.match(/access_token=([^=, ^&]*)/)
          let mRefreshToken = win.location.href.match(/refresh_token=([^=, ^&]*)/)

          if (mAccessToken && mAccessToken.length > 1 && mRefreshToken && mRefreshToken.length > 1) {
            window.clearInterval(timer);
            this.uploadFilesToDrive(mAccessToken[1], mRefreshToken[1]);
          }
        }

        // cancel timer if child is closed as well:
        if (win.closed) {
          timer();
        }

      }, 500)
    }


    uploadFilesToDrive(accessToken: string, refreshToken: string) {
      console.log('uploadFilesToDrive')
      this.stepCount = 2
      let elm : any = window.document.querySelectorAll('input[type=file]') as NodeListOf<Element>;
      let videos :any[] = [];
      for (let video of elm) {
        let v :any = video as HTMLElement
        if (v.files && v.files.length > 0) {
          videos.push(v.files[0])
        }
      }

      let elmAudio : any = window.document.querySelectorAll('input[type=file][name=audio]') as NodeListOf<Element>;
      let audios :any[] = [];
      for (let audio of elmAudio) {
        let a :any = audio as HTMLElement
        if (a.files && a.files.length > 0) {
          audios.push(a.files[0])
        }
      }

      this.fileCount = audios.length + videos.length
      console.log('this.fileCount', this.fileCount)
      this.h5RService.upload(accessToken, refreshToken, videos, audios, this.data, ({ type, loaded, total })=>{
        if (this.fileCount < 1) return;
        // console.log('this.fileCount', this.fileCount)

        let sec = Math.floor(100 / this.fileCount)
        this.progressBuffer = sec * (type + 1)
        this.progressValue = sec*type + Math.ceil(loaded * 100 / total)

      }).subscribe((resp) => {
        this.stepCount = 3
        console.log('uploadFilesToDrive', resp)
      })
    }

}

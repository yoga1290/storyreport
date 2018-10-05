import { Component } from '@angular/core';
import { H5RService } from './services/h5r.service'
import { HttpEventType, HttpResponse } from '@angular/common/http';

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

  get closeMePage() {
    return window.location.href.match(/#closeme/) !== null
  }

  Keys:any = Object.keys

    data: any = []
    stepCount: number = 0;

    addStory() {
      this.data.push({});
    }
    test() {
      console.log(this.data)
    }


    loginToDrive() {
      this.stepCount = 1

      // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
      //TODO
      // let win = window.open("https://storyreport.herokuapp.com/drive/login", "driveRequest")//"_blank");
      let win = window.open("http://localhost:5000/drive/login", "driveRequest")//"_blank");
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

      this.h5RService.upload(accessToken, refreshToken, videos, audios, this.data).subscribe((resp) => {
        this.stepCount = 3
        console.log('uploadFilesToDrive', resp)
      })
    }
  submit() {
      let elm : any = window.document.querySelectorAll('input[type=file]') as NodeListOf<Element>;
      let videos :any[] = [];
      for (let video of elm) {
        let v :any = video as HTMLElement
        if (v.files && v.files.length > 0) {
          videos.push(v.files[0])
        }
      }

      let elmAudio : any = window.document.querySelectorAll('input[type=file,name=audio]') as NodeListOf<Element>;
      let audios :any[] = [];
      for (let audio of elmAudio) {
        let a :any = audio as HTMLElement
        if (a.files && a.files.length > 0) {
          audios.push(a.files[0])
        }
      }
      console.log("audios", audios, this.data);

      // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose
      // win.onload = (e) => {
      //   console.log('LOCATION: ', win.location, e);
      // }

      // win.document.write("STORYREPORT: DO NOT CLOSE TILL UPLOAD IS DONE");
      this.h5RService.submit(videos, audios, this.data).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(Math.round(100 * event.loaded / event.total))
        }

        if (event.url) {
          window.location.href = event.url;
        }

      })
    }

}

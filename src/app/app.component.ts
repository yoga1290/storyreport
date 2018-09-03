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

  Keys:any = Object.keys

    data: any = []
    uploading: boolean = false;

    addStory() {
      this.data.push({});
    }
    test() {
      console.log(this.data)
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
      console.log("videos", videos, this.data);
      this.uploading = true;
      this.h5RService.submit(videos, this.data).subscribe((event) => {
      // if (event.type === HttpEventType.UploadProgress) {
      //   // This is an upload progress event. Compute and show the % done:
      //   const percentDone = Math.round(100 * event.loaded / event.total);
      //   console.log(`File is ${percentDone}% uploaded.`);
      // } else if (event instanceof HttpResponse) {
      //   win.location.href = event.url;
      //   console.log('resp2', event)
      //
      // }
        if (event.url) {
          window.location.href = event.url;
        }

      })
    }

}

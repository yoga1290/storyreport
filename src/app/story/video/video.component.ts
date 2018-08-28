import { Component, OnInit, AfterViewInit, OnDestroy, Output, Input,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements AfterViewInit, OnDestroy {

  @Output("update") _update: EventEmitter<any> = new EventEmitter<any>()
  @Output("delete") delete: EventEmitter<any> = new EventEmitter<any>()

  @Input("index") _index : string;
  get index_infile() {
    return `infile-${this._index}`;
  }
  get index_video() {
    return `v-${this._index}`;
  }

  showVideo = false

  videoSrc: any;

  videoItr: any;

  constructor() { }

  data: any = {
    "video": "", //OK
    "colorKey": 'green', //OK
    "similarity": 0.2, //fixed for now
    "time": {
        "start": 0,
        "end": 1<<30
    },
    "crop": {
        "aspectRatio": 0.5625, // in panel
        "offset": {
            "x": 0,
            "y": 0 //fixed for now
        }
    }
  }

  get videoBorderWidth () {
    return `${this.data.crop.offset.x * 100}%`;
  }

  colorKeys: string[] = ['red', 'green', 'blue', 'yellow', 'orange', 'black']


  ngAfterViewInit() {
    let infile : any = window.document.getElementById(this.index_infile) as HTMLElement;
    let video : any = window.document.getElementById(this.index_video) as HTMLElement;

    console.log(infile, window.document.getElementById(this.index_infile))

    document.getElementById(this.index_infile).addEventListener('change', (e) => {
      console.log(infile, infile.files[0])
      this.showVideo = infile && infile.files && infile.files[0]
      if (this.showVideo) {
        video.src = URL.createObjectURL(infile.files[0]) //TODO
        video.load();
      }
    })

    this.videoItr = window.setInterval(() => {
      if (video.paused) {
        return;
      }
      let t = video.currentTime
      if ( (this.data.time.start - t) > 1 || (t - this.data.time.end) > 1) {
        video.currentTime = this.data.start
        video.play()
      }
    }, 1000);

    window.document.getElementById(this.index_infile).click();
  }

  ngOnDestroy() {
    window.clearInterval(this.videoItr)
  }

  onSlideChange(x:any) {
    console.log(x)
  }

  update() {
    let video : any = window.document.getElementById(this.index_video) as HTMLElement;
    console.log(this.data)
    if (this.data && this.data.time && this.data.time.start) {
      video.currentTime = this.data.time.start;
      video.play();
    }
    this._update.emit(this.data)
  }

  infileClick() {
    console.log('index_infile', this.index_infile)
    window.document.getElementById(this.index_infile).click();
  }

}

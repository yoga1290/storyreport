import { Component, OnInit, Input, Output, AfterViewInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  @Input("index") _index : string;
  @Input("storyIndex") storyIndex : string;
  @Output("delete") delete: EventEmitter<any> = new EventEmitter<any>()
  @Output("update") _update: EventEmitter<any> = new EventEmitter<any>() //TODO WIP


  showAudio: boolean = false

  get index_infile() {
    return `infile-a-${this.storyIndex}-${this._index}`;
  }
  get index_audio() {
    return `a-${this.storyIndex}-${this._index}`;
  }

  ngAfterViewInit() {
    let infile : any = window.document.getElementById(this.index_infile) as HTMLElement;

    console.log(infile, window.document.getElementById(this.index_infile))

    document.getElementById(this.index_infile).addEventListener('change', (e) => {
      this.showAudio = infile && infile.files && infile.files[0]


      if (this.showAudio) {
        let audio : any = window.document.getElementById(this.index_audio) as HTMLElement;
        console.log('audio', audio)

        audio.src = URL.createObjectURL(infile.files[0]) //TODO
        this.update();
        audio.load();
      }
    })

    window.document.getElementById(this.index_infile).click();

  }

  time : {start: number, end: number} = undefined
  constructor() {

  }

  changeFile() {
    window.document.getElementById(this.index_infile).click();
  }
  ngOnInit() {
  }

  update () {
    console.log('time', this.time)
    let { start, end } = this.time
    let volume = 1
    let path = ''
    this._update.emit({ start, end, volume, path})
  }

}

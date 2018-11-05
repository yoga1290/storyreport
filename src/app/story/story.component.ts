import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { environment } from '../../environments/environment';
// import * as PageConfig from './pages.json'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Output("update") _update: EventEmitter<any> = new EventEmitter<any>()
  @Output("remove") remove: EventEmitter<any> = new EventEmitter<any>()
  @Input("showDetails") showDetails: boolean = true

  endpoint: string = environment.apiUrl
  data: any = []
  audio: any = []
  Keys: any = {}

  queryString: {} = {}

  Pages : {title:string, page:string, description:string, hash: string[], params:string[]}[] = [{ //TODO: config
    "title": "Blank",
    "page": "http://yoga1290.gitlab.io/h5r-pages/blank/",
    "hash": ["start", "end"],
    "params": [],
    "description": `Green screen, [#start - #end]`
  },

  {
    "title": "2 Card Transition",
    "page": "http://yoga1290.gitlab.io/h5r-pages/2cards/",
    "hash": ["start", "end"],
    "params": ["duration"],
    "description": `Green card followed by Red card, hash changes: [#start, #end]`
    // http://yoga1290.gitlab.io/h5r-pages/2cards/
  }, {
    "title": "Left Title",
    "page": "http://yoga1290.gitlab.io/h5r-pages/left-center-text/",
    "hash": ["start", "end"],
    "params": ["title", "body"],
    "description": `Green screen with 2 optional text; "title" & "body" are optional query string parameters`
    // http://yoga1290.gitlab.io/h5r-pages/left-center-text/?title=title&body=body
  }, {
    "title": "Subtitle",
    "page": "http://yoga1290.gitlab.io/h5r-pages/subtitle/",
    "hash": ["start", "end"],
    "params": ["text"],
    "description": `Green screen with an optional subtitle; "text" is an optional query string parameter`
    // http://yoga1290.gitlab.io/h5r-pages/subtitle/?text=subtitle
  }]

  startHash: string = 'start'
  endHash: string = 'end'
  size : {w:number, h:number} = {
      "w": 400,
      "h": 710
  }

  selectedPage : any = {}

  constructor() { }
  @Input("index") _index : string;

  get id_submit() {
    return `submit-${this._index}`;
  }
  get id_form() {
    return `form-${this._index}`;
  }


  getFormatedData() {
    let overlay = this.data
    let startHash = this.startHash
    let endHash = this.endHash
    let size = this.size
    let page = this.selectedPage.page + "?"
          + Object.keys(this.queryString).map(key=>(key + '=' +this.queryString[key])).join('&');
    let audio = this.audio
    return { page, overlay, startHash, endHash, size, audio };
  }

  get pageUrl() {
    return this.selectedPage.page + "?"
          + Object.keys(this.queryString).map(key=>(key + '=' +this.queryString[key])).join('&')
  }

  get jsonData() {
    return JSON.stringify(this.getFormatedData());
  }

  ngOnInit() {
    this.Keys = Object.keys
  }

  onVideoDelete(index) {
    this.data.splice(index, 1);
    this.update();
  }

  onAudioDelete(index) {
    this.audio.splice(index, 1);
    // this.update();
  }

  submit() {
    window.document.forms[this.id_form].submit()
  }

  addVideo() {
    this.data.push({})
  }

  addAudio() {
    this.audio.push({})
  }

  pagePreview() {
    let url = this.selectedPage.page + "?"
          + Object.keys(this.queryString).map(key=>(key + '=' +this.queryString[key])).join('&');
    window.open(url, '_blank')
  }

  update() {
    this._update.emit(this.getFormatedData());
    console.log('story.update', this.getFormatedData());
  }
}

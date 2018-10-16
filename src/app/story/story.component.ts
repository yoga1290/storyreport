import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Output("update") _update: EventEmitter<any> = new EventEmitter<any>()
  @Input("showDetails") showDetails: boolean = true

  endpoint: string = 'https://storyreport.herokuapp.com/submit'
  // endpoint: string = 'http://localhost:5000/submit' //TODO: config
  data: any = []
  audio: any = []
  Keys: any = {}

  queryString: {key:string, value:string}[] = []

  Pages : {title, page, description}[] = [{ //TODO: config
    "title": "Blank",
    "page": "http://yoga1290.gitlab.io/h5r-pages/blank/",
    "description": `Blank screen with green background, [#start - #end]`
  }, {
    "title": "Cards",
    "page": "http://yoga1290.gitlab.io/h5r-pages/cards/",
    "description": `Requires query strings of title[] and body[],
                    [#start, #0, #1, #n, #end]
                    e.g: ?title=T1&body=B1&body=B2`
    // http://yoga1290.gitlab.io/h5r-pages/cards/?title=title1&body=body1&title=title2&body=body2
  }, {
    "title": "Story",
    "page": "http://yoga1290.gitlab.io/h5r-pages/story/",
    "description": `Query string must include: time, index & count`
    // http://yoga1290.gitlab.io/h5r-pages/story/?time=2&count=3&index=1
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
          + this.queryString.map(it=>(it.key + '=' +it.value)).join('&');
    let audio = this.audio

    return { page, overlay, startHash, endHash, size, audio };
  }

  get pageUrl() {
    return this.selectedPage.page + "?"
          + this.queryString.map(it=>(it.key + '=' +it.value)).join('&')
  }

  get jsonData() {
    return JSON.stringify(this.getFormatedData());
  }

  ngOnInit() {
    this.Keys = Object.keys
  }

  onDelete(index) {
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
          + this.queryString.map(it=>(it.key + '=' +it.value)).join('&');
    console.log(this.queryString, this.queryString.map(it=>(it.key + '=' +it.value)),  url )
    window.open(url, '_blank')
  }

  update() {
    this._update.emit(this.getFormatedData());
    console.log('story.update', this.getFormatedData());
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  endpoint: string = 'https://storyreport.herokuapp.com/submit'
  // endpoint: string = 'http://localhost:5000/submit' //TODO: config
  data: any = []
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

  get jsonData() {
    let overlay = this.data
    let startHash = this.startHash
    let endHash = this.endHash
    let size = this.size
    let page = this.selectedPage.page + "?"
          + this.queryString.map(it=>(it.key + '=' +it.value)).join('&');

    let data = { page, overlay, startHash, endHash, size };
    return JSON.stringify(data);
  }

  ngOnInit() {
    this.Keys = Object.keys
  }


  test(data: any) {
    console.log(data)
  }

  onDelete(index) {
    this.data.splice(index, 1);
  }

  submit() {
    window.document.forms[this.id_form].submit()
  }

  addVideo() {
    this.data.push({})
  }

  pagePreview() {
    let url = this.selectedPage.page + "?"
          + this.queryString.map(it=>(it.key + '=' +it.value)).join('&');
    console.log(this.queryString, this.queryString.map(it=>(it.key + '=' +it.value)),  url )
    window.open(url, '_blank')
  }
}

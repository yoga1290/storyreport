import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  @Input("storyIndex") storyIndex : string;

  time : {start: number, end: number} = undefined
  constructor() { }

  ngOnInit() {
  }

  update () {
    console.log('time', this.time)
  }

}

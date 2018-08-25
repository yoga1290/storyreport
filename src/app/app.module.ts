import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material.module';
import { PanelComponent } from './panel/panel.component';
import { TimerComponent } from './story/video/timer/timer.component';
import { VideoComponent } from './story/video/video.component';
import { StoryComponent } from './story/story.component'

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    TimerComponent,
    VideoComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

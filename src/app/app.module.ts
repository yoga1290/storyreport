import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material.module';
import { TimerComponent } from './story/video/timer/timer.component';
import { VideoComponent } from './story/video/video.component';
import { StoryComponent } from './story/story.component';
import { H5RService } from './services/h5r.service';
import { HttpClientModule } from '@angular/common/http';
import { AudioComponent } from './story/audio/audio.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    VideoComponent,
    StoryComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    HttpClientModule
  ],
  providers: [H5RService],
  bootstrap: [AppComponent]
})
export class AppModule { }

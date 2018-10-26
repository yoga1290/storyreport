import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class H5RService {

  constructor(private http: HttpClient) { }


  submit (files: any, audio:any, data : any) : any { //Observable<any> {
    let httpOptions = {
      // headers: new HttpHeaders({
      //   // 'Content-Type':  'multipart/form-data'
      //   // 'Content-Type':  'application/json'
      // }),
      reportProgress: true
    };

    let formData = new FormData();

    formData.append('data', JSON.stringify(data));

    files.forEach((file) => {
      console.log('file', file)
      formData.append('file', file);
    });

    audio.forEach((file) => {
      console.log('audio', file)
      formData.append('audio', file);
    });

    console.log('formData', formData);
    return this.http.post<any>(`${environment.apiUrl}/submit`, formData, httpOptions);
  }

  upload (accessToken: string, refreshToken: string, files: any, audio:any, data : any) : any { //Observable<any> {
    let httpOptions = {
      // headers: new HttpHeaders({
      //   // 'Content-Type':  'multipart/form-data'
      //   // 'Content-Type':  'application/json'
      // }),
      reportProgress: true
    };

    let formData = new FormData();
    formData.append('data', JSON.stringify(data));
    files.forEach((file) => {
      console.log('file', file)
      formData.append('file', file);
    });

    audio.forEach((file) => {
      console.log('audio', file)
      formData.append('audio', file);
    });

    console.log('formData', formData);
    // return this.http.post<any>("https://storyreport.herokuapp.com/submit", formData, httpOptions);//.pipe( //login
    return this.http.post<any>(`${environment.apiUrl}/drive/upload?access_token=${accessToken}&refresh_token=${refreshToken}`, formData, httpOptions);
  }
}

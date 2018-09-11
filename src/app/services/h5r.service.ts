import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class H5RService {

  constructor(private http: HttpClient) { }


  submit (files: any, data : any) : any { //Observable<any> {
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
    console.log('formData', formData);
    // return this.http.post<any>("https://storyreport.herokuapp.com/submit", formData, httpOptions);//.pipe( //login
    return this.http.post<any>("http://localhost:5000/submit", formData, httpOptions);//.pipe( //login
      // tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      // catchError(this.handleError<Hero>('addHero'))
    //);
  }

  upload (accessToken: string, refreshToken: string, files: any, data : any) : any { //Observable<any> {
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
    console.log('formData', formData);
    // return this.http.post<any>("https://storyreport.herokuapp.com/submit", formData, httpOptions);//.pipe( //login
    return this.http.post<any>(`http://localhost:5000/drive/upload?access_token=${accessToken}&refresh_token=${refreshToken}`, formData, httpOptions);//.pipe( //login
      // tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      // catchError(this.handleError<Hero>('addHero'))
    //);
  }
}

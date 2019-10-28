import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvtypeService {

  private _evTypeUrl = "http://139.59.35.15:3000/api/eventtype";

  constructor(private http: HttpClient) { }

  getEventType() {
  	return this.http.get<any>(this._evTypeUrl)
  }

}

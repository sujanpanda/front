import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvlistService {

  private _geteventUrl = "http://139.59.35.15:3000/api/getevtypes";
  private _addevtypeUrl = "http://139.59.35.15:3000/api/addeventtype";
  constructor(private http: HttpClient) { }

  getEventsList() {
    return this.http.get<any>(this._geteventUrl)
  }

  addEventsList(evlistdata) {
    return this.http.post<any>(this._addevtypeUrl, evlistdata).pipe(
      catchError(err => err.code === 401 
        ? observableThrowError(err)
        : observableThrowError(err)
      )  
    );
  }
}

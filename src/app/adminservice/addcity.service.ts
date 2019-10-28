import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddcityService {

  private _addcityUrl = "http://139.59.35.15:3000/api/addcity";
  private _getcityUrl = "http://139.59.35.15:3000/api/admincity";
  constructor(private http: HttpClient) { }

  addCity(citydata) {
    return this.http.post<any>(this._addcityUrl, citydata).pipe(
      catchError(err => err.code === 401 
        ? observableThrowError(err)
        : observableThrowError(err)
      )  
    );
  }

  getAllCities() {
    return this.http.get<any>(this._getcityUrl)
  }
}

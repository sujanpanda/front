import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {

  private _venueList = "http://139.59.35.15:3000/api/venues";
  private _searchVenu = "http://139.59.35.15:3000/api/venuefilter";

  constructor(private http: HttpClient) { }

  getCityList() {
  	return this.http.get<any>(this._venueList)
  }

  searchVenu(searchData) {
    return this.http.post<any>(this._searchVenu, searchData).pipe(
      catchError(err => err.code === 401 
        ? observableThrowError(err)
        : observableThrowError(err)
      )  
    );
  }

}

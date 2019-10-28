import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VenuedetailService {

  private _venueDetail = "http://139.59.35.15:3000/api/venuedetail/";
  private _venueStrict = "http://139.59.35.15:3000/api/venuestrict/";

  constructor(private http: HttpClient) { }

  getCityDetail(id) {
  	return this.http.get<any>(this._venueDetail+id)
  }

  getStrictDetail(id) {
  	return this.http.get<any>(this._venueStrict+id).pipe(
      catchError(err => err.code === 401 
        ? observableThrowError(err)
        : observableThrowError(err)
      )  
    );
  }
}

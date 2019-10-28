import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddvenueService {

  private _geteventUrl = "http://139.59.35.15:3000/api/eventtype";
  private _addvenueUrl = "http://139.59.35.15:3000/api/addvenues";
  private _chkvenueUrl = "http://139.59.35.15:3000/api/checkvenue/";
  private _addvenueIMG = "http://139.59.35.15:3000/api/addvenueimg";
  private _addownerIMG = "http://139.59.35.15:3000/api/addownerimg";
  constructor(private http: HttpClient) { }

  getEventsList() {
    return this.http.get<any>(this._geteventUrl)
  }

  checkVenue(venueid) {
    return this.http.get<any>(this._chkvenueUrl+venueid)
  }

  addNewVenue(venuedata) {
    return this.http.post<any>(this._addvenueUrl, venuedata).pipe(
      catchError(err => err.code === 401 
        ? observableThrowError(err)
        : observableThrowError(err)
      )  
    );
  }

  addVenueImg(venueimg) {
    return this.http.post<any>(this._addvenueIMG, venueimg).pipe(
      catchError(err => err.code === 401 
        ? observableThrowError(err)
        : observableThrowError(err)
      )  
    );
  }

  addOwnerImg(ownerimg) {
    return this.http.post<any>(this._addownerIMG, ownerimg).pipe(
      catchError(err => err.code === 401 
        ? observableThrowError(err)
        : observableThrowError(err)
      )  
    );
  }

}

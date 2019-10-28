import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditvenueService {

  private _getvenueList = "http://139.59.35.15:3000/api/allvenuelist";
  private _getvenueDetail = "http://139.59.35.15:3000/api/getvenuedetail/";
  private _geteventUrl = "http://139.59.35.15:3000/api/eventtype";
  private _editVenueUrl = "http://139.59.35.15:3000/api/editvenues";
  constructor(private http: HttpClient) { }

  getEventsList() {
    return this.http.get<any>(this._getvenueList)
  }

  getVenueDetail(getVenue) {
    return this.http.get<any>(this._getvenueDetail+getVenue)
  }

  getEventType() {
    return this.http.get<any>(this._geteventUrl)
  }

  editVenue(venuedata) {
    return this.http.post<any>(this._editVenueUrl, venuedata).pipe(
      catchError(err => err.code === 401 
        ? observableThrowError(err)
        : observableThrowError(err)
      )  
    );
  }

}

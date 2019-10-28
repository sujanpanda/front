import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetformdetailsService {

  private _getformsUrl = "http://139.59.35.15:3000/api/getcontactform";
  private _getfeedUrl = "http://139.59.35.15:3000/api/getuserfeed";
  private _getmissingUrl = "http://139.59.35.15:3000/api/getmisscollect";
  private _geteventBookUrl = "http://139.59.35.15:3000/api/geteventbooking";
  private _postBookCnf = "http://139.59.35.15:3000/api/approvebooking";
  constructor(private http: HttpClient) { }

  getFormDetails() {
    return this.http.get<any>(this._getformsUrl)
  }

  getFeedbacksDetails() {
    return this.http.get<any>(this._getfeedUrl)
  }

  getmissingDetails() {
    return this.http.get<any>(this._getmissingUrl)
  }

  geteventDetails() {
    return this.http.get<any>(this._geteventBookUrl)
  }

  posteventApprove(evBookdata) {
    return this.http.post<any>(this._postBookCnf, evBookdata).pipe(
      catchError(err => err.code === 401 
        ? observableThrowError(err)
        : observableThrowError(err)
      )  
    );
  }
}

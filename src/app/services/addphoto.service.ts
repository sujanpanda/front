import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddphotoService {

  private _addPhotoUrl = "http://139.59.35.15:3000/api/photoupload";

  constructor(private http: HttpClient) { }

  addPhotoFunc(photoData) {
    return this.http.post<any>(this._addPhotoUrl, photoData, {
        reportProgress: true,
        observe: 'events'
    }).pipe(
      catchError(err => err.code === 401 
        ? observableThrowError(err)
        : observableThrowError(err)
      )  
    );
  }
}

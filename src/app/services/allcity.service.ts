import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllcityService {

  private _getAllCity = "http://139.59.35.15:3000/api/getallvenues/";
  private _venuCount = "http://139.59.35.15:3000/api/venuelist";

  constructor(private http: HttpClient) { }

  getAllCity(id) {
  	return this.http.get<any>(this._getAllCity+id)
  }

  getCityCount() {
  	return this.http.get<any>(this._venuCount)
  }
}

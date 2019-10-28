import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _venueDetail = "http://139.59.35.15:3000/api/bookingcalc/";

  constructor(private http: HttpClient) { }
  getBookingCalc(id) {
  	return this.http.get<any>(this._venueDetail+id)
  }
}

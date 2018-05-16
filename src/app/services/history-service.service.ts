import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
// import { catchError, map} from 'rxjs/operators';

import { Payment } from '../utilities';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {
  private paymentUrl = 'api/payment';

  constructor(private http: HttpClient) { }

  // getPayment(): Observable<Payment[]> {
  //   // const url = `${this.paymentUrl}/${year}`;
  //   return this.http.get<Payment[]>(this.paymentUrl);
  // }
  getPayment(year: number): Observable<Payment[]> {
    const url = `${this.paymentUrl}/?year=${year}`;
    return this.http.get<Payment[]>(url);
  }

}

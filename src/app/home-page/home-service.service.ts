import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Payment } from '../utilities';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private paymentUrl = 'api/payment';

  constructor(private http: HttpClient) { }

  getPayment(id?: number): Observable<Payment[]> {
    const url = id ? `${this.paymentUrl}/?id=${id}` : `${this.paymentUrl}`;
    return this.http.get<Payment[]>(url);
  }

  // ......update payment.......

  updatePayment(payment: Payment): Observable<any> {
    return this.http.put<Payment[]>(this.paymentUrl, payment, httpOptions);
  }

  // .....add new payment to db.......

  addPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.paymentUrl, payment, httpOptions);
  }
}

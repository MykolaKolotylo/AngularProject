import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Payment } from '../utilities';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'api/payment' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private paymentUrl = 'api/payment';
  payments: Payment[];


  constructor(private http: HttpClient) { }

  getPayment(id?: number): Observable<Payment[]> {
    const url = id ? `${this.paymentUrl}/?id=${id}` : `${this.paymentUrl}`;
    return this.http.get<Payment[]>(url);
  }

  getPayments(year: number, month: number): Observable<Payment[]> {
    const url = `${this.paymentUrl}/?year=${year}\&month=${month}`;
    console.log(url);
    return this.http.get<Payment[]>(url);
  }


  // ......update payment.......

  updatePayment(payment: Payment): Observable<any> {
    console.log(payment);
    return this.http.put<Payment[]>(this.paymentUrl, payment, httpOptions);
  }

  // .....add new payment to db.......

  addPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.paymentUrl, payment, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Payment } from '../utilities';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'api/payment' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private paymentUrl = 'api/payment';
  private newPaymentUrl = 'api/newPayment';
  payments: Payment[];
  // paymen: Payment;
  // newPayment: Payment[];


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

  updatePayment(payment: Payment): Observable<any> {
    console.log(payment);
    return this.http.put<Payment[]>(this.paymentUrl, payment, httpOptions);
  }

  // ........getNewPayment.......

  getNewTemplatePayment () {
    return this.http.get<Payment[]>(this.newPaymentUrl);
  }


  addPayment(payment: Payment): Observable<Payment> {
    // this.payments.push(payment);
    // console.log('httpClient', payment);
    return this.http.post<Payment>(this.paymentUrl, payment, httpOptions);
  }
}

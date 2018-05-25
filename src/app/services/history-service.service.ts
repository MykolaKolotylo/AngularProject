import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Payment } from '../utilities';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private paymentUrl = 'api/payment';
  payment: Payment;

  constructor(private http: HttpClient) { }

  getPayment(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentUrl);
  }

  getPaymentHistory(year: number): Observable<Payment[]> {
    const url = `${this.paymentUrl}/?year=${year}`;
    return this.http.get<Payment[]>(url);
  }
}

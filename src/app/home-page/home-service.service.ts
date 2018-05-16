import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Payment } from '../utilities';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private paymentUrl = 'api/payment';

  constructor(private http: HttpClient) { }

  getPayment(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentUrl);
  }
}

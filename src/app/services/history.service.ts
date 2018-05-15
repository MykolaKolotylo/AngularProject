import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';

import { payment, varUtilities, fixedUtilities } from '../mock-utilities';
import { Payment, VarUtilities, FixedUtilities } from '../utilities';


@Injectable()
export class HistoryService {

  varBlk: VarUtilities[] = varUtilities;
  fixBlk: FixedUtilities[] = fixedUtilities;
  payment: Payment[] = payment;
  private paymentUrl = '../mock-db';

  getVarPrice() {
    return this.varBlk;
  }

  getFixPrice() {
    return this.fixBlk;
  }


  // constructor(
  //   private http: HttpClient) { }

  //   getPayment(): Observable<Payment[]> {
  //     return this.http.get<Payment[]>(this.paymentUrl);
  //   }

  //   getTemplatePayments () {
  //     return payment;
  //   }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Payment, VarUtilities, FixUtilities } from '../utilities';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'api/fixUtilities' })
};
const httpOptionsVar = {
  headers: new HttpHeaders({ 'Content-Type': 'api/varUtilities' }),
};

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  private fixedUrl = 'api/fixUtilities';
  private varUrl = 'api/varUtilities';

  constructor(private http: HttpClient) { }

  getFixUt(id?: number): Observable<FixUtilities[]> {
    const url = id ? `${this.fixedUrl}/?id=${id}` : `${this.fixedUrl}`;
    return this.http.get<FixUtilities[]>(url);
  }

  getVarUt(id?: number): Observable<VarUtilities[]> {
    const url = id ? `${this.varUrl}/?id=${id}` : `${this.varUrl}`;
    return this.http.get<VarUtilities[]>(url);
  }

  newFixUtility(newUtility: FixUtilities): Observable<FixUtilities> {
    return this.http.post<FixUtilities>(this.fixedUrl, newUtility, httpOptions);
  }

  newVarUtility(varUtility: VarUtilities): Observable<VarUtilities> {
    return this.http.post<VarUtilities>(this.varUrl, varUtility, httpOptionsVar);
  }

  // ......update payment.......

  updateFixPayment(tariff: FixUtilities): Observable<any> {
  // console.log(tariff);
  return this.http.put<FixUtilities[]>(this.fixedUrl, tariff, httpOptions);
  }

  updateVarPayment(tariff: VarUtilities): Observable<any> {
    // console.log(tariff);
    return this.http.put<VarUtilities[]>(this.fixedUrl, tariff, httpOptions);
    }
}

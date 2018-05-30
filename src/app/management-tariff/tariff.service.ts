import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Payment, VarUtility, FixUtility } from '../utilities';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  private fixedUrl = 'api/fixUtilities';
  private varUrl = 'api/varUtilities';

  constructor(private http: HttpClient) { }

  getFixUt(): Observable<FixUtility[]> {
    return this.http.get<FixUtility[]>(this.fixedUrl);
  }

  getVarUt(): Observable<VarUtility[]> {
    return this.http.get<VarUtility[]>(this.varUrl);
  }

  // .........add new utility........

  newFixUtility(newUtility: FixUtility): Observable<FixUtility> {
    return this.http.post<FixUtility>(this.fixedUrl, newUtility, httpOptions);
  }

  newVarUtility(varUtility: VarUtility): Observable<VarUtility> {
    return this.http.post<VarUtility>(this.varUrl, varUtility, httpOptions);
  }

  // ......update price.......

  updateFixTariff(tariff: FixUtility): Observable<any> {
    console.log(tariff);
    return this.http.put<FixUtility>(this.fixedUrl, tariff, httpOptions);
  }

  updateVarTariff(tariff: VarUtility): Observable<any> {
    console.log(tariff);
    return this.http.put<VarUtility>(this.varUrl, tariff, httpOptions);
  }
}

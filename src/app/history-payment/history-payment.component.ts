import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable, of } from 'rxjs';

import { Payment } from '../utilities';
import { HistoryService } from '../services/history-service.service';




@Component({
  selector: 'app-history-payment',
  templateUrl: './history-payment.component.html',
  styleUrls: ['./history-payment.component.css']
  // providers: [HistoryServiceService]
})
export class HistoryPaymentComponent implements OnInit {

  payment: Payment[];
  paymentByHistory: Payment[];
  selectedYear = 2018;
  years = [];


  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.getTemplatePayment();
    this.getTemplatePaymentHistory();
  }

  getTemplatePayment(): void {
    this.historyService.getPayment().subscribe(data => {
      this.payment = data;
      this.paymentMethod();
    });
  }

  paymentMethod() {
    this.payment.forEach(el => {
      if (!this.years.length) {
        this.years.push(el.year);
      } else if (this.years.indexOf(el.year) === -1) {
        this.years.push(el.year);
      }
    });
    this.years.sort(this.sortYears);
  }

  sortYears(a: number, b: number) {
    return a < b ? 1 : -1;
  }

  // ........get history......

  getTemplatePaymentHistory(): void {
    this.historyService.getPaymentHistory(this.selectedYear).subscribe(data => {
      this.paymentByHistory = data;
    });
  }


}

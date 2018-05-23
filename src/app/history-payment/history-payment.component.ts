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
  selectedYear: number;
  selectedMonth: string;
  // months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years = [];
  months = [];
  dataTest = [];


  constructor(private historyService: HistoryService) {
    // private route: ActivatedRoute,
    // private location: Location) {
    // route.params.subscribe((params) => {
    //   this.dataRouting(params);
    // });
  }

  // dataRouting (params) {
  //   console.log(params);
  // }

  ngOnInit() {
    this.getTemplatePayment();
    this.getTemplatePaymentHistory();
  }

  sortYears(a: number, b: number) {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
  }



  getTemplatePayment(): void {
    this.historyService.getPayment().subscribe(data => {
      this.payment = data;
      this.paymentMethod();
    });
  }
  getTemplatePaymentHistory(): void {
    this.historyService.getPaymentHistory(this.selectedYear, this.selectedMonth).subscribe(data => {
      this.paymentByHistory = data;
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


  // getTemplatePayment(): void {
  //   this.historyService.getPayment()
  //     .subscribe(data => this.payment = data);
  // }



}

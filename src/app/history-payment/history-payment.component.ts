import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

// import { payment } from '../mock-utilities';
import { Payment } from '../utilities';
import { HistoryServiceService } from '../services/history-service.service';
// import { url } from 'inspector';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-history-payment',
  templateUrl: './history-payment.component.html',
  styleUrls: ['./history-payment.component.css']
  // providers: [HistoryServiceService]
})
export class HistoryPaymentComponent implements OnInit {

  payment: Payment[];
  currentPayment: Payment;
  selectedYear: number;
  selectedMonth: string;

  constructor(private historyServiceService: HistoryServiceService) {
    // private route: ActivatedRoute) {
    // route.params.subscribe((params) => {
    //   this.getTemplatePayment(params);
    // });
  }

  ngOnInit() {
    this.getTemplatePayment();
  }

  getTemplatePayment(): void {
    this.historyServiceService.getPayment(this.selectedYear).subscribe(data => {
      this.payment = data;
    });
  }


}

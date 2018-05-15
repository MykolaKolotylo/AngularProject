import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { Payment, VarUtilities, FixedUtilities } from '../utilities';
import { varUtilities } from '../mock-utilities';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})


export class HistoryComponent implements OnInit {

  getValueYear = '';
  getValueMonth = '';
  payment;

  constructor(private historyService: HistoryService) { }


  getMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];


  ngOnInit() {
    // this.payment = this.historyService.getTemplatePayments();
  }

  // getYear() {
  //   console.log(this.getValueMonth);
  //   for (let i = 0; i < this.payment.length; i++) {
  //     return this.payment;
  //     console.log(this.valueOpYear);
  //   }
  // }





}

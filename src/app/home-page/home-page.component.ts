import { Component, OnInit, TemplateRef } from '@angular/core';
import { of } from 'rxjs';

import { Payment, FixedUtilities, VarUtilities } from '../utilities';
import { HomeService } from './home-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService: HomeService,
    private modalService: BsModalService) { }

  payments: Payment[];
  year: number;
  month: number;
  fixedUt: FixedUtilities[];
  varUt: VarUtilities[];
  paymentList = [];
  element: Payment;
  lastPayment: Payment;
  newPayment = [];

  modalRef: BsModalRef;

  public addPayment = true;

  objDate = Date.now();

  ngOnInit() {
    this.getPayments();
    this.getTemlatePayments();
  }

  getPayments(): void {
    this.homeService.getPayment().subscribe(payments => {
      this.paymentList = payments;
      this.lastPayment = this.paymentList[this.paymentList.length - 1];
      // console.log(this.lastPayment);
    });
  }

  getTemlatePayments() {
    this.homeService.getNewTemplatePayment().subscribe(data => {
      this.newPayment = data;
      // console.log(data);
    });
  }

  addNewPayment() {
    let getTemlatenPayment: any = this.newPayment;
    this.newPayment.forEach(element => {
      getTemlatenPayment = element;
      // console.log(test1);
    });

    if (getTemlatenPayment.month === this.lastPayment.month) {
      getTemlatenPayment.month = this.lastPayment.month + 1;
    }

    if (getTemlatenPayment.month === 13) {
      getTemlatenPayment.year = this.lastPayment.year + 1;
      getTemlatenPayment.month = 1;
    } else {
      getTemlatenPayment.month = this.lastPayment.month + 1;
    }

    this.homeService.addPayment(getTemlatenPayment)
      .subscribe(payment => {
        getTemlatenPayment = payment;
        this.paymentList.push(getTemlatenPayment);
        this.lastPayment = getTemlatenPayment;
      });

    console.log(this.paymentList);

  }

  save(payment: Payment): void {
    this.homeService.updatePayment(payment)
      .subscribe();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

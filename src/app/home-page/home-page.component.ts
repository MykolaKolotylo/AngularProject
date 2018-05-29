import { Component, OnInit, TemplateRef } from '@angular/core';
import { of } from 'rxjs';

import { Payment, FixUtilities, VarUtilities } from '../utilities';
import { HomeService } from './home-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TariffService } from '../management-tariff/tariff.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService: HomeService,
    private modalService: BsModalService,
    private tariffService: TariffService) { }

  payments: Payment[];
  lastPayment: Payment;
  fixUtilities: FixUtilities[];
  varUtilities: VarUtilities[];

  modalRef: BsModalRef;

  date = new Date();
  year = this.date.getFullYear();
  month = this.date.getMonth();

  ngOnInit() {
    this.getPayments();
    this.tariffService.getFixUt().subscribe(fixUtilities => {
      this.fixUtilities = fixUtilities;
    });

    this.tariffService.getVarUt().subscribe(varUtilities => {
      this.varUtilities = varUtilities;
    });
  }


  getPayments(): void {
    this.homeService.getPayment().subscribe(payments => {
      this.payments = payments;
      this.lastPayment = this.payments[this.payments.length - 1];
      if (this.lastPayment.year === undefined && this.lastPayment.month === undefined) {
        this.lastPayment.year = this.year;
        this.lastPayment.month = this.month;
      }
    });
  }

  // ......add new payment........

  addNewPayment() {

    const element: Payment = {
      year: this.year,
      month: this.month,
      fixedUt: this.fixUtilities,
      varUt: this.varUtilities
    };


    // TODO
    // get real last element
    //
    // handle if DB is empty
    // year=2018
    // month=current month
    // preveously  for all = 0


    element.varUt.forEach((el, i) => {
      if (this.lastPayment.varUt[i] === undefined) {
        return;
      } else {
        el.previous = this.lastPayment.varUt[i].current;
      }
    });

    if (this.lastPayment.month === 11) {
      element.year = this.lastPayment.year + 1;
      element.month = 1;
    } else {
      element.year = this.lastPayment.year;
      element.month = this.lastPayment.month + 1;
    }

    this.homeService.addPayment(element)
      .subscribe(payment => {
        element = payment;
        this.payments.push(element);
        this.lastPayment = element;
      });
  }

  // ......save.....

  save(payment: Payment): void {
    this.homeService.updatePayment(payment)
      .subscribe();
  }

  // .......modal.......

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

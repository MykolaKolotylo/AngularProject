import { Component, OnInit, TemplateRef} from '@angular/core';
import { of } from 'rxjs';

import { Payment } from '../utilities';
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
  element: Payment;
  lastPayment: Payment;

  modalRef: BsModalRef;

  objDate = Date.now();

  ngOnInit() {
    this.getPayments();
  }


  getPayments(): void {
    this.homeService.getPayment().subscribe(payments => {
      this.payments = payments;
      this.lastPayment = this.payments[this.payments.length - 1];
      console.log(this.payments);
    });
  }

  // ......add new payment........

  addNewPayment() {

    this.element = {
      year: 2018, month: 0,
      fixedUt: [{ id: 1, name: 'rent', sum: 53, persAcc: 12345 },
      { id: 2, name: 'heating', sum: 349, persAcc: 12345 }],
      varUt: [{ id: 1, name: 'light', previous: 0 , current: null, tariff: 2.05, sum: null, persAcc: 12345 },
      { id: 2, name: 'water', previous: 0, current: null, tariff: 1.56, sum: null, persAcc: 324354 },
      { id: 3, name: 'gas', previous: 0, current: null, tariff: 3.8, sum: null, persAcc: 134253 }]
    };

    // TODO
    // get real last element
    //
    // handle if DB is empty
    // year=2018
    // month=current month
    // preveously  for all = 0

    this.element.varUt.forEach((el, i) => {
      el.previous = this.lastPayment.varUt[i].current;
    });

    if (this.lastPayment.month === 12) {
      this.element.year = this.lastPayment.year + 1;
      this.element.month = 1;
    } else {
      this.element.year = this.lastPayment.year;
      this.element.month = this.lastPayment.month + 1;
    }
    // console.log(this.lastPayment);

    this.homeService.addPayment(this.element)
      .subscribe(payment => {
        console.log(payment);
        this.element = payment;
        this.payments.push(this.element);
        this.lastPayment = this.element;
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

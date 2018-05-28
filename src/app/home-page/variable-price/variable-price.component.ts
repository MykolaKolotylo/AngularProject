import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

import { Payment } from '../../utilities';
import { HomeService } from '../home-service.service';

@Component({
  selector: 'app-variable-price',
  templateUrl: './variable-price.component.html',
  styleUrls: ['./variable-price.component.css']
})
export class VariablePriceComponent implements OnInit {


  constructor(private homeService: HomeService) { }

  @Input() varBlk;

  payment: Payment;
  customClass = 'customClass';

  ngOnInit() {
  }

  calculate(previous, current, tariff) {
    this.varBlk.sum = (current - previous) * tariff;
  }
}

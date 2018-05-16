import { Component, OnInit } from '@angular/core';

import { Payment } from '../utilities';
import { HomeService } from './home-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  payments: Payment[];

  objDate = Date.now();

  ngOnInit() {
    this.getTemplate();
  }

  getTemplate (): void {
    this.homeService.getPayment().subscribe(data => { this.payments = data;
    console.log(this.payments);
    });
  }

}

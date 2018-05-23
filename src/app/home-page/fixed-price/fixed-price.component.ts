import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fixed-price',
  templateUrl: './fixed-price.component.html',
  styleUrls: ['./fixed-price.component.css']
})
export class FixedPriceComponent implements OnInit {

  constructor() { }

  @Input() fixedBlk;

  objDate = Date.now();

  customClass = 'customClass';

  ngOnInit() {
    // console.log(this.fixedBlk);
  }

}

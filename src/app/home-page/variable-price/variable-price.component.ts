import { Component, OnInit, Input } from '@angular/core';
import { VarUtilities } from '../../utilities';

@Component({
  selector: 'app-variable-price',
  templateUrl: './variable-price.component.html',
  styleUrls: ['./variable-price.component.css']
})
export class VariablePriceComponent implements OnInit {

  constructor() { }

  @Input() varBlk: VarUtilities[];

  objDate = Date.now();

  ngOnInit() {
    console.log(this.varBlk);
  }

}

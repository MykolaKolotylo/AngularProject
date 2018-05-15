import { Component, OnInit } from '@angular/core';
import { varUtilities, fixedUtilities } from '../mock-utilities';
import { VarUtilities, FixedUtilities } from '../utilities';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  varBlock: VarUtilities[] = varUtilities;
  fixedBlock: FixedUtilities[] = fixedUtilities;

  objDate = Date.now();

  ngOnInit() {
    // console.log(this.varBlock);
  }

}

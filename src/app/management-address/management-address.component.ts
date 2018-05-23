import { Component, OnInit } from '@angular/core';

// import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-management-address',
  templateUrl: './management-address.component.html',
  styleUrls: ['./management-address.component.css']
})
export class ManagementAddressComponent implements OnInit {

  constructor() { }

  getDefaultAddress;
  arr = [];

  getAddres(valCity: string, valStreet: string, valNumHouse: number, valNumApartment: number) {
    if (valCity && valStreet && valNumHouse && valNumApartment) {
      this.arr.push({ valCity, valStreet, valNumHouse, valNumApartment });
    } else {
      console.log('fill this input');
    }
    console.log(this.arr);
  }

  ngOnInit() {
  }


}

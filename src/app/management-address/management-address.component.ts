import { Component, OnInit } from '@angular/core';

import { AddressService } from '../services/address.service';
// import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-management-address',
  templateUrl: './management-address.component.html',
  styleUrls: ['./management-address.component.css']
})
export class ManagementAddressComponent implements OnInit {

  constructor(private addressSrvice: AddressService) { }

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
    this.getDefaultAddress = this.addressSrvice.getDefaultAddress();
  }

}

import { Injectable } from '@angular/core';

import { address } from '../mock-utilities';
import { Address } from '../utilities';

@Injectable()
export class AddressService {

  address: Address[] = address;


  getDefaultAddress() {
    return this.address;
  }

  constructor() { }

}


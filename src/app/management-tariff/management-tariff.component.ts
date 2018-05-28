import { Component, OnInit, TemplateRef } from '@angular/core';
import { TariffService } from './tariff.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Payment, FixUtilities, VarUtilities } from '../utilities';

@Component({
  selector: 'app-management-tariff',
  templateUrl: './management-tariff.component.html',
  styleUrls: ['./management-tariff.component.css']
})
export class ManagementTariffComponent implements OnInit {

  modalRef: BsModalRef;
  fixUtility: FixUtilities[];
  varUtilities: VarUtilities[];
  allUtilities = [];
  fixed = true;



  constructor(private tariffService: TariffService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getFixUtilities();
    this.getVarUtilities();
  }

  // ............get utilities.............

  getFixUtilities(): void {
    this.tariffService.getFixUt().subscribe(fixedUt => {
      this.fixUtility = fixedUt;
      this.fixUtility.forEach(el => {
        this.allUtilities.push(el);
      });
    });
  }

  getVarUtilities(): void {
    this.tariffService.getVarUt().subscribe(varUtility => {
      this.varUtilities = varUtility;
      this.varUtilities.forEach(el => {
        this.allUtilities.push(el);
      });
    });
  }


  // .........add new ..................


  addUtility(NameUtility: string): void {
    if (this.fixed === true) {
      this.addFixUtility(NameUtility);
    } else {
      this.addVarUtility(NameUtility);
    }
  }

  addFixUtility(NameUtility): void {
    console.log(this.fixUtility);
    NameUtility = NameUtility.trim();
    if (!NameUtility) { return; }

    const name = NameUtility;
    const tariff = 0;

    this.tariffService.newFixUtility({ name, tariff } as FixUtilities)
      .subscribe(newUtility => {
        this.fixUtility.push(newUtility);
        this.allUtilities.push(newUtility);
      });
  }

  addVarUtility(NameUtility: string): void {
    console.log(this.varUtilities);
    NameUtility = NameUtility.trim();
    if (!NameUtility) { return; }

    const name = NameUtility;
    const tariff = 0;

    this.tariffService.newVarUtility({ name, tariff } as VarUtilities)
      .subscribe(varUtility => {
        this.varUtilities.push(varUtility);
        this.allUtilities.push(varUtility);
      });
  }

  // ............save............


  save(newTariff: string, NameUtility: string, fixed: boolean): void {
    // this.allUtilities.forEach(el => {
    if (fixed === true) {
      this.saveForFixUt(newTariff);
    } else {
      this.saveForVarUt(newTariff);
    }
    // });
  }

  saveForFixUt(newTariff): void {
    console.log(newTariff + ' ' + 'fixed');

    // if (newTariff) {

    // }

    this.tariffService.updateFixPayment({ newTariff })
      .subscribe();
  }


  saveForVarUt(newTariff): void {
    console.log(newTariff + ' ' + 'var');

    // if (newTariff) {

    // }

    this.tariffService.updateVarPayment({ newTariff })
      .subscribe();
  }

  // .......modal.......

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

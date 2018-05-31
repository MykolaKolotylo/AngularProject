import { Component, OnInit, TemplateRef } from '@angular/core';

import { TariffService } from './tariff.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Payment, FixUtility, VarUtility } from '../utilities';

@Component({
  selector: 'app-management-tariff',
  templateUrl: './management-tariff.component.html',
  styleUrls: ['./management-tariff.component.css']
})
export class ManagementTariffComponent implements OnInit {

  modalRef: BsModalRef;
  fixUtilities: FixUtility[];
  varUtilities: VarUtility[];
  allUtilities = [];

  constructor(private tariffService: TariffService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.getFixUtilities();
    this.getVarUtilities();
  }

  // ............get utilities.............

  getFixUtilities(): void {
    this.tariffService.getFixUt().subscribe(fixedUt => {
      this.fixUtilities = fixedUt;
      this.fixUtilities.forEach(el => {
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

  // .........add new utility..................

  addUtility(NameUtility: string, fixed: boolean): void {

    NameUtility = NameUtility.trim();
    if (!NameUtility) { return; }

    for (let i = 0; i < this.allUtilities.length; i++) {
      if (this.allUtilities[i].name.includes(NameUtility)) {
        return;
      }
    }

    if (fixed === true) {
      if (this.fixUtilities.length === 0) {
        const id = 1;
        this.addFixUtility({ id, name: NameUtility, isCheck: fixed } as FixUtility);
      } else {
        this.addFixUtility({ name: NameUtility, isCheck: fixed } as FixUtility);
      }
    } else {
      if (this.varUtilities.length === 0) {
        const id = 1;
        this.addVarUtility({ id, name: NameUtility, isCheck: fixed } as VarUtility);
      } else {
        this.addVarUtility({ name: NameUtility, isCheck: fixed } as VarUtility);
      }
    }
  }

  addFixUtility(fixedUt): void {
    this.tariffService.newFixUtility(fixedUt)
      .subscribe(fixUtility => {
        this.fixUtilities.push(fixUtility);
        this.allUtilities.push(fixUtility);
      });
  }

  addVarUtility(variableUt): void {
    this.tariffService.newVarUtility(variableUt)
      .subscribe(varUtility => {
        this.varUtilities.push(varUtility);
        this.allUtilities.push(varUtility);
      });
  }

  // ............save............

  save(id: number, newTariff: number, NameUtility: string, check): void {
    if (check === true) {
      this.saveForFixUt({ id: id, name: NameUtility, tariff: newTariff, isCheck: check } as FixUtility);
    } else {
      this.saveForVarUt({ id: id, name: NameUtility, tariff: newTariff, isCheck: check } as VarUtility);
    }
  }

  saveForFixUt(fixedUt: FixUtility): void {
    this.tariffService.updateFixTariff(fixedUt)
      .subscribe();
  }

  saveForVarUt(varUt: VarUtility): void {
    this.tariffService.updateVarTariff(varUt)
      .subscribe();
  }

  // .......modal.......

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

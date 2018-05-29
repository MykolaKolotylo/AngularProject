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
  fixUtility: FixUtility[];
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


  addUtility(NameUtility: string, fixed: boolean): void {
    if (fixed === true) {
      this.addFixUtility(NameUtility, fixed);
    } else {
      this.addVarUtility(NameUtility, fixed);
    }
  }

  addFixUtility(NameUtility, fixed): void {
    NameUtility = NameUtility.trim();
    if (!NameUtility) { return; }

    const name = NameUtility;
    const tariff = null;
    const fixMark = fixed;

    this.tariffService.newFixUtility({ name, tariff, fixMark } as FixUtility)
      .subscribe(fixUtility => {
        this.fixUtility.push(fixUtility);
        this.allUtilities.push(fixUtility);
      });
  }

  addVarUtility(NameUtility: string, fixed: boolean): void {
    NameUtility = NameUtility.trim();
    if (!NameUtility) { return; }

    const name = NameUtility;
    const tariff = null;
    const fixMark = false;

    this.tariffService.newVarUtility({ name, tariff, fixMark } as VarUtility)
      .subscribe(varUtility => {
        this.varUtilities.push(varUtility);
        this.allUtilities.push(varUtility);
      });
  }

  // ............save............

  save(id: number, newTariff: number, NameUtility: string, check): void {
    if (check === true) {
      this.saveForFixUt({id: id, name: NameUtility, tariff: newTariff, fixMark: check } as FixUtility);
    } else {
      this.saveForVarUt({id: id, name: NameUtility, tariff: newTariff, fixMark: check} as VarUtility);
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

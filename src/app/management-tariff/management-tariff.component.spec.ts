import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTariffComponent } from './management-tariff.component';

describe('ManagementTariffComponent', () => {
  let component: ManagementTariffComponent;
  let fixture: ComponentFixture<ManagementTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

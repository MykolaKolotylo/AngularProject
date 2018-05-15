import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablePriceComponent } from './variable-price.component';

describe('VariablePriceComponent', () => {
  let component: VariablePriceComponent;
  let fixture: ComponentFixture<VariablePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

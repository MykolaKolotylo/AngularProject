import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPriceComponent } from './fixed-price.component';

describe('FixedPriceComponent', () => {
  let component: FixedPriceComponent;
  let fixture: ComponentFixture<FixedPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

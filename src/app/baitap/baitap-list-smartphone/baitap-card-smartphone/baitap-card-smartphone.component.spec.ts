import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapCardSmartphoneComponent } from './baitap-card-smartphone.component';

describe('BaitapCardSmartphoneComponent', () => {
  let component: BaitapCardSmartphoneComponent;
  let fixture: ComponentFixture<BaitapCardSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapCardSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapCardSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapListSmartphoneComponent } from './baitap-list-smartphone.component';

describe('BaitapListSmartphoneComponent', () => {
  let component: BaitapListSmartphoneComponent;
  let fixture: ComponentFixture<BaitapListSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapListSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapListSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

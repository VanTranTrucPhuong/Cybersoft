import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapCardLaptopComponent } from './baitap-card-laptop.component';

describe('BaitapCardLaptopComponent', () => {
  let component: BaitapCardLaptopComponent;
  let fixture: ComponentFixture<BaitapCardLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapCardLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapCardLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

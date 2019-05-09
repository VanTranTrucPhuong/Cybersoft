import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapListLapComponent } from './baitap-list-lap.component';

describe('BaitapListLapComponent', () => {
  let component: BaitapListLapComponent;
  let fixture: ComponentFixture<BaitapListLapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapListLapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapListLapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

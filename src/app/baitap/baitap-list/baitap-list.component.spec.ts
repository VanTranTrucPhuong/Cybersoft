import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapListComponent } from './baitap-list.component';

describe('BaitapListComponent', () => {
  let component: BaitapListComponent;
  let fixture: ComponentFixture<BaitapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

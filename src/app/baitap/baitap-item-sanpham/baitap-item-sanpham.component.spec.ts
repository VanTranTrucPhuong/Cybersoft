import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapItemSanphamComponent } from './baitap-item-sanpham.component';

describe('BaitapItemSanphamComponent', () => {
  let component: BaitapItemSanphamComponent;
  let fixture: ComponentFixture<BaitapItemSanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapItemSanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapItemSanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

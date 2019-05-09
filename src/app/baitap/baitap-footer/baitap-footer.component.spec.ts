import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapFooterComponent } from './baitap-footer.component';

describe('BaitapFooterComponent', () => {
  let component: BaitapFooterComponent;
  let fixture: ComponentFixture<BaitapFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

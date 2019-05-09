import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapSlideComponent } from './baitap-slide.component';

describe('BaitapSlideComponent', () => {
  let component: BaitapSlideComponent;
  let fixture: ComponentFixture<BaitapSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

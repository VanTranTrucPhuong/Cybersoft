import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapHeaderComponent } from './baitap-header/baitap-header.component';
import { BaitapFooterComponent } from './baitap-footer/baitap-footer.component';
import { BaitapSlideComponent } from './baitap-slide/baitap-slide.component';
import { BaitapListSmartphoneComponent } from './baitap-list-smartphone/baitap-list-smartphone.component';
import { BaitapListLapComponent } from './baitap-list-lap/baitap-list-lap.component';
import { BaitapComponent } from './baitap.component';
import { BaitapItemSanphamComponent } from './baitap-item-sanpham/baitap-item-sanpham.component';

@NgModule({
  declarations: [BaitapComponent, BaitapHeaderComponent, BaitapFooterComponent, BaitapSlideComponent, BaitapListSmartphoneComponent, BaitapListLapComponent,  BaitapItemSanphamComponent],
  exports:[BaitapComponent, BaitapHeaderComponent, BaitapFooterComponent, BaitapSlideComponent, BaitapListSmartphoneComponent, BaitapListLapComponent,  BaitapItemSanphamComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapModule { }

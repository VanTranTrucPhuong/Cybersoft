import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapHeaderComponent } from './baitap-header/baitap-header.component';
import { BaitapFooterComponent } from './baitap-footer/baitap-footer.component';
import { BaitapSlideComponent } from './baitap-slide/baitap-slide.component';
import { BaitapCardComponent } from './baitap-list/baitap-card/baitap-card.component';
import { BaitapListSmartphoneComponent } from './baitap-list-smartphone/baitap-list-smartphone.component';
import { BaitapListLapComponent } from './baitap-list-lap/baitap-list-lap.component';
import { BaitapCardSmartphoneComponent } from './baitap-list-smartphone/baitap-card-smartphone/baitap-card-smartphone.component';
import { BaitapCardLaptopComponent } from './baitap-list-lap/baitap-card-laptop/baitap-card-laptop.component';

@NgModule({
  declarations: [BaitapHeaderComponent, BaitapFooterComponent, BaitapSlideComponent, BaitapCardComponent, BaitapListSmartphoneComponent, BaitapListLapComponent, BaitapCardSmartphoneComponent, BaitapCardLaptopComponent],
  exports:[BaitapHeaderComponent, BaitapFooterComponent, BaitapSlideComponent, BaitapCardComponent, BaitapListSmartphoneComponent, BaitapListLapComponent, BaitapCardSmartphoneComponent, BaitapCardLaptopComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';



@NgModule({
  declarations: [LoaderComponent, ItemCardComponent, DetailCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ItemCardComponent,
    LoaderComponent,
    DetailCardComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderMainComponent } from './components/order-main/order-main.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './components/history/history.component';



@NgModule({
  declarations: [OrderMainComponent, HistoryComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class OrderModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderMainComponent } from './components/order-main/order-main.component';
import { HistoryComponent } from './components/history/history.component';
const routes: Routes = [
  { path: 'order', component: OrderMainComponent},
  { path: 'history', component: HistoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

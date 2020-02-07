import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  public myHistory: Array<any> = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    // gets all the order history
    this.http.getRequest('/orders/viewOrder/' + localStorage.getItem('userid')).subscribe((data) => {
      console.log('data', data);
      this.myHistory = data.orderItems;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  public myHistory: Array<any> = [];
  constructor(private http: HttpService, private route: Router) { }

  ngOnInit() {
    this.http.getRequest('/orders/viewOrder/' + localStorage.getItem('userid')).subscribe((data) => {
      this.myHistory = data.orderItems;
    });
  }

  public goBack(): void {
    this.route.navigate(['/order']);
  }

}

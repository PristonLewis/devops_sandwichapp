import { Component } from '@angular/core';
import { setupTestingRouter } from '@angular/router/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sandwich';
  public signoutFlag: boolean = true;
  constructor(private route: Router) {}
  public signout(): void {
    localStorage.setItem('userid', '');
    localStorage.setItem('username', '');
    this.route.navigate(['/login']);
  }
}


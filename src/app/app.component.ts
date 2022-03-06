import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router) {
    //Get the info of that element in localStorage, if it doesn't exist, it returns null
    const USER_INFO = JSON.parse(localStorage.getItem('userCovidUta'));

    if (USER_INFO) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['login']);
    }
  }
}

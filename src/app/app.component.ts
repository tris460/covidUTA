import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router, public userDataService: UserDataService) {
    //Get the info of that element in localStorage, if it doesn't exist, it returns null
    const USER_INFO = JSON.parse(localStorage.getItem('userCovidUta'));

    this.userDataService.userLogged = USER_INFO;
    if (USER_INFO) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['login']);
    }
  }
}

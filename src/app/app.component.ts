import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  logged: boolean; //If the user login

  constructor(private router: Router) {
    this.logged = false;
    if (this.logged) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['login']);
    }
  }
}

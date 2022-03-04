import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
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

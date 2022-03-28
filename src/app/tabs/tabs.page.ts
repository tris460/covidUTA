import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tipo: any; //Type of user: user, admin, superadmin

  constructor() {
    this.tipo = JSON.parse(localStorage.getItem('userCovidUta'));
    this.tipo = this.tipo.rol;
    console.log(this.tipo);
    console.log(typeof this.tipo);
  }

}

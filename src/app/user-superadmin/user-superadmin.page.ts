import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-superadmin',
  templateUrl: './user-superadmin.page.html',
  styleUrls: ['./user-superadmin.page.scss'],
})
export class UserSuperadminPage implements OnInit {
  logo: string;
  background: string;
  showFormAdd: boolean;
  showFormEdit: boolean;
  showFormDelete: boolean;

  constructor() {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.showFormAdd = false;
    this.showFormEdit = false;
    this.showFormDelete = false;
  }
  getRol($event) {
    console.log($event.target.value);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.page.html',
  styleUrls: ['./user-admin.page.scss'],
})
export class UserAdminPage implements OnInit {
  logo: string;
  background: string;

  constructor() {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
  }

  ngOnInit() {
  }
}

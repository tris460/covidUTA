import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-admin',
  templateUrl: './history-admin.page.html',
  styleUrls: ['./history-admin.page.scss'],
})
export class HistoryAdminPage implements OnInit {
  background: string;
  logo: string;

  constructor() {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
   }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-superadmin',
  templateUrl: './history-superadmin.page.html',
  styleUrls: ['./history-superadmin.page.scss'],
})
export class HistorySuperadminPage implements OnInit {
  logo: string;
  background: string;

  constructor() {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
  }

  ngOnInit() {
  }

}

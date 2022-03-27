import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  background: string;
  logo: string;

  constructor() {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
   }

  ngOnInit() {
  }

}

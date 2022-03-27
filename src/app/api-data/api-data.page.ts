import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.page.html',
  styleUrls: ['./api-data.page.scss'],
})
export class ApiDataPage implements OnInit {
  logo: string;
  background: string;

  constructor() {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
  }

  ngOnInit() {
  }

}

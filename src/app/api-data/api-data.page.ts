import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../services/api-covid-connection.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.page.html',
  styleUrls: ['./api-data.page.scss'],
})
export class ApiDataPage implements OnInit {
  logo: string;
  background: string;
  totalSick: any;
  totalDeath: any;
  data: any;
  dataArray: any[];

  constructor(public api: ApiConnectionService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.totalSick = 'Cargando...';
    this.totalDeath = 'Cargando...';
    this.data = '';
    this.dataArray = [];
    this.get();
  }

  ngOnInit() {
  }
  get() {
    setTimeout(() => {
      this.totalSick = this.api.information.summaryStats.global.confirmed;
      this.totalDeath = this.api.information.summaryStats.global.deaths;
      this.data = this.api.information.rawData;
      for (const i of this.data) {
        this.dataArray.push({
          country: i.Country_Region,
          sick: i.Confirmed,
          death: i.Deaths
        });
      }
    }, 5000);
  }
}

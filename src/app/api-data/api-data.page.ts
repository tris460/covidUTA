import { Component, OnInit } from '@angular/core';
import { ApiConectionService } from '../services/api-conection.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.page.html',
  styleUrls: ['./api-data.page.scss'],
})
export class ApiDataPage implements OnInit {
  logo: string;
  background: string;

  constructor(public api: ApiConectionService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.get();
  }

  ngOnInit() {
  }
  get() {
    setTimeout(() => {
      console.log(this.api.information.rawData);
    }, 10000);
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiIllnessService } from '../services/api-illness.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.page.html',
  styleUrls: ['./user-admin.page.scss'],
})
export class UserAdminPage implements OnInit {
  logo: string;
  background: string;
  apiInfo: Array<any>;
  lastRegisters: Array<any>;

  constructor(private apiIllness: ApiIllnessService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.apiInfo = [];
    this.lastRegisters = [];
  }
  getIllnesses() { // Get the illnesses of the current day
    setTimeout(() => {
      this.apiInfo = this.apiIllness.information;
      this.lastRegisters =  this.apiInfo.slice(this.apiInfo.length-5);
      console.log(this.lastRegisters);
    }, 50);
  }
  ngOnInit() {
    this.getIllnesses();
  }
}

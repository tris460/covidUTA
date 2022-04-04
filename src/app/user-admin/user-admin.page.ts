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

  constructor(private illApi: ApiIllnessService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.getIllnesses();
  }
  getIllnesses() { // Get the illnesses of the current day
    console.log(this.illApi.information);
  }
  ngOnInit() {
  }
}

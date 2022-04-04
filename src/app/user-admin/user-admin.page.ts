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

  constructor(private apiIllness: ApiIllnessService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    //this.getIllnesses();
  }
  getIllnesses() { // Get the illnesses of the current day
    setTimeout(() => {
      console.log(this.apiIllness.information);
    }, 50);
  }
  ngOnInit() {
    this.getIllnesses();
  }
}

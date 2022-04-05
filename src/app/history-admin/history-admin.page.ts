import { Component, OnInit } from '@angular/core';
import { ApiIllnessService } from '../services/api-illness.service';

@Component({
  selector: 'app-history-admin',
  templateUrl: './history-admin.page.html',
  styleUrls: ['./history-admin.page.scss'],
})
export class HistoryAdminPage implements OnInit {
  background: string;
  logo: string;
  illness: Array<any>;

  constructor(public apiIllness: ApiIllnessService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.getIllnesses();
   }
   getIllnesses() { //Get the illnesses registered
    setTimeout(() => {
      this.illness = this.apiIllness.information;
    }, 50);
   }
  ngOnInit() {
  }

}

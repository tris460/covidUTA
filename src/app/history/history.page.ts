import { Component, OnInit } from '@angular/core';
import { ApiIllnessService } from '../services/api-illness.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  background: string;
  logo: string;
  userName: object;
  date: string;
  illness: string;
  symptoms: Array<string>;
  status: number;
  notes: string;
  illnessData: Array<any>;

  constructor(public userDataService: UserDataService, private apiIllness: ApiIllnessService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.userName = userDataService.userLogged.email;
    this.illnessData = [];
    setTimeout(() => {
      this.getIllnesses();
    }, 100);
    this.date = '';
    this.illness = '';
    this.symptoms = [];
    this.status = 0;
    this.notes = '';
  }
  getIllnesses() { // Get the illnesses of the logged user
    this.illnessData = this.apiIllness.information;
    this.illnessData = this.illnessData.filter(u =>
      u.idUser === this.userName);
  }
  ngOnInit() {
  }

}

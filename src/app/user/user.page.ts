import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  date: Date;
  dateDMY: string;
  userName: object;
  symptoms: string;
  illness: string;
  status: string;
  notes: string;
  logo: string;
  background: string;

  constructor(public userDataService: UserDataService) {
    this.date = new Date();
    this.dateDMY = this.date.toDateString();
    this.userName = userDataService.userLogged.email;
    this.symptoms = '';
    this.illness = '';
    this.status = '';
    this.notes = '';
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
   }

  ngOnInit() {
  }

  //Save the symptoms
  addSymptoms(){
    const NEW_SYMPTOMS = {
      date: this.date,
      symptoms: this.symptoms,
      notes: this.notes,
    };
  }
}

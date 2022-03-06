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
  showForm: boolean;
  symptoms: string;
  notes: string;

  constructor(public userDataService: UserDataService) {
    this.date = new Date();
    this.dateDMY = this.date.toDateString();
    this.userName = userDataService.userLogged.email;
    this.showForm = false;
    this.symptoms = '';
    this.notes = '';
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

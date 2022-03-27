import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { AlertController } from '@ionic/angular';

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

  constructor(public userDataService: UserDataService, public alert: AlertController) {
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
    if(this.illness !== '' && this.symptoms !== '' && this.status !== '') {
      // If the fields aren't empty save the data in the DB
      const NEW_SYMPTOMS = {
        date: this.date,
        illness: this.illness,
        symptoms: this.symptoms,
        status: this.status,
        notes: this.notes,
      };
    } else {
      // If the user doesn't fill the fields
      this.showAlert('Error', 'Debes llenar todos los campos.', ['OK']);
    }
  }
  //Show Alert
  async showAlert(headerA, messageA, button) {
    const addAlert = await this.alert.create({
      header: headerA,
      message: messageA,
      buttons: button
    });
    await addAlert.present();
  }
}

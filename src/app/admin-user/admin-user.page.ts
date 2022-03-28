import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.page.html',
  styleUrls: ['./admin-user.page.scss'],
})
export class AdminUserPage implements OnInit {
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

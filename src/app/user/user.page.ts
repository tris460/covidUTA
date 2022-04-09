import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { AlertController } from '@ionic/angular';
import { ApiIllnessService } from '../services/api-illness.service';
import { ApiUserService } from '../services/api-user.service';

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
  userLoggedRol: any;

  constructor(public userDataService: UserDataService,
    public alert: AlertController,
    private apiIllness: ApiIllnessService,
    private apiUser: ApiUserService) {
      this.date = new Date();
      this.dateDMY = this.date.toDateString();
      this.userName = userDataService.userLogged.email;
      this.symptoms = '';
      this.illness = '';
      this.status = '';
      this.notes = '';
      this.logo = '../../assets/logocovid.png';
      this.background = '../../assets/background1.jpeg';
      this.apiUser.getData();
      setTimeout(() => {
        this.userLoggedRol = this.apiUser.information.filter(u => u.strEmail === this.userName);
        this.userLoggedRol = this.userLoggedRol[0].strRol;
        console.log(this.userLoggedRol);
      }, 200);
    }

  ngOnInit() {
  }

  //Save the symptoms
  addSymptoms(){
    if(this.illness !== '' && this.symptoms !== '' && this.status !== '') {
      // If the fields aren't empty save the data in the DB
      const NEW_SYMPTOMS = {
        idUser: this.userName,
        strDate: this.dateDMY,
        strName: this.illness,
        arrSymptoms: this.symptoms,
        intStatus: this.status,
        strNotes: this.notes,
      };
      this.apiIllness.saveData(NEW_SYMPTOMS);
      this.showAlert('Éxito', 'Guardado correctamente.', ['OK']);
      this.clearForm();
    } else {
      // If the user doesn't fill the fields
      this.showAlert('Error', 'Debes llenar todos los campos.', ['OK']);
    }
  }
  //Show Alert
  async showAlert(headerA: string, messageA: string, button: Array<string>) {
    const addAlert = await this.alert.create({
      header: headerA,
      message: messageA,
      buttons: button
    });
    await addAlert.present();
  }
  //Clear the fields
  clearForm() {
    this.dateDMY = this.date.toDateString();
    this.symptoms = '';
    this.illness = '';
    this.status = '';
    this.notes = '';
  }
}

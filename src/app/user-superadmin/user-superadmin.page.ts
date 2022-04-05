import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../services/api-user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-superadmin',
  templateUrl: './user-superadmin.page.html',
  styleUrls: ['./user-superadmin.page.scss'],
})
export class UserSuperadminPage implements OnInit {
  logo: string;
  background: string;
  showFormAdd: boolean;
  showFormEdit: boolean;
  showFormDelete: boolean;
  rolUser: string;
  idUser: any;
  nameUser: string;
  lastNameUser: string;
  secondLastNameUser: string;
  ageUser: any;
  allergiesUser: Array<string>;
  previousIllnessUser: Array<string>;
  careerUser: string;
  gradeUser: any;
  groupUser: string;
  emailUser: string;
  passwordUser: string;

  constructor(public alert: AlertController, private apiUser: ApiUserService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.showFormAdd = false;
    this.showFormEdit = false;
    this.showFormDelete = false;
    this.rolUser= '';
    this.nameUser= '';
    this.lastNameUser= '';
    this.secondLastNameUser= '';
    this.allergiesUser = [];
    this.previousIllnessUser = [];
    this.careerUser= '';
    this.groupUser= '';
    this.emailUser= '';
    this.passwordUser= '';
  }
  getRol($event) { // Get the rol selected
    this.rolUser = $event.target.value;
  }
  addUser(){ //Save a user in the DB
    if (this.idUser > 0 &&
        this.rolUser !== '' &&
        this.emailUser!=='' &&
        this.passwordUser !== '' &&
        this.nameUser !== '' &&
        this.lastNameUser !== '' &&
        this.ageUser > 0 &&
        this.careerUser !== '') {
      const NEW_USER = {
        _id: this.idUser,
        strRol: this.rolUser,
        strEmail: this.emailUser,
        strPassword: this.passwordUser,
        strName: this.nameUser,
        strLastName:this.lastNameUser,
        strSecondLastName: this.secondLastNameUser,
        intAge: this.ageUser,
        arrAllergies: this.allergiesUser,
        arrPreviousIllnesses: this.previousIllnessUser,
        strCareer: this.careerUser,
        intGrade: this.gradeUser,
        chaGroup: this.groupUser
      };
      const res = this.apiUser.saveUser(NEW_USER);
      this.showAlert('¡Éxito!', 'Usuario guardado correctamente.', ['OK']);
      this.clearForm();
    } else {
      this.showAlert('¡Error!', 'Asegurate de completar correctamente los campos.', ['OK']);
    }
  }
  async showAlert(headerA, messageA, button) { // Show an alert
    const addAlert = await this.alert.create({
      header: headerA,
      message: messageA,
      buttons: button
    });
    await addAlert.present();
  }
  clearForm() { // Clear the form
    this.idUser = '';
    this.ageUser = '';
    this.gradeUser = '';
    this.rolUser= '';
    this.nameUser= '';
    this.lastNameUser= '';
    this.secondLastNameUser= '';
    this.allergiesUser = [];
    this.previousIllnessUser = [];
    this.careerUser= '';
    this.groupUser= '';
    this.emailUser= '';
    this.passwordUser= '';
  }
  ngOnInit() {
  }

}

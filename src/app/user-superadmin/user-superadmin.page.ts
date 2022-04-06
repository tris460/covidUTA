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
  idUserEd: any;
  nameUser: string;
  nameUserEd: string;
  lastNameUser: string;
  lastNameUserEd: string;
  secondLastNameUser: string;
  secLastNameUserEd: string;
  ageUser: any;
  ageUserEd: any;
  allergiesUser: Array<string>;
  allergiesUserEd: Array<string>;
  previousIllnessUser: Array<string>;
  prevIllUserEd: Array<string>;
  careerUser: string;
  careerUserEd: string;
  gradeUser: any;
  gradeUserEd: any;
  groupUser: string;
  groupUserEd: string;
  emailUser: string;
  emailUserEd: string;
  passwordUser: string;
  passUserEd: string;
  existentUser: boolean;
  dataEditUser: any;
  idToEdit: any;

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
    this.existentUser = false;
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
  editUser() { //Edit the user
    this.dataEditUser = { // Generate the object for the edited user
      _id: this.idUserEd,
      strRol: this.rolUser,
      strEmail: this.emailUserEd,
      strPassword: this.passUserEd,
      strName: this.nameUserEd,
      strLastName:this.lastNameUserEd,
      strSecondLastName: this.secLastNameUserEd,
      intAge: this.ageUserEd,
      arrAllergies: this.allergiesUserEd,
      arrPreviousIllnesses: this.prevIllUserEd,
      strCareer: this.careerUserEd,
      intGrade: this.gradeUserEd,
      chaGroup: this.groupUserEd
    };
    this.apiUser.editUser(this.idToEdit, this.dataEditUser);
    setTimeout(() => {
      const status = this.apiUser.userUpdated.status;
      if(status === 'User updated') {
        this.showAlert('¡Éxito!', 'Usuario actualizado correctamente.', ['OK']);
        this.existentUser = false;
      } else {
        this.showAlert('¡Error!', 'Asegurate de completar correctamente los campos.', ['OK']);
      }
    }, 50);
  }
  searchUser($event) { //Search by user and show the information
    this.idToEdit = $event.target.value;
    let infoUser;
    this.apiUser.getOneUser(this.idToEdit);
    setTimeout(() => {
      infoUser = this.apiUser.userInformation;
      if(infoUser !== null) { // Show the data in the html
        this.existentUser = true;
        this.rolUser = infoUser.strRol;
        // eslint-disable-next-line no-underscore-dangle
        this.idUserEd = infoUser._id;
        this.nameUserEd = infoUser.strName;
        this.lastNameUserEd = infoUser.strLastName;
        this.secLastNameUserEd = infoUser.strSecondLastName;
        this.careerUserEd = infoUser.strCareer;
        this.gradeUserEd = infoUser.intGrade;
        this.groupUserEd = infoUser.chaGroup;
        this.ageUserEd = infoUser.intAge;
        this.allergiesUserEd = infoUser.arrAllergies;
        this.prevIllUserEd = infoUser.arrPreviousIllnesses;
        this.emailUserEd = infoUser.strEmail;
        this.passUserEd = infoUser.strPassword;
      } else {
        this.existentUser = false;
        this.rolUser = '';
        this.idUserEd = '';
        this.nameUserEd = '';
        this.lastNameUserEd = '';
        this.secLastNameUserEd = '';
        this.careerUserEd = '';
        this.gradeUserEd = '';
        this.groupUserEd = '';
        this.ageUserEd = '';
        this.allergiesUserEd = [];
        this.prevIllUserEd = [];
        this.emailUserEd = '';
        this.passUserEd = '';
      }
    }, 1000);
  }
  searchUserDelete($event) { // Search an user to delete
    const id = $event.target.value;
    this.apiUser.getOneUser(id);
    setTimeout(() => {
      const userData = this.apiUser.userInformation;
      if (userData === null ) {
        this.showAlert('Error', 'Usuario no encontrado.', ['OK']);
      } else {
        const userName = `${userData.strName} ${userData.strLastName}`;
        this.showAlert('Alerta', `¿Está seguro de eliminar a ${userName}?`, [
          'Cancelar',
          {
            text: 'OK',
            handler: (x) => {
              this.apiUser.deleteUser(id);
              this.showAlert('Éxito', `Usuario eliminado correctamente.`, ['OK']);
            }
          }
        ]);
      }
    }, 100);
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

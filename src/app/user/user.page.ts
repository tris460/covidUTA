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
  logo: string;
  background: string;
  // Variables for user
  date: Date;
  dateDMY: string;
  userName: object;
  symptoms: string;
  illness: string;
  status: string;
  notes: string;
  userLoggedRol: any;
  // Variables for admin
  apiInfo: Array<any>;
  lastRegisters: Array<any>;
  // Variables for superadmin
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
      this.apiInfo = [];
      this.lastRegisters = [];
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
      setTimeout(() => {
        this.userLoggedRol = this.apiUser.information.filter(u => u.strEmail === this.userName);
        this.userLoggedRol = this.userLoggedRol[0].strRol;
      }, 200);
    }

  ngOnInit() {
    this.getIllnesses();
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
  // Get the illnesses of the current day
  getIllnesses() {
    this.apiIllness.getData();
    setTimeout(() => {
      this.apiInfo = this.apiIllness.information;
      if(this.apiInfo.length > 0) {
        this.lastRegisters =  this.apiInfo.slice(this.apiInfo.length-5);
      }
    }, 100);
  }
  // Get the rol selected
  getRol($event) {
    this.rolUser = $event.target.value;
  }
  //Save a user in the DB
  addUser(){
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
  //Edit the user of DB
  editUser() {
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
  //Search by user and show the information
  searchUser($event) {
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
  // Search an user to delete
  searchUserDelete($event) {
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
            handler: () => {
              this.apiUser.deleteUser(id);
              this.showAlert('Éxito', `Usuario eliminado correctamente.`, ['OK']);
            }
          }
        ]);
      }
    }, 100);
  }
  //Show Alert
  async showAlert(headerA: string, messageA: string, button: Array<any>) {
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
}

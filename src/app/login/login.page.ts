import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiUserService } from '../services/api-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  correctCredentials: boolean;
  background: string;
  userReported: any;

  constructor(private router: Router, public alert: AlertController, private apiUser: ApiUserService) {
    this.email = '';
    this.password = '';
    this.correctCredentials = false;
    this.background = '../../assets/background.jpeg';
  }

  ngOnInit() { }

  login() {
    this.userReported = this.apiUser.information;
    const correctUser = this.userReported.filter(u => // If the credentials are registered in the BD
      u.tEmail === this.email && u.tContraseña === this.password);

    if (correctUser.length > 0) {
      const USER_INFO =  { //Object to save data in local storage
        rol: correctUser[0].tRol,
        email: this.email,
      };

      localStorage.setItem('userCovidUta', JSON.stringify(USER_INFO)); //Save data in localStorage, it only receives string
      this.router.navigate(['']);
    } else {
      this.showAlert('Error', 'Correo o contraseña incorrecta', ['OK']);
    }
  }
  async showAlert(headerA, messageA, button) {
    const addAlert = await this.alert.create({
      header: headerA,
      message: messageA,
      buttons: button
    });
    await addAlert.present();
  }
}

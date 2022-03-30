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

  constructor(private router: Router, public alert: AlertController, private apiUser: ApiUserService) {
    this.email = '';
    this.password = '';
    this.correctCredentials = false;
    this.background = '../../assets/background.jpeg';
   }

  ngOnInit() {
  }

  login() {
    this.apiUser.getData();
    if (this.email === 'abc' && this.password === '123') { //If the credentials are correct
      const USER_INFO =  { //Object to save data in local storage
        email: this.email,
        rol: 'user'
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

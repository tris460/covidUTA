import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userName: string;
  logo: string;
  background: string;

  constructor(private router: Router, public userDataService: UserDataService) {
    this.userName = userDataService.userLogged.email;
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
   }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('userCovidUta');
    this.router.navigate(['login']);
  }
}

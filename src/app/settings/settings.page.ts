import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUserService } from '../services/api-user.service';
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
  userData: any;
  name: string;
  lastName: string;
  career: string;
  grade: any;
  allergies: Array<string>;
  illnesses: Array<string>;

  constructor(private router: Router, public userDataService: UserDataService, private apiUser: ApiUserService) {
    this.userName = userDataService.userLogged.email;
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.apiUser.getData();
    this.allergies = [];
    this.illnesses = [];
    this.grade = '';
    this.career = '';
    setTimeout(() => {
      this.userData = this.apiUser.information.filter(u => u.strEmail === this.userName);
      this.allergies = this.userData[0].arrAllergies;
      this.name = `${this.userData[0].strName} ${this.userData[0].strLastName}`;
      this.career = this.userData[0].strCareer;
      this.grade = `${this.userData[0].intGrade}° ${this.userData[0].chaGroup}`;
      this.illnesses = this.userData[0].arrPreviousIllnesses;
    }, 200);
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('userCovidUta');
    this.router.navigate(['login']);
  }
}

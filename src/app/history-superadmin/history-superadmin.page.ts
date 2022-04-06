import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../services/api-user.service';

@Component({
  selector: 'app-history-superadmin',
  templateUrl: './history-superadmin.page.html',
  styleUrls: ['./history-superadmin.page.scss'],
})
export class HistorySuperadminPage implements OnInit {
  logo: string;
  background: string;
  admins: Array<any>;
  users: Array<any>;
  userToShow: any;
  userId: number;
  userName: string;
  userLastName: string;
  userSecLastName: string;
  userEmail: string;
  userCareer: string;
  userGrade: number;
  userGroup: string;
  userAge: number;
  userIllnesses: Array<any>;
  userAllergies: Array<any>;

  constructor(private apiUser: ApiUserService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.userId = 0;
    this.userName = '';
    this.userLastName = '';
    this.userSecLastName = '';
    this.userEmail = '';
    this.userCareer = '';
    this.userGrade = 0;
    this.userGroup = '';
    this.userAge = 0;
    this.userIllnesses= [];
    this.userAllergies = [];
    setTimeout(() => {
      this.admins = this.apiUser.information.filter(u => u.strRol === 'admin');
      this.users = this.apiUser.information.filter(u => u.strRol === 'user');
    }, 100);
  }
  getUser($event) {
    this.apiUser.getOneUser($event.target.value);
    setTimeout(() => {
      this.userToShow = this.apiUser.userInformation;
      // eslint-disable-next-line no-underscore-dangle
      this.userId = this.userToShow._id;
      this.userName = this.userToShow.strName;
      this.userLastName = this.userToShow.strLastName;
      this.userSecLastName = this.userToShow.strSecondLastName;
      this.userEmail = this.userToShow.strEmail;
      this.userCareer = this.userToShow.strCareer;
      this.userGrade = this.userToShow.intGrade;
      this.userGroup = this.userToShow.chaGroup;
      this.userAge = this.userToShow.intAge;
      this.userIllnesses= this.userToShow.arrPreviousIllnesses;
      this.userAllergies = this.userToShow.arrAllergies;
    }, 100);
  }
  ngOnInit() {
  }

}

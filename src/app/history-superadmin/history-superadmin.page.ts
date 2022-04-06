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

  constructor(private apiUser: ApiUserService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    setTimeout(() => {
      this.admins = this.apiUser.information.filter(u => u.strRol === 'admin');
    }, 100);
  }
  getAdmin($event) {
    this.apiUser.getOneUser($event.target.value);
    setTimeout(() => {
      console.log(this.apiUser.userInformation);
    }, 50);
  }
  getUser($event) {}
  ngOnInit() {
  }

}

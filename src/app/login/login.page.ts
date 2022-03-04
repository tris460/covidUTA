import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  correctCredentials: boolean;

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
    this.correctCredentials = false;
   }

  ngOnInit() {
  }

  login() {
    if (this.email === 'abc' && this.password === '123') { //If the credentials are correct
      const USER_INFO =  { //Object to save data in local storage
        email: this.email,
        rol: 'admin'
      };
      localStorage.setItem('userCovidUta', JSON.stringify(USER_INFO)); //Save data in localStorage, it only receives string
      this.router.navigate(['tabs', 'tab1']);
    } else {
      alert('Incorrect password or email');
    }
  }
}

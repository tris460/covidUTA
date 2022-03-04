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
    if (this.email === 'abc' && this.password === '123') {
      this.router.navigate(['tabs', 'tab1']);
    } else {
      alert('Incorrect password or email');
    }
  }
}

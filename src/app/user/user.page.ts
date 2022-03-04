import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  date: Date;
  dateDMY: string;
  constructor() {
    this.date = new Date();
    this.dateDMY = this.date.toDateString();
   }

  ngOnInit() {
  }

}

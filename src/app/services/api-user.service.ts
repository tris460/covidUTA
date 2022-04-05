import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  urlApi: string;
  information: any;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:3000/api/users';
    this.getData();
  }
  getData() {
    this.http.get(this.urlApi)
    .subscribe(
      res => {
        this.information = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  saveUser(user) {
    this.http.post(this.urlApi, user)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
}

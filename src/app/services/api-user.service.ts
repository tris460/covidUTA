import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  urlApi: string;
  information: any;
  userInformation: any;
  userUpdated: any;
  userDeleted: any;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://192.168.0.124:3000/api/users';
    this.getData();
  }
  getData() {
    this.http.get(`${this.urlApi}/`)
    .subscribe(
      res => {
        this.information = res;
      },
      err => {
        console.error(err);
        this.information = [];
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
  editUser(id, data) {
    this.http.put(`${this.urlApi}/${id}`, data)
    .subscribe(
      res => {
        this.userUpdated = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  getOneUser(id) {
    this.userInformation = '';
    this.http.get(`${this.urlApi}/${id}`)
    .subscribe(
      res => {
        this.userInformation = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  deleteUser(id) {
    this.http.delete(`${this.urlApi}/${id}`)
    .subscribe(
      res => {
        this.userDeleted = res;
      },
      err => {
        console.error(err);
      }
    );
  }
}

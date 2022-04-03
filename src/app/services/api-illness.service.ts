import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiIllnessService {
  urlApi: string;
  information: any;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:3000/api/illness/';
    this.getData();
  }
  getData() { // Get the illnesses registered in the DB
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
  saveData(data: object) { // Save a new illness in the DB
    this.http.post(this.urlApi, data).subscribe(
      res => {
        this.getData();
      },
      err => {
        console.error(err);
      }
    );
  }
}

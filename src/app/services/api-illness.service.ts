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
  getData() {
    this.http.get(this.urlApi)
    .subscribe(
      res => {
        this.information = res;
        console.log(this.information);
      },
      err => {
        console.error(err);
      }
    );
  }
}

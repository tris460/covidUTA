import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  information: any;
  urlApi: string;

  constructor(private http: HttpClient) {
    this.information = '';
    this.urlApi = 'https://coronavirus.m.pipedream.net/';
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
}

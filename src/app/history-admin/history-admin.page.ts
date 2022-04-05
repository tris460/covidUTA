import { Component, OnInit } from '@angular/core';
import { ApiIllnessService } from '../services/api-illness.service';

@Component({
  selector: 'app-history-admin',
  templateUrl: './history-admin.page.html',
  styleUrls: ['./history-admin.page.scss'],
})
export class HistoryAdminPage implements OnInit {
  background: string;
  logo: string;
  illness: Array<any>;
  data: any;
  dateData: string;
  illnessData: string;
  symptomsData: Array<string>;
  statusData: string;
  notesData: string;

  constructor(public apiIllness: ApiIllnessService) {
    this.logo = '../../assets/logocovid.png';
    this.background = '../../assets/background1.jpeg';
    this.getIllnesses();
    this.notesData = '';
  }
  getIllnesses() { //Get the illnesses registered
    setTimeout(() => {
      this.illness = this.apiIllness.information;
    }, 50);
  }
  showData($event) {
    this.data = $event.target.value;
    const dataInformation = this.illness[this.data];
    this.dateData = dataInformation.strDate.slice(0,10);
    this.illnessData = dataInformation.strName;
    this.symptomsData = dataInformation.arrSymptoms;
    this.statusData = dataInformation.intStatus;
    this.notesData = dataInformation.strNotes;
  }
  ngOnInit() {
  }

}

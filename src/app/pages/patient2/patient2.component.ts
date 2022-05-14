import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient2',
  templateUrl: './patient2.component.html',
  styleUrls: ['./patient2.component.scss']
})
export class Patient2Component implements OnInit {

  constructor() { }

  selectedCity: string;
  selectedPlan: string;

  cities = [
    { name: 'Cairo'},
    { name: 'Alexandria'},
    { name: 'Gizah'},
    { name: 'Shubra El-Kheima'},
    { name: 'Port Said'},
    { name: 'Suez'},
    { name: 'Luxor'},
    { name: 'al-Mansura'},
    { name: 'El-Mahalla El-Kubra'},
    { name: 'Tanta'},
    { name: 'Asyut'},
    { name: 'Ismailia'},
    { name: 'Fayyum'},
    { name: 'Zagazig'},
    { name: 'Aswan'},
    { name: 'Damietta'},
    { name: 'Damanhur'},
    { name: 'Al-Minya'},
    { name: 'Beni Suef'},
    { name: 'Qena'},
    { name: 'Sohag'},
    { name: 'Hurghada'},
    { name: '6th of October City'},
    { name: 'Shibin El Kom'},
    { name: 'Banha'},
    { name: 'Kafr el-Sheikh'},
    { name: 'Arish', },
    { name: 'Mallawi'},
    { name: '10th of Ramadan City'},
    { name: 'Bilbais'},
    { name: 'Marsa Matruh'},
    { name: 'Idfu'},
    { name: 'Mit Ghamr'},
    { name: 'Al-Hamidiyya'},
    { name: 'Desouk'},
    { name: 'Qalyub'},
    { name: 'Abu Kabir'},
    { name: 'Kafr el-Dawwar'},
    { name: 'Girga'},
    { name: 'Akhmim'},
    { name: 'Matareya'},
  ];

  plans = [
    { name: 'Inpatient'},
    { name: 'Golden'},
    { name: 'Golden Plus'},    
    { name: 'None'},    
  ];

  ngOnInit(): void {
  }

}

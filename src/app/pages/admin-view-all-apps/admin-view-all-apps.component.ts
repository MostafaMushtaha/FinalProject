import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view-all-apps',
  templateUrl: './admin-view-all-apps.component.html',
  styleUrls: ['./admin-view-all-apps.component.scss']
})
export class AdminViewAllAppsComponent implements OnInit {

  constructor() { }

  userProf = 'Dr.'
  userName = 'testName'
  vistedPatient = 'testPatName'
  appDate = 'testDate'
  appTime = 'testTime'
  // appCount : count[] = [1,2,3];

  ngOnInit(): void {
  }

}

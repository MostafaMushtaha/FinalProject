import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-sign-up-one',
  templateUrl: './doctor-sign-up-one.component.html',
  styleUrls: ['./doctor-sign-up-one.component.scss']
})
export class DoctorSignUpOneComponent implements OnInit {

  dates: Date[];
  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  date1: Date;
  invalidDates: Array<Date>

  value: string;

  city: string;

  constructor() { }
  drSpecialty = [
    { name: 'Inpatient' },
    { name: 'Golden' },
    { name: 'Golden Plus' },
    { name: 'None' },
  ];
  ngOnInit(): void {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

}

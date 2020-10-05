import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
@Component({
  selector: 'scheme-date-time-dialog',
  templateUrl: './date-time-dialog.component.html',
  styleUrls: ['./date-time-dialog.component.css']
})
export class DateTimeDialogComponent implements OnInit {
  time={hour:0, minute: 0}
  date:Date;
  moment_:any;
  constructor(
    public dialogRef: MatDialogRef<DateTimeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Date
  ) { 
    window['dtd']= this;
    this.moment_ = moment;
  }

  ngOnInit(): void {
    this.date = this.data;
    this.momentFromDate();
    this.time= this.timePickerTime;
  }

  // onCloseClick(): void {
  //   this.dialogRef.close();
  // }

  momentFromDate(){
    this.moment_ = moment(this.date);
  }

  get dateString():string
  {
    this.momentFromDate();
    return this.moment_.format('h:mm A, Do MMMM  YYYY') + '';
  }

  get calander(): string{
    this.momentFromDate();
    return this.moment_.calendar()+ '';
  }

  get timePickerTime(){
    return {hour:this.date.getHours(), minute: this.date.getMinutes()};
  }

}



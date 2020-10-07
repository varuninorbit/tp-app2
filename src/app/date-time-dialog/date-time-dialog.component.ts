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
  calander:Date;
  moment_:any;
  constructor(
    public dialogRef: MatDialogRef<DateTimeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title:string, calander:boolean, timer:boolean,date:Date}
  ) { 
    window['dtd']= this;
    this.moment_ = moment;
  }

  ngOnInit(): void {
    this.calander = this.copyDate(this.data.date);
    this.date = this.copyDate(this.data.date); // for moment and response data
    this.time = this.copyTime();
   // this.momentFromDate();    
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
    return this.moment_.format('dddd Do MMMM  YYYY') + '';
  } 

  onDateTimeChange(){
    //update date
    this.date = this.copyDate(this.calander);
    this.date.setHours(this.time.hour);
    this.date.setMinutes(this.time.minute);
  }

  private copyDate(date:Date){
    return new Date( date.toISOString() )
  }
  private copyTime(){
    return {hour:this.data.date.getHours(), minute: this.data.date.getMinutes()};
  }

}



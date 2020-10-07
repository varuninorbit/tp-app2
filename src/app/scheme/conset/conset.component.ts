import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateTimeDialogComponent } from 'src/app/date-time-dialog/date-time-dialog.component';

//date means date and time
//calander means date without time
//time means hours and minutes ignoring second
@Component({
  selector: 'scheme-conset',
  templateUrl: './conset.component.html',
  styleUrls: ['./conset.component.css']
})
export class ConsetComponent implements OnInit {

  // time = {hour: 10, minute: 0};
  // timeDuration = {hour: 1, minute: 0};
  // resultTime = {hour:0, minute: 0};
  testDate:Date;
  resultDate:Date;
  resultInstantCheck_q=true;
  duration:Date; 

  constructor(public dialog: MatDialog) {
    window['conset'] = this;    
    this.duration = this.setDuration()
   }

  ngOnInit(): void {
  }

  getResultDate(){
    if(this.resultInstantCheck_q) return;
    const dialogRef = this.dialog.open(DateTimeDialogComponent,{
      width: '250px',
      panelClass:'date-time-dialog-class',
      data: {
        title:'Result Date',
        calander:true,
        timer:true,
        date:this.afterTwoDaysIn10AM()
      }
    })

    dialogRef.afterClosed().subscribe(r => {
      if(r!= undefined) this.resultDate= r;
      else this.resultInstantCheck_q = true;
    });
  }

  getTestDate(){
    const dialogRef = this.dialog.open(DateTimeDialogComponent,{
      width: '250px',
      panelClass:'date-time-dialog-class',
      data:{
        title:'Test Date',
        calander:true,
        timer:true,
        date:this.oneHourFromNow()
      }
    })

    dialogRef.afterClosed().subscribe(r => {
      this.testDate= r;
    });
  }

  private afterTwoDaysIn10AM(): Date{
    //default time is after two days in 10 AM morning.
    let date = new Date();
    date.setHours(date.getHours() + 24*3);
    date.setHours(10);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
  }

  private oneHourFromNow(): Date{
    let today = new Date();
    today.setHours(today.getHours() + 1);
    return today;
  }

  getDuration(){
    const dialogRef = this.dialog.open(DateTimeDialogComponent,{
      width: '250px',
      panelClass:'date-time-dialog-class',
      data: {
        title:'Test Duration',
        timer:true,
        calander:false,
        date:this.oneHourFromNow()
      }
    })

    dialogRef.afterClosed().subscribe(r => {
      this.testDate= r;
    });
  }

  setDuration(): Date{
    let duration = new Date();
    duration.setHours(1);
     duration.setMinutes(0);
     return duration;
  }

  getValue($event){
    let d= new Date('1-1-20')
    let minutes = $event;
    d.setMinutes(minutes);
    this.duration = d;    
  }

}

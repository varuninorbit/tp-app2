import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateTimeDialogComponent } from 'src/app/date-time-dialog/date-time-dialog.component';
import { DateTime } from 'src/app/types/i-date-time';

@Component({
  selector: 'scheme-conset',
  templateUrl: './conset.component.html',
  styleUrls: ['./conset.component.css']
})
export class ConsetComponent implements OnInit {

  time = {hour: 10, minute: 0};
  timeDuration = {hour: 1, minute: 0};
  resultTime = {hour:0, minute: 0};
  resultInstantCheck_q=true;

  constructor(public dialog: MatDialog) {
    window['conset'] = this;
   }

  ngOnInit(): void {
  }

  openDateTimeDialog(){
    if(this.resultInstantCheck_q) return;
    const dialogRef = this.dialog.open(DateTimeDialogComponent,{
      width: '250px',
      panelClass:'date-time-dialog-class',
      data: this.resultDeclarationDateTime()
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  private resultDeclarationDateTime(): Date{
    //default time is after two days in 10 AM morning.
    let d = new Date();
    d.setDate(d.getDate()+2);   let time = { hour: 10, minute: 0}; 
    d.setHours(10);
    d.setMinutes(0);   
    console.log(d);
    return d;
  }

}

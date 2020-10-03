import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateTimeDialogComponent } from 'src/app/date-time-dialog/date-time-dialog.component';
@Component({
  selector: 'app-shrim',
  templateUrl: './shrim.component.html',
  styleUrls: ['./shrim.component.css']
})
export class ShrimComponent implements OnInit {  
  
  pinChecked=true;

  constructor(public dialog: MatDialog) { 
    window['shrim'] = this;
  }

  ngOnInit(): void {
  }

  openDateTimeDialog(){
    const dialogRef = this.dialog.open(DateTimeDialogComponent,{
      width: '250px',
      panelClass:'date-time-dialog-class',
      data: {}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}

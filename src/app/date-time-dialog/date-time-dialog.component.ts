import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../confirm-dialog.component';

@Component({
  selector: 'scheme-date-time-dialog',
  templateUrl: './date-time-dialog.component.html',
  styleUrls: ['./date-time-dialog.component.css']
})
export class DateTimeDialogComponent implements OnInit {
  time={hour:0, minute: 0}

  constructor(
    public dialogRef: MatDialogRef<DateTimeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArrayTableService } from '../array-table.service';
import { DatrixDialogComponent } from '../datrix-dialog/datrix-dialog.component';

@Component({
  selector: 'app-custme',
  templateUrl: './custme.component.html',
  styleUrls: ['./custme.component.css']
})
export class CustmeComponent implements OnInit {

  constructor(private ah: ArrayTableService, private datrixDialog: MatDialog) {
    window['custme'] = this;
  }

  ngOnInit(): void {
  }

  add() {
    let csv = confirm('Type separated by comma');

  }

  openDatrixDialog(): void {
    const dialogRef = this.datrixDialog.open(DatrixDialogComponent);    
  }

}

/*
Q What data marix will be called ?
A Datrix.

Q What is frequency matrix called ?
A Frix.
*/

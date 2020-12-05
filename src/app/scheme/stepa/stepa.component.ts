import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListItemDialogComponent } from 'src/app/list-item-dialog/list-item-dialog.component';

@Component({
  selector: 'app-stepa',
  templateUrl: './stepa.component.html',
  styleUrls: ['./stepa.component.css']
})
export class StepaComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openInstructionsDialog(){
    const dialogRef = this.dialog.open(ListItemDialogComponent, {
      width: '250px',
      data: {instructions:[
        'one', 'two', 'three', 'four', 'five', 'six'
      ],
      label: 'Put instructions here',
      title: 'Instructions'
    }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog result ->',result);
    });
  }

}

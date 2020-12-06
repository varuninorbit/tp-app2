import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListItemDialogComponent } from 'src/app/list-item-dialog/list-item-dialog.component';
import { InstructionsStateService } from './instructions-state.service';

@Component({
  selector: 'scheme-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  
  st= {instructions:[]};  
 

  constructor(private sm:InstructionsStateService, 
    private dialog: MatDialog) { 
    this.st =this.sm.state;
    window['instruction']= this;
  }

  ngOnInit(): void {
  }

  openInstructionsDialog(){
    const dialogRef = this.dialog.open(ListItemDialogComponent, {
      width: '250px',
      data: {instructions:this.st.instructions,
      label: 'Put instructions here',
      title: 'Instructions'
    }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.st.instructions = result;
      }
    });
  }



}

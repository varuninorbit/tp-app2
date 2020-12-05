import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-list-item-dialog',
  templateUrl: './list-item-dialog.component.html',
  styleUrls: ['./list-item-dialog.component.css']
})
export class ListItemDialogComponent implements OnInit {
  st:St
  

  constructor(public dialogRef: MatDialogRef<ListItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: St) {
      window['listDiag']= this;
      this.st = data;
     }

  ngOnInit(): void {
  }

  onCrossClick(): void {
    this.dialogRef.close();
  }

  add(instruction){
    if(instruction.value==''){ 
      return ;
    }
    this.st.instructions.push(instruction.value);
    instruction.value = '';
  }

  remove(i:number){
    this.st.instructions.splice(i,1);
  }
}

interface St{
  instructions: string[];
  label:string;
  title:string;
}

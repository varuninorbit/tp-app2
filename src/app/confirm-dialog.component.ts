import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalService } from './_services';

@Component({
  //selector: 'app-confirm-dialog',
  template: `<div>
  <h1>{{dialog.title}}</h1>
  <p>{{dialog.message}}</p>
  <a (click)="clickBtn(dialog.btn1)" mat-raised-button color="{{dialog.btn1.color}}">{{dialog.btn1.name}}</a>
  <button *ngIf="dialog.btn2" (click)="clickBtn(dialog.btn2)" mat-button color="{{dialog.btn2.color}}">{{dialog.btn2.name}}  
  </button>
  <button *ngIf="dialog.btn3" (click)="clickBtn(dialog.btn3)" mat-button color="{{dialog.btn3.color}}">{{dialog.btn3.name}}</button>
</div>`,
})
export class ConfirmDialog {
  defaultDialogData:DialogData;
  dialog:DialogData;

  constructor(
    private gs: GlobalService,
    public dialogRef: MatDialogRef<ConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
         this.defaultDialogData = {    
         title: 'Title',
         message: 'message',
         btn1:{name: 'yes', value: 'true' },
         btn2:{name: 'no', value: 'false' },
         btn3:{name: 'cancel', value: 'cancel' }
     };

     this.dialog = gs.newOrDefaultValue(data,this.defaultDialogData,'');
  }

  ngOnInit(){
    this.dialog.title = this.data.title 
  }

  
  clickBtn(btn): void {
    this.dialogRef.close(btn.value || btn.name);
  }

}


export interface DialogData {
    title:string;
    message?:string;
    btn1?:{name:string,value?:string,color?:string};
    btn2?:{name:string,value?:string,color?:string};
    btn3?:{name:string,value?:string,color?:string};
}
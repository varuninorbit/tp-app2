import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { store } from 'src/app/_services/store.service.js';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-error-report',
  templateUrl: './error-report.component.html',
  styleUrls: ['./error-report.component.css']
})
export class ErrorReportComponent implements OnInit {
  chapterChecked_q=false;
  categoryChecked_q=false;
  marksChecked_q=false;
  otherChecked_q=false;

  categories: {id:number; name:string}[];
  chapters:{id:number; chapter:string}[];  
  form={chapter:null,category:null,marks:null,other:null}; 
  
  @Input() questionID:number;
  
  constructor(private ac:ActionService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ErrorReportComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData
    ) {    
    window['error']=this;
    window['store']=store;
  }

  ngOnInit(): void {
    this.ac.get('ErrorReport')('loadFields')().subscribe(r=>{
      this.categories=r.categories;
      this.chapters=r.chapters;
    })    
  }

  submitForm(){
    this.dialogRef.close();
    let data = {
      'questionID':this.dialogData.question.id,
      'errorData':this.form
      }
      this.ac.post('ErrorReport',true)('save')(data).subscribe()
  } 
}

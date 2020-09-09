import { Component, OnInit, Input } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { store } from 'src/app/_services/store.service.js';
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
  
  constructor(private ac:ActionService) { 
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
    let data = {
      'questionID':this.questionID,
      'errorData':this.form
      }
      this.ac.post('ErrorReport',true)('save')(data).subscribe()
  }

}

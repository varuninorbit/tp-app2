import { Component, OnInit } from '@angular/core';
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
  
  constructor(private ac:ActionService) { 
    window['error']=this;
    window['store']=store;
  }

  ngOnInit(): void {
    this.ac.get('ErrorReport')('loadFields')('exam_choice=8th_mat_cb_en').subscribe(r=>{
      this.categories=r.categories;
      this.chapters=r.chapters;
    })    
  }

}

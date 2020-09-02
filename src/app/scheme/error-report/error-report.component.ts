import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';

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
  
  constructor(private ac:ActionService) { 
    window['error']=this;
  }

  ngOnInit(): void {
    this.ac.get('ErrorReport')('loadFields')('exam_choice=8th_mat_cb_en').subscribe(r=>{
      this.categories=r.categories;
      this.chapters=r.chapters;
    })    
  }

}

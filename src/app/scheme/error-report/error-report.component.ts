import { Component, OnInit } from '@angular/core';

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
  constructor() { 
    window['error']=this;
  }

  ngOnInit(): void {
  }

}

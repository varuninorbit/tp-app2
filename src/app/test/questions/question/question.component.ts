import { Component, OnInit, Input, ViewChild,NgZone } from '@angular/core';
import { IQuestion } from 'src/app/types/i-question';
import {DomSanitizer } from '@angular/platform-browser';
import { MathJaxDirective } from 'ngx-mathjax';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @ViewChild(MathJaxDirective,{static:false}) mathjax: MathJaxDirective; 
  @Input() question: IQuestion;
  constructor(private sanitizer: DomSanitizer, private zone: NgZone) { }

  ngOnInit() {
    //console.log('question component instance', this)
   }

  jp(str:string){ //json parse
    return JSON.parse(str);
  }

  _(str:string){
    return this.sanitizer.bypassSecurityTrustHtml(str);
  }

}

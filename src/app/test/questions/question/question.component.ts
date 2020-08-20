import { Component, OnInit, Input, ViewChild,NgZone } from '@angular/core';
import { IQuestion } from 'src/app/types/i-question';
import {DomSanitizer } from '@angular/platform-browser';
import { MathJaxDirective } from 'ngx-mathjax';


class QobjModification { //todo it should extend AQobjModification class
  correction(qobj: IQuestion) {
    qobj.question =  this.correction1(qobj.question);
    qobj.answer =  this.correction1(qobj.answer);
    return qobj;
  }

  private correction1=(string:string) =>{
    return typeof string === "string"
      ? string
          .replace(/[\r\n]/g, " ")
          .replace(/&quot;/g, "'") //remove new line characters ->image correction
          .replace(/\$\\x/, "$\\\\x") //escapes latex rightarrow type code for hex
      : string;
  }
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @ViewChild(MathJaxDirective,{static:false}) mathjaxd: MathJaxDirective; 
  private qobjModification = new QobjModification();

  
  @Input() question: IQuestion;
  question_question:any;
  question_answer:any;

  constructor(private sanitizer: DomSanitizer, private zone: NgZone) {
    
   }

  ngOnInit() {
    //console.log('question component instance', this)
    this.question = this.qobjModification.correction(this.question);
    this.question_question= this.jp(this.question.question);
    this.question_answer = this.jp( this.question.answer);
   }

  jp(str:string){ //json parse
    return JSON.parse(str);
  }

  _(str:string){
    //return this.sanitizer.bypassSecurityTrustHtml(str);
    return str;
  }

}

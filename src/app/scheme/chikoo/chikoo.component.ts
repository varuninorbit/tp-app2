import { Component, OnInit, ViewChild, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { StateService } from 'src/app/state.service';
import { IQuestionsList } from 'src/app/types/i-questions-list';
import { MathJaxDirective } from 'ngx-mathjax';

@Component({
  selector: 'app-chikoo',
  templateUrl: './chikoo.component.html',
  styleUrls: ['./chikoo.component.css']
})
export class ChikooComponent implements OnInit, AfterContentChecked ,AfterContentInit{
  questionsList:IQuestionsList;
  showBud:boolean[];

  @ViewChild(MathJaxDirective,{static:false}) mathjaxd: MathJaxDirective; 

  constructor(private ac:ActionService, private state: StateService
    ) { 
    window['chikoo']=this;
    this.getQuestionsFromServer();
    this.showBud=[];    
  }

  ngOnInit(): void {
  }

  changeQuestion(index){
    alert('question changing...' + index);
  }

  getQuestionsFromServer(){
    let arrayTable = this.state.state.arrayTable;
    this.ac.post('ASchema',true,'?exam_choice=8th_mat_cb_en&XDEBUG_SESSION_START')
    ('loadQuestions')({scheme:arrayTable}).subscribe(questionsList=>{
      this.questionsList = questionsList;
    })  
  }

  reloadQuestions(){
    this.getQuestionsFromServer();
  }

  isBudHidden(i:number){
    //showBud[i] = false
    return (!this.showBud[i])
    ?true
    :false;
  }

  ngAfterContentChecked(){
    //window['jQuery'].event.trigger('mathjax-typeset');
  }
  
  ngAfterContentInit(){
    
  }
}

import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { StateService } from 'src/app/state.service';
import { IQuestionsList } from 'src/app/types/i-questions-list';

@Component({
  selector: 'app-chikoo',
  templateUrl: './chikoo.component.html',
  styleUrls: ['./chikoo.component.css']
})
export class ChikooComponent implements OnInit {
  questionsList:IQuestionsList;

  constructor(private ac:ActionService, private state: StateService
    ) { 
    window['chikoo']=this;
    this.getQuestionsFromServer();    
  }

  ngOnInit(): void {
  }

  changeQuestion(){
    alert('question changing...');
  }

  getQuestionsFromServer(){
    let arrayTable = this.state.state.arrayTable;
    this.ac.post('ASchema',true,'?exam_choice=9th_sci_cb_en&XDEBUG_SESSION_START')
    ('loadQuestions')({scheme:arrayTable}).subscribe(questionsList=>{
      this.questionsList = questionsList;
    })  
  }

  reloadQuestions(){
    this.getQuestionsFromServer();
  }
}

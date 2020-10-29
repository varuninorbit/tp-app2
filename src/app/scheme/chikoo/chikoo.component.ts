import { Component, OnInit, ViewChild, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { StateService } from 'src/app/state.service';
import { IQuestionsList } from 'src/app/types/i-questions-list';
import { LiteralService } from 'src/app/_services/literal.service';
import { SchemeCreateService } from '../scheme-create.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorReportComponent } from '../error-report/error-report.component';
import { ExamChoiceAttributesService } from 'src/app/exam-choice/exam-choice-add/exam-choice-attributes.service';
import { GlobalService } from 'src/app/_services';

@Component({
  selector: 'app-chikoo',
  templateUrl: './chikoo.component.html',
  styleUrls: ['./chikoo.component.css']
})
export class ChikooComponent implements OnInit, AfterContentChecked ,AfterContentInit{
  questionsList:IQuestionsList[];
  showBud:boolean[]; 
  edit:number;
  
  showErrorComponent_q=false;
  errorQuestionID:number;
  st ={chapters:[], categories:[], questionsList:[]};

  constructor(private ac:ActionService, private state: StateService,
    private li:LiteralService,
    private sc:SchemeCreateService,
    private dialog: MatDialog,
    private attrib: ExamChoiceAttributesService,
    private gs: GlobalService
    ) { 
    window['chikoo']=this;
    //this.getQuestionsFromServer();
    this.loadState();
    this.showBud=[];    
    this.edit=-1;
  }

  ngOnInit(): void {
   //this.getAttribs();
  }

  changeQuestion(question,i){
    let notIn = this.st.questionsList.map(i=>i.id);

    let scheme = this.sc.friendSchemeForSingleQuestion(question,this.state.state.arrayTable);
    this.ac.post('AQuestion')
    ('singleFriendQuestion')(scheme,notIn)
    .subscribe(r=>{
      if(this.st.questionsList[i].id != r[0][0].id){
        
        //use original value of block
        let blk = this.st.questionsList[i].blk;
        r[0][0].blk = blk;

        this.st.questionsList[i] = r[0][0];
      }
    })
  }

  getQuestionsFromServer(){
    let arrayTable = this.state.state.arrayTable;
    this.ac.post('ASchema',true)
    ('loadQuestions')({scheme:arrayTable}).subscribe(questionsList=>{
      this.st.questionsList = questionsList;
    })  
  }

  loadState(){
    this.st = this.gs.store()['chikoo'];
  }

  saveState(){
    this.gs.store()['chikoo']= this.st;
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

  _(str){
    return this.li.resolve(this)(str);
  }
  toggleEdit(i){
    if(this.edit==i){
      this.edit=-1;
    }else{
      this.edit=i;
    }
  }

  openErrorDialog(question){
    const dialogRef = this.dialog.open(ErrorReportComponent,{
      data:{
        question:question
      }
    });
  }

  getAttribs(){
    this.attrib.observable.subscribe(({chapters,categories})=>{
      this.st.chapters= chapters;
      this.st.categories= categories;
    })
  }

  getChapter(id){
    let chapter =  this.st.chapters[id-1];
    return chapter.chapter;
  }

  getCategory(id){
    return this.st.categories[id-1].name
  }

}

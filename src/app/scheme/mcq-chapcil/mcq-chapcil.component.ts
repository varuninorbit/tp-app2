/*
TODO
1. Keep last no of questions in memory
2. Sort chaptersbag array according to id
3. Load chapters from AC
4. Save state so it can be retrieved when pressed back button
*/
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { IScheme } from 'src/app/types/i-scheme';
import { StateService } from 'src/app/state.service';
import { ArrayTableService } from '../array-table.service';
import * as _ from 'underscore';
import { NotifierService } from 'angular-notifier';
import { GlobalService } from 'src/app/_services';
import { McqChapcilStateService } from '../chapcil/mcq-chapcil-state.service';



@Component({
  selector: 'scheme-mcq-chapcil',
  templateUrl: './mcq-chapcil.component.html',
  styleUrls: ['./mcq-chapcil.component.css'],
  providers: [McqChapcilStateService]
})
export class McqChapcilComponent implements OnInit, OnDestroy {

  @ViewChild('chapterNmarks') chapterNmarksElemRef: ElementRef;
  private AScheme;

  st={
    chaptersBag:[],
    chaptersTray: [],
    questionsNo:[]
  }; 
  
  //set initially to 
  constructor(private ac: ActionService,
    private stateService: StateService,
    private arrayTableHelper: ArrayTableService,
    private notifier: NotifierService,
    private gs: GlobalService, 
    private stateManager: McqChapcilStateService
  ) {
    this.AScheme = ac.get('ASchema');
    console.log(window['chapcil'] = this);
    this.stateManager.setStateObject(this.st);
    this.loadChapters();
  }

  ngOnInit(): void {
  }
 

  bagToTray(selectedChapterElem){
    let chapterID = selectedChapterElem.value;
    let chapterIndex = this.st.chaptersBag.findIndex(chapter=>chapter.id==chapterID);
    this.st.chaptersTray.push(this.st.chaptersBag.splice(chapterIndex,1)[0]);
    this.updateQuestionsNoToState();
  }

  trayToBag(chapterID) {
    let chapterIndex = this.st.chaptersTray.findIndex(chapter=>chapter.id==chapterID);
    this.st.chaptersBag.push(this.st.chaptersTray.splice(chapterIndex,1)[0]);
    this.updateQuestionsNoToState();
  }

  private getQuesionsNoArray(){
    let inputs = document.querySelectorAll('#noTable > tr > td > input')
    let vals =[];
    inputs.forEach((i)=>{vals.push(i['value'])})
    return vals;
  }

  private getChapterTrayIDArray(){
    return this.st.chaptersTray.map(i=>i.id);
  }

  getArrayTable(){
    let toIntArr = this.arrayTableHelper.stringArrayTointArray;
    let chapters = toIntArr(this.getChapterTrayIDArray());
    let nos = toIntArr(this.getQuesionsNoArray());
    let fixedVal = Array(chapters.length).fill(1);
    return [
      ["chapter_id", "category_id", "marks", "no"] ,
      this.gs._.zip(chapters, fixedVal, fixedVal, nos)    
    ];
  }

  ngOnDestroy(): void {    
    this.stateService.state.arrayTable = this.getArrayTable()
    this.stateManager.state = this.st;
  }

  loadChapters(){
    this.stateManager.init();
  }

  questionsNoChanged(){
    this.updateQuestionsNoToState();
  }

  updateQuestionsNoToState(){
    setTimeout(() => {
      this.st.questionsNo = this.getQuesionsNoArray();
    })
  } 
 
}

interface Chapter{
  chapter: string;
  id: string;
}


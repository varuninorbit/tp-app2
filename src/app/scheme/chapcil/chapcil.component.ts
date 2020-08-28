import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { IScheme } from 'src/app/types/i-scheme';
import { IChapter } from 'src/app/types/i-exam-choice';
import { StateService } from 'src/app/state.service';
import { ArrayTableService } from '../array-table.service';
import * as _ from 'underscore';
import { NotifierService } from 'angular-notifier';



@Component({
  selector: 'app-chapcil',
  templateUrl: './chapcil.component.html',
  styleUrls: ['./chapcil.component.css']
})
export class ChapcilComponent implements OnInit {

  private AScheme;
  scheme: IScheme;
  chapters: IChapter[];

  chaptersCountArray=[];
  //selectedOptions=[null,1,2,3,4];

  selectedChaptersID=[];
  //set initially to 
  constructor(private ac: ActionService,
    private stateService: StateService,
    private arrayTableHelper: ArrayTableService,
    private notifier: NotifierService
  ) {
    this.AScheme = ac.get('ASchema');
    console.log(window['chapcil'] = this);    
  }

  ngOnInit(): void {
    let schemeID = this.stateService.state.currentScheme.id;
    //load chapters and scheme 
    this.AScheme('schter')(schemeID, 'exam_choice=8th_mat_cb_en').subscribe(({ scheme, chapters }) => {
      this.chapters = chapters;
      this.scheme = scheme;
      this.updateState() ;
      this.chaptersCountArray_();
      this.selectedChaptersID = this.getSelectedChaptersFromArrayTable();
    })

    //set selected chapter from stored state
    //this.selectedChapters = this.stateService.state.selectedChapters;
    //this.autoSelectCheckboxFromStoredArrayTable();

   
  }

  updateState(){
    this.stateService.updateState(state=>{
      state.arrayTable = this.arrayTableHelper.arrayTable(this.scheme.table)
      state.chapters = this.chapters;
      state.currentScheme = this.scheme;
      return state;
    });
  }


  isDisabled(index:(number)){
    //index = index + ''; //no to string cast
    return (this.selectedChaptersID.indexOf(index)!=-1)?true:false;
  }

  chaptersCount(){
    // changes state of this.selectedChaptersID
    return this.getSelectedChaptersFromArrayTable().length
  }

  chaptersCountArray_(){
    return  this.chaptersCountArray = [...Array(this.chaptersCount()).keys()];
  }

  getSelectedChaptersFromArrayTable(){
    return  _.unique(this.arrayTableHelper.chapterIDColfrom(this.stateService.state.arrayTable))
  }

  calculateMappingArray(){
    let newArray = this.selectedChaptersID; //.map(i=>parseInt(i));
    let oldArray = this.getSelectedChaptersFromArrayTable();
    return [oldArray,newArray];
  }

  change(){
    //showNotification( 'success', 'Notification successfully opened.' )
    //this.notifier.notify('success','Test message');
    //convert selectedChaptersID: string[] to number[]
    this.selectedChaptersID = this.selectedChaptersID.map(i=>parseInt(i));
  }

  
}


/*
todo
1 import componet into the routes
    .1 route => /chapsil
    .2

2 fake data in component
*/
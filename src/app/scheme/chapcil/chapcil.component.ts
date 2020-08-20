import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { IScheme } from 'src/app/types/i-scheme';
import { IChapter } from 'src/app/types/i-exam-choice';
import { StateService } from 'src/app/state.service';
import { ArrayTableService } from '../array-table.service';

@Component({
  selector: 'app-chapcil',
  templateUrl: './chapcil.component.html',
  styleUrls: ['./chapcil.component.css']
})
export class ChapcilComponent implements OnInit {

  private AScheme;
  scheme: IScheme;
  chapters: IChapter[];
  selectedChapters: any[];
  //checkboxArray type
  //[empty x 5 , true , empty x 2, true ]

  selecredChaptersID: number[];
  //[3,4,5] 3rd chapter 4th and 5th

  constructor(private ac: ActionService,
    private stateService: StateService,
    private arrayTable: ArrayTableService
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
      this.updateArrayTableAfterXHR() ;
    })

    //set selected chapter from stored state
    //this.selectedChapters = this.stateService.state.selectedChapters;
    this.autoSelectCheckboxFromStoredArrayTable();
  }


  update() {
    // this.stateService.updateState((state)=>{
    //   state.selectedChapters=this.selectedChapters;      
    //   return state;
    // });
    this.updateArrayTableFromSelectedCheckbox();
  }

  checkDisabled(indexOfChapter) {
    let arrayHelper = this.arrayTable;
    let arrayTable = this.stateService.state.arrayTable;

    let chaptersCount = arrayTable[1].length;
    let selectedChaptersIDArray = arrayHelper.chapterIDColfrom(arrayTable);
    let selectedChaptersCount = selectedChaptersIDArray.length;

    // if less chapters are selected than permissible don't disable
    if (selectedChaptersCount < chaptersCount) return false;

    let idExists = (selectedChaptersIDArray.indexOf(indexOfChapter + 1) != -1); // index starts from 0 
    return (!idExists); // don't disable
  }

  updateArrayTableFromSelectedCheckbox() {
    let at = this.stateService.state.arrayTable;
    let ciCol = this.arrayTable.iDArray(this.selectedChapters)

    //this line updates silently, without emiting observable
    this.arrayTable.replaceChapterColInArrayTable(ciCol, at)
  }

  autoSelectCheckboxFromStoredArrayTable() {
    let at = this.stateService.state.arrayTable;
    let atHelper = this.arrayTable;
    let chapterIDCol = atHelper.chapterIDColfrom(at);
    let checkboxArray = atHelper.checkboxArray(chapterIDCol, 100); //for 100 chapters; todo: change to chapters length
    this.selectedChapters = checkboxArray;
  }

  displayPopUp(i: number) {
    let arrayHelper = this.arrayTable;
    let arrayTable = this.stateService.state.arrayTable;
    let selectedChaptersIDArray = arrayHelper.chapterIDColfrom(arrayTable);
    let selectedChaptersCount = selectedChaptersIDArray.length;
    if (this.isChapterSelectionLimitFull() && this.checkDisabled(i)) {
      alert('You need to select (' + selectedChaptersCount + ') chapters only. \n Or choose some different scheme.')
    }
  }

  isChapterSelectionLimitFull(): boolean {
    let arrayHelper = this.arrayTable;
    let arrayTable = this.stateService.state.arrayTable;
    let chaptersCount = arrayTable[1].length;

    let selectedChaptersIDArray = arrayHelper.chapterIDColfrom(arrayTable);
    let selectedChaptersCount = selectedChaptersIDArray.length;
    return (selectedChaptersCount == chaptersCount) ? true : false;
  }

  updateArrayTableAfterXHR() {
    this.stateService.state.arrayTable = this.arrayTable.arrayTable(this.scheme.table)
  }

}
/*
todo
1 import componet into the routes
    .1 route => /chapsil
    .2

2 fake data in component
*/
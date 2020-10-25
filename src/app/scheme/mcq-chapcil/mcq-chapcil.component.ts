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



@Component({
  selector: 'scheme-mcq-chapcil',
  templateUrl: './mcq-chapcil.component.html',
  styleUrls: ['./mcq-chapcil.component.css']
})
export class McqChapcilComponent implements OnInit, OnDestroy {

  @ViewChild('chapterNmarks') chapterNmarksElemRef: ElementRef;
  private AScheme;

  chaptersBag:Chapter[]= [
    {
      "id": '1',
      "chapter": "Unit 1(Rational Numbers)"
    },
    {
      "id": '2',
      "chapter": "Unit 2(Data Handling)"
    },
    {
      "id": '3',
      "chapter": "Unit 3(Square-Square Root & Cube-Cube Root)"
    },
    {
      "id": '4',
      "chapter": "Unit 4(Linear Equation In One Variable)"
    },
    {
      "id": '5',
      "chapter": "Unit 5(Understanding Quadrilaterals & Practical Geometry)"
    },
    {
      "id": '6',
      "chapter": "Unit 6(Visualising The Solid Shapes)"
    },
    {
      "id": '7',
      "chapter": "Unit 7(Algebraic Expression, Identities & Factorisation)"
    },
    {
      "id": '8',
      "chapter": "Unit 8(Exponents & Powers)"
    },
    {
      "id": '9',
      "chapter": "Unit 9(Comparing Quantities)"
    },
    {
      "id": '10',
      "chapter": "Unit 10(Direct & Inverse Proportions)"
    },
    {
      "id": '11',
      "chapter": "Unit 11(Mensuration)"
    },
    {
      "id": '12',
      "chapter": "Unit 12(Introduction To Graphs)"
    },
    {
      "id": '13',
      "chapter": "Unit 13(Playing With Numbers)"
    }
  ];

  chaptersTray:Chapter[]=[];
  

  chaptersCountArray = [];
  //selectedOptions=[null,1,2,3,4];
  questionsNo:{
    chapterID:string,
    qno:number
  }[] =[];
  //set initially to 
  constructor(private ac: ActionService,
    private stateService: StateService,
    private arrayTableHelper: ArrayTableService,
    private notifier: NotifierService,
    private gs: GlobalService
  ) {
    this.AScheme = ac.get('ASchema');
    console.log(window['chapcil'] = this);
  }

  ngOnInit(): void {
  }
 

  bagToTray(selectedChapterElem){
    let chapterID = selectedChapterElem.value;
    let chapterIndex = this.chaptersBag.findIndex(chapter=>chapter.id==chapterID);
    this.chaptersTray.push(this.chaptersBag.splice(chapterIndex,1)[0]);
  }

  trayToBag(chapterID) {
    let chapterIndex = this.chaptersTray.findIndex(chapter=>chapter.id==chapterID);
    this.chaptersBag.push(this.chaptersTray.splice(chapterIndex,1)[0]);
  }

  private getQuesionsNoArray(){
    let inputs = document.querySelectorAll('#noTable > tr > td > input')
    let vals =[];
    inputs.forEach((i)=>{vals.push(i['value'])})
    return vals;
  }

  private getChapterTrayIDArray(){
    return this.chaptersTray.map(i=>i.id);
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
  }
 
}

interface Chapter{
  chapter: string;
  id: string;
}


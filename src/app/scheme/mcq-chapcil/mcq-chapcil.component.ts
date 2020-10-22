import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { IScheme } from 'src/app/types/i-scheme';
import { IChapter } from 'src/app/types/i-exam-choice';
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
export class McqChapcilComponent implements OnInit {

  private AScheme;
  scheme: IScheme= {
    "id": 8,
    "name": "JEE Three Chapters Test",
    "description": "Jee Single chapter containing 30 Mcq questions.",
    "table": [
      {
        "chapter_id": 1,
        "category_id": 1,
        "marks": 1,
        "no": 5
      }
    ]
  };
  chaptersBag:IChapter[]= [
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

  chaptersTray:IChapter[]=[];

  arrayTAble= [
    [
      "chapter_id",
      "category_id",
      "marks",
      "no"
    ],
    [
      [ 1, 1, 1, 5  ],
      [ 2, 1, 1, 5  ]
    ]
  ];
  

  chaptersCountArray = [];
  //selectedOptions=[null,1,2,3,4];

  selectedChaptersID = [1];
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

  isDisabled(chapterID:string):boolean{
    let chapterID_:number = parseInt(chapterID);
    if(this.selectedChaptersID.indexOf(chapterID_)>=0){
      return true;
    }else{
      return false;
    }    
  }
}


/*
todo
1 import componet into the routes
    .1 route => /chapsil
    .2

2 fake data in component
*/
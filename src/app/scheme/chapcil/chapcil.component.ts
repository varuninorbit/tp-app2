import { Component, OnInit} from '@angular/core';
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
  scheme:IScheme;
  chapters:IChapter[];
  selectedChapters:any=[];

  constructor(private ac:ActionService, 
    private stateService:StateService,
    private arrayTable: ArrayTableService
    ) { 
    this.AScheme = ac.get('ASchema');
    console.log(window['chapcil']=this);
  }

  ngOnInit(): void {
   this.AScheme('schter')(8,'exam_choice=9th_sci_cb_en').subscribe(({scheme,chapters})=>{
     this.chapters = chapters;
     this.scheme = scheme;
   })

   this.selectedChapters = this.stateService.state.selectedChapters;
  }


  update(){
    this.stateService.updateState((state)=>{
      state.selectedChapters=this.selectedChapters;
      state.currentScheme = this.scheme;
      return state;
    });
  }

}
/*
todo
1 import componet into the routes
    .1 route => /chapsil
    .2 

2 fake data in component
*/
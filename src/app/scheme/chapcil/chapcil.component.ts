import { Component, OnInit, NgZone } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { IScheme } from 'src/app/types/i-scheme';
import { IChapter } from 'src/app/types/i-exam-choice';
import { StateService } from 'src/app/state.service';

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

  constructor(private ac:ActionService, private zone: NgZone, 
    private stateService:StateService
    ) { 
    this.AScheme = ac.get('ASchema');
    console.log(window['chapcil']=this);
  }

  ngOnInit(): void {
   this.AScheme('schter')(8,'exam_choice=9th_sci_cb_en').subscribe(({scheme,chapters})=>{
     this.chapters = chapters;
     this.scheme = scheme;
   })

   let state = this.stateService.getState().getValue()
   this.selectedChapters = state.selectedChapters
  }

  update(){
    alert('updating chapters...');
    let state = {
      chapters:[
      ],
      selectedChapters:[]
    };

    state.selectedChapters = this.selectedChapters;

    this.stateService.setState(state);
  }

}
/*
todo
1 import componet into the routes
    .1 route => /chapsil
    .2 

2 fake data in component
*/
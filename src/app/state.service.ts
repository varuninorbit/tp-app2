import { Injectable } from '@angular/core';
import { IState } from './types/i-state';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  state_:IState;
  state$:BehaviorSubject<IState>

  constructor() { 
    //blanl state
    this.state_={
      chapters:[
      ],
      selectedChapters:[],
      currentScheme:{
        id:0,
        description:'',
        name:''
      },
      arrayTable:[
        [
          "chapter_id",
          "category_id",
          "marks",
          "no"
        ],
        [
          [
            3,
            1,
            0,
            3
          ],
          [
            7,
            1,
            1,
            6
          ],
          [
            4,
            1,
            0,
            5
          ]
        ]
      ],
      currentChoice:{
        "id": 0,
        "name": "",
        "db_prefix": ""
      }
    };

    this.state$ = new BehaviorSubject<IState> (this.state_);
    window['state']= this;
  }

  setState(state:IState): void{
    this.state$.next(state);
  }

  updateState(callback:(state:IState)=>IState){
    this.setState(callback(this.state));
  }

  get state():IState{
    let state =  this.state$.getValue();
    return state;
  }
}


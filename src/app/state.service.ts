import { Injectable } from '@angular/core';
import { IState } from './types/i-state';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state_:IState;
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
    return this.state$.getValue()
  }
}


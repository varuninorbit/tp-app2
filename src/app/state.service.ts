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
      selectedChapters:[]
    };

    this.state$ = new BehaviorSubject<IState> (this.state_);
    window['state']= this;
  }

  getState() :BehaviorSubject<IState>{
    return this.state$;
  }

  setState(state:IState): void{
    this.state$.next(state);
  }
}


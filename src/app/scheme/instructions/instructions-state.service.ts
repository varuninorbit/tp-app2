import { Injectable } from "@angular/core";
import { SubStateService } from 'src/app/sub-state.service';
import { Action2Service } from 'src/app/services/action2.service';
import { RootStateService } from 'src/app/root-state.service';
import { Subject} from 'rxjs';

const cacheBusterObserver$:Subject<number> = new Subject();

const defaultState = {instructions:[]};
 

@Injectable({
  providedIn: "root",
})

export class InstructionsStateService extends SubStateService {  

  constructor(
    private ac: Action2Service, 
    private rootStateService: RootStateService) {
      super();

      this.
      SetDefaultState(defaultState).
      SetStateName('instructions').
      Init()

    if (0) {
      this.LOAD_STATE
    }    
  }


  get LOAD_STATE() {   
    return this;
  }

  get cashBuster$(){
    return cacheBusterObserver$;
  }

  add(instruction){
    if(instruction==''){ 
      return ;
    }
    this.state.instructions.push(instruction);
    instruction = '';
  }

  remove(i:number){
    this.state.instructions.splice(i,1);
  }
}
/*******************************
 * State loader for McqComponent
gi * 
 * two types of assignment are possible in the component.
 * 
 * 1. 
 * this.st = this.stateManager.state;
 * 
 * 2.  
 * this.stateManager.state$.subscribe(state=>{
      this.st = state;
    });

    3. To emit state events
    we can use 
    this.stateManager.EMIT_STATE;    
 */
import { Injectable } from "@angular/core";
import { SubStateService } from 'src/app/sub-state.service';
import { Action2Service } from 'src/app/services/action2.service';
import { RootStateService } from 'src/app/root-state.service';
import { Cacheable } from 'ts-cacheable/dist/cjs/cacheable.decorator';
import { Subject} from 'rxjs';

const cacheBusterObserver$:Subject<number> = new Subject();

@Injectable({
  providedIn: "root",
})

export class BlankStateService extends SubStateService {
  
  public defaultState = {
   
  };

  constructor(private ac: Action2Service, private rootStateService: RootStateService) {
      super();

      this.   
      SetDefaultState(this.defaultState).
      SetStateName('chikoo').
      Init();

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
}
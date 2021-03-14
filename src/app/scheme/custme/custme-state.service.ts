import { Injectable } from "@angular/core";
import { SubStateService } from 'src/app/sub-state.service';
import { RootStateService } from 'src/app/root-state.service';
import { Cacheable } from 'ts-cacheable/dist/cjs/cacheable.decorator';
import { Subject} from 'rxjs';

const cacheBusterObserver$:Subject<number> = new Subject();

@Injectable({
  providedIn: "root",
})

export class CustmeStateService extends SubStateService {
  
  public defaultState = {
   arrayTable:[
    ["chapter_id","category_id","marks","no"],
    []
   ]
  };

  constructor(private rootStateService: RootStateService) {
      super();

      this.   
      SetDefaultState(this.defaultState).
      SetStateName('custme').
      Init();

    if (this.LOADING_CONDITION()) {
      this.LOAD_STATE
    }    
  }

  LOADING_CONDITION(){
      return true
  }


  get LOAD_STATE() {

    
    return this;
  }

  get cashBuster$(){
    return cacheBusterObserver$;
  }
}
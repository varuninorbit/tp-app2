import { Injectable } from "@angular/core";
import { SubStateService } from 'src/app/sub-state.service';
import { RootStateService } from 'src/app/root-state.service';
import { Cacheable } from 'ts-cacheable/dist/cjs/cacheable.decorator';
import { Subject} from 'rxjs';
import { Action2Service } from "src/app/services/action2.service";

const cacheBusterObserver$:Subject<number> = new Subject();

@Injectable({
  providedIn: "root",
})

export class CustmeStateService extends SubStateService {
  
  public defaultState = {
   arrayTable:[
    ["chapter_id","category_id","marks","no"],
    []
   ],
   valueSheet:[]
  };

  constructor(private rootStateService: RootStateService, private ac: Action2Service) {
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

  //TODO: Check that it can be pur for cache busting
  loadValueSheet(){
    this.ac.get({query:'exam_choice=9th_mat_cb_en'})('AExamChoice.valueSheet')()
    .subscribe(r=>{
      this.state.valueSheet = r;
    })
  }


  get LOAD_STATE() {
    this.loadValueSheet();
    
    return this;
  }

  get cashBuster$(){
    return cacheBusterObserver$;
  }
}
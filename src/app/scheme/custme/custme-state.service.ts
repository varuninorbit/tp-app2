import { Injectable } from "@angular/core";
import { SubStateService } from 'src/app/sub-state.service';
import { RootStateService } from 'src/app/root-state.service';
import { Cacheable } from 'ts-cacheable/dist/cjs/cacheable.decorator';
import { Subject } from 'rxjs';
import { Action2Service } from "src/app/services/action2.service";

const cacheBusterObserver$: Subject<number> = new Subject();

@Injectable({
  providedIn: "root",
})

export class CustmeStateService extends SubStateService {

  public defaultState = {
    arrayTable: [
      ["chapter_id", "category_id", "marks", "no"],
      []
    ],
    valueSheet: []
  };

  constructor(private rootStateService: RootStateService, private ac: Action2Service) {
    super();

    this.
      SetDefaultState(this.defaultState).
      SetStateName('custme').
      Init();
    this.LOAD_STATE

  }

  LOADING_CONDITION() {
    return (this.state.arrayTable[1].length === 0) ? true : false;
  }

  //TODO: Check that it can be pur for cache busting
  loadValueSheet() {
    let exam_choice = this.rootStateService.getSateOf('examChoice').currentChoice.db_prefix;
    if (exam_choice!='') {
      
      this.ac.get({ query: `exam_choice=${exam_choice}` })('AExamChoice.valueSheet')()
        .subscribe(r => {
          this.state.valueSheet = r;
        })
    }
  }


  get LOAD_STATE() {
    if (this.LOADING_CONDITION()) {
      this.loadValueSheet();
    }
    return this;
  }

  get cashBuster$() {
    return cacheBusterObserver$;
  }
}
/*******************************
 * State loader for Chikoo
 * 
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
import { Subject } from 'rxjs';
import { StateService } from 'src/app/state.service';
import { ActionService } from 'src/app/services/action.service';

const cacheBusterObserver$: Subject<number> = new Subject();

@Injectable({
  providedIn: "root",
})

export class ChikooStateService extends SubStateService {

  public defaultState = {

  };

  constructor(
    private ac: ActionService,
    private rootStateService: RootStateService,
    private globalState: StateService) {
    super()
    this.
      SetDefaultState(this.defaultState).
      SetStateName('chikoo').
      Init()

    if (this.loadingCondition_q()==true) {
      this
        .LOAD_STATE()
        .LOAD_QUESTIONS_FROM_SERVER()
    }
  }


  LOAD_STATE() {
    //initial code to load state    
    return this;
  }

  get cashBuster$() {
    return cacheBusterObserver$;
  }

  LOAD_QUESTIONS_FROM_SERVER() {
    let arrayTable = this.globalState.state.arrayTable;
    this.ac.post('ASchema', true)
      ('loadQuestions')({ scheme: arrayTable }).subscribe(questionsList => {
        this.state.questionsList = questionsList;
      })
    return this;
  }

  questionsExist_q() {
    if (this.state.questionsList != undefined) {
      return (parseInt(this.state.questionsList[0].id) > 0) ? true : false;
    }
    return false;
  }

  loadingCondition_q(){
    return (this.questionsExist_q()==false)
  }
}
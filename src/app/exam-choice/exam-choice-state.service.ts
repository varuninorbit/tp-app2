/*******************************
 * State loader for Exam Choice
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
import { StateService } from 'src/app/state.service';
import { ActionService } from '../services/action.service';
@Injectable({
  providedIn: "root",
})
export class ExamChoiceStateService extends SubStateService{
  public defaultState = {
    "currentChoice": {
      "id": 0,
      "name": "",
      "db_prefix": ""
    },
    "choices": [
      {
        "id": 0,
        "name": "",
        "db_prefix": ""
      }      
    ]
  };

  cacheBuster=1;

  constructor(
    private rootSateService: StateService, 
    private ac: ActionService)
  {
    super();
   super.
      SetDefaultState(this.defaultState).
      SetStateName('examChoiceState').
      Init();

    if(this.state.currentChoice.name==""){
      this.LOAD_STATE;
    }
  }


  get LOAD_STATE() {  
    this.userChoices().subscribe(({ choices, currentChoice }) => {    
        this.UpdateState(state=>{
            state.choices = choices;
            state.currentChoice = currentChoice;
            return state;
        })
      })
    return this;
  }

  userChoices(){
    return this.ac
    .get('AExamChoice')('choices')(String(this.cacheBuster));
  }

  get CACHE_BUSTING(){ 
    this.cacheBuster++;
    return this;
  }

}
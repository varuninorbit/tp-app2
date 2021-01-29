/*******************************
 * State loader for Exam Choice
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
import { ActionService } from '../services/action.service';
import { Cacheable } from 'ts-cacheable/dist/cjs/cacheable.decorator';
import { RootStateService } from '../root-state.service';
import { Subject } from 'rxjs';

const cacheBusterObserver$: Subject<any> = new Subject();
@Injectable({
  providedIn: "root",
})
export class ExamChoiceStateService extends SubStateService {
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

  state$: any;


  constructor(
    private ac: ActionService, private rootStateService: RootStateService) {
    super();
    this. //SetDefaultState(this.defaultState).
      SetStateName('examChoice').
      Init();

    if (this.state.currentChoice.name == "") {
      this.LOAD_STATE;
    }
  }


  get LOAD_STATE() {
    this.userChoices().subscribe(({ choices, currentChoice }) => {
      this.UpdateState(state => {
        state.choices = choices;
        state.currentChoice = currentChoice;
        return state;
      })
    })
    return this;
  }

  //TODO: Bug fix
  @Cacheable({
    cacheBusterObserver: cacheBusterObserver$.asObservable()
  })
  userChoices() {
    return this.ac.get('AExamChoice')('choices')();
  }


  makeCurrent(choice) {
    this.ac.get('AExamChoice')('updateCurrentChoice')(choice.id).subscribe((r) => {
      this.REMOVE_CHILDREN
      .LOAD_STATE
    });
  }

  delete(choice) {
    this.ac.get('AExamChoice')('deleteChoice')(choice.id).subscribe((r) => {
    });
  }

  addNewChoice(selectedChoice){
    this.ac.get('AExamChoice')('addChoiceToList')(selectedChoice[0].id).subscribe((r)=> {
      this.makeCurrent(selectedChoice[0]);
    });
  }

  get cashBuster$() {
    return cacheBusterObserver$;
  }

}
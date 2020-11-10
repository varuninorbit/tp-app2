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

export class McqChapcilStateService extends SubStateService {
  
  public defaultState = {
    chaptersBag: [],
    chaptersTray: [],
    questionsNo: []
  };

  constructor(private ac: Action2Service, private rootStateService: RootStateService) {
      super()
      this.   
      SetDefaultState(this.defaultState).
      SetStateName('mcqChapcil').
      Init()

    if (this.state.chaptersBag.length === 0) {
      this.LOAD_CHAPTERS;
    }    
  }


  get LOAD_CHAPTERS() {

    // ac2.get({apiGroup:'8th_mat_cb_en',keyval:true})
    // ('AExamChoice.attributes')().subscribe(r=>console.log(r))
    
    if (this.state.chaptersBag==0) {
      this.chapters$(this.examChoice()).subscribe((chapters ) => {
          this.state.chaptersBag = chapters;
        })
    }
    return this;
  }

  @Cacheable({cacheBusterObserver: cacheBusterObserver$.asObservable()})

  chapters$(examChoice){       
    return this.ac.
        get({query:'exam_choice='+examChoice+'&'})
        ('ASchema.chapters')
        ()
  }


  examChoice(){
    //TODO: exam choice is giving ''
    return this.rootStateService.getSateOf('examChoice').currentChoice.db_prefix
    //return '8th_mat_cb_en';
  }

  get cashBuster$(){
    return cacheBusterObserver$;
  }
}
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
import { StateService } from 'src/app/state.service';
@Injectable({
  providedIn: "root",
})
export class McqChapcilStateService extends SubStateService{
  public defaultState = {
    chaptersBag: [],
    chaptersTray: [],
    questionsNo: []
  };


  constructor(
    private rootSateService: StateService)
  {
    super();
    
   super.
      SetDefaultState(this.defaultState).
      SetParentState(this.rootSateService.state_).
      SetStateName('mcqChapcil').
      Init()

    if(this.state.chaptersBag.length===0){
      this.LOAD_CHAPTERS;
    }
  }


  get LOAD_CHAPTERS() {
    if(this.state.chaptersBag)
    this.state.chaptersBag = [
      {
        "id": '1',
        "chapter": "Unit 1(Rational Numbers)"
      },
      {
        "id": '2',
        "chapter": "Unit 2(Data Handling)"
      },
      {
        "id": '3',
        "chapter": "Unit 3(Square-Square Root & Cube-Cube Root)"
      },
      {
        "id": '4',
        "chapter": "Unit 4(Linear Equation In One Variable)"
      },
      {
        "id": '5',
        "chapter": "Unit 5(Understanding Quadrilaterals & Practical Geometry)"
      },
      {
        "id": '6',
        "chapter": "Unit 6(Visualising The Solid Shapes)"
      },
      {
        "id": '7',
        "chapter": "Unit 7(Algebraic Expression, Identities & Factorisation)"
      },
      {
        "id": '8',
        "chapter": "Unit 8(Exponents & Powers)"
      },
      {
        "id": '9',
        "chapter": "Unit 9(Comparing Quantities)"
      },
      {
        "id": '10',
        "chapter": "Unit 10(Direct & Inverse Proportions)"
      },
      {
        "id": '11',
        "chapter": "Unit 11(Mensuration)"
      },
      {
        "id": '12',
        "chapter": "Unit 12(Introduction To Graphs)"
      },
      {
        "id": '13',
        "chapter": "Unit 13(Playing With Numbers)"
      }
    ];
    return this;
  }

}
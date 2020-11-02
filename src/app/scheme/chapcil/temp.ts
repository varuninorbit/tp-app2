/*******************************
 * State loader for McqComponent
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StateService } from 'src/app/state.service';
import { GlobalService } from 'src/app/_services';
@Injectable({
  providedIn: "root",
})
export class McqChapcilStateService {
  //initial state
  public defaultState = {
    chaptersBag: [],
    chaptersTray: [],
    questionsNo: []
  };

  public state= Object.assign({}, this.defaultState);

  stateName = 'mcqChapcil';

  constructor(private rootSateService: StateService, 
    private gs: GlobalService) {}

  Init(){
    this.AttachToParent();
    //load chapters if bag is empty;
    if(this.state.chaptersBag.length===0){
      this.LOAD_CHAPTERS;
    }
    return this;
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


  parentState() {
    return this.rootSateService.state_;
  }

  AttachToParent() {
    //substate does not exist create it
    if (this.parentState()[this.stateName] == undefined) {
      this.parentState()[this.stateName] = this.state;
    }else{
      this.state = this.parentState()[this.stateName];
    }
    return this;
  }

  default_state_q(){
    return (this.gs._.isMatch(this.state,this.defaultState))
    ?true
    :false;
  }
}


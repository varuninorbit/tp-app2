import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ActionService } from 'src/app/services/action.service';

@Injectable()
export class ExamChoiceServiceHierarchy {
    examChoiceHierarchy: Observable<any>;
  
  constructor(private ac:ActionService) {
    
    //TODO change type
    this.examChoiceHierarchy  = ac.get('AExamChoice')('hierarchy')();   
  }
}

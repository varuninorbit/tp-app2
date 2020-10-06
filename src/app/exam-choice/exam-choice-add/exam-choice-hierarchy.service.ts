//TODO Obselete file
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ActionService } from 'src/app/services/action.service';

@Injectable()
export class ExamChoiceServiceHierarchy {
    examChoiceHierarchy: Observable<any>; //TODO change type
  
  constructor(private ac:ActionService) {
    //this.examChoiceHierarchy  = ac.CachedApiGroup('default').get('AExamChoice')('hierarchy')();   TODO Cached
    this.examChoiceHierarchy  = ac.get('AExamChoice')('hierarchy')();   
  }
}

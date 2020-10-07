//TODO Obselete file
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Action2Service } from 'src/app/services/action2.service';

@Injectable()
export class ExamChoiceServiceHierarchy {
    examChoiceHierarchy: Observable<any>; //TODO change type
  
  constructor(private ac:Action2Service) {
    this.examChoiceHierarchy  = ac.get({apiGroup:'default',cache:'&cache'})('AExamChoice.hierarchy')();   
  }
}

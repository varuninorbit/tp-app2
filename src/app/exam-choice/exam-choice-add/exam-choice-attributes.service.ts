//TODO Obselete file
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Action2Service } from 'src/app/services/action2.service';

@Injectable()
export class ExamChoiceAttributesService {
    observable: Observable<any>; //TODO change type
  
  constructor(private ac:Action2Service) {
    this.observable  = ac.get({apiGroup:'8th_mat_cb_en',cache:'&cache',keyval:true})('AExamChoice.attributes')();   //TODO: change apiGroup
  }
}

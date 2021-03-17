//TODO Obselete file
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { RootStateService } from "src/app/root-state.service";
import { Action2Service } from 'src/app/services/action2.service';

@Injectable()
export class ExamChoiceAttributesService {
  observable: Observable<any>; //TODO change type

  constructor(private ac: Action2Service, private rs: RootStateService) {
    let exam_choice = this.rs.getSateOf('examChoice').currentChoice.db_prefix
    this.observable = ac.get({ apiGroup: exam_choice, cache: '&cache', keyval: true })('AExamChoice.attributes')();   //TODO: change apiGroup
  }
}

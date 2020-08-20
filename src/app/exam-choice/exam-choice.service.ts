import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
import { IExamChoice } from "../types/i-exam-choice";
import { Urls } from '../../environments/environment';
import { INode } from "../types/i-node";
import { UserService } from "../user.service";
import { ActionService } from '../services/action.service';

@Injectable()
export class ExamChoiceService {
 
  examChoice_: Observable<IExamChoice>;
  examChoiceHierarchy: Observable<INode>;
  
  constructor(private ac: ActionService) {
    
    // this.examChoice_  = this.http.get<Array<IExamChoice>>(Urls.host+'exam-choices/id/12')
    // .pipe(map(d=>d[0]));

    this.examChoiceHierarchy = ac.get('AExamChoice')('hierarchy')();
    
  }

  getData(): Observable<IExamChoice> {
   // window.exp = this.examChoice_;
    return this.examChoice_;
  }

}

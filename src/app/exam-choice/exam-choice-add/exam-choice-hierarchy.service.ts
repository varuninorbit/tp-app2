import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Urls } from '../../../environments/environment';

@Injectable()
export class ExamChoiceServiceHierarchy {
    examChoiceHierarchy: Observable<any>;
  
  constructor(private http: HttpClient) {
    
    //TODO change type
    this.examChoiceHierarchy  = this.http.get<Observable<any>>(Urls.host+'exam-choice-hierarchy');    
  }
}

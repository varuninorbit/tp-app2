import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ActionService } from 'src/app/services/action.service';

@Injectable()
export class ExamChoiceService {
    examChoice: Observable<any>;
  
  constructor(private ac:ActionService) {  
    this.examChoice  = this.ac.get('AExamChoice')('choices')();   
  }
}

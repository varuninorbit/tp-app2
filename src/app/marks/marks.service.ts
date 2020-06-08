import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
import { ExamChoiceService } from "../exam-choice/exam-choice.service";

@Injectable()
export class MarksService {
  constructor(private examChoice: ExamChoiceService) {}

  getData(): Observable<Array<number>> {
      return this.examChoice.examChoice_
      .pipe(map(({marks})=>marks));
  }
}

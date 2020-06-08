import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
import { ExamChoiceService } from "../exam-choice/exam-choice.service";
import { ICategory } from "../types/i-exam-choice";

@Injectable()
export class CategoryService {
  constructor(private examChoice: ExamChoiceService) {}

  getData(): Observable<Array<ICategory>> {
      return this.examChoice.examChoice_
      .pipe(map(({categories})=>categories))
  }
}

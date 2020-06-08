import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { ExamChoiceService } from "../exam-choice/exam-choice.service";
import { IChapter } from "../types/i-exam-choice";

@Injectable()
export class ChaptersService {
  chapters: IChapter[];
  constructor(private examChoice: ExamChoiceService) {}

  getData(): Observable<Array<IChapter>> {
    return this.examChoice.examChoice_.pipe(map(({ chapters }) => chapters));
  }
}

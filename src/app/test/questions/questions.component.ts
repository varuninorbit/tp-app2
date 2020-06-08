import { Component, OnInit} from "@angular/core";
import { IQuestion } from "../../types/i-question";
import { QuestionsService } from "../questions.service";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit{ 
  questions: IQuestion[];

  constructor(private questionsService: QuestionsService) {
   }

   ob(question){
    return JSON.parse(question);
  }

  ngOnInit() {
    console.log(this)
    this.questionsService
      .loadQuestions()
      .subscribe(questions => {
        this.questions = questions;
      });     
  } 
}

import { Component, OnInit } from "@angular/core";
import { ExamChoiceService } from "./exam-choice.service";
import { IExamChoice } from "../types/i-exam-choice";
import { INode } from "../types/i-node";
import { UserService } from "../user.service";
import { ActionService } from '../services/action.service';
@Component({
  selector: "app-exam-choice",
  templateUrl: "./exam-choice.component.html",
  styleUrls: ["./exam-choice.component.css"]
})
export class ExamChoiceComponent implements OnInit {
  choices: Array<IExamChoice>;
  currentChoice: IExamChoice;
  node: INode[];
  constructor(private examChoiceService: ExamChoiceService, private user: UserService,
    private ac: ActionService) {
      
  }

  ngOnInit() {
    this.ac.get('AExamChoice')('choices')('0').subscribe(({choices,currentChoice})=>{
      this.choices = choices;
      this.currentChoice=currentChoice;
    })
  }
}

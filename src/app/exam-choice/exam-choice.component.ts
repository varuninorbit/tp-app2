import { Component, OnInit } from "@angular/core";
import { ExamChoiceService } from "./exam-choice.service";
import { IExamChoice } from "../types/i-exam-choice";
import { INode } from "../types/i-node";
import { UserService } from "../user.service";
@Component({
  selector: "app-exam-choice",
  templateUrl: "./exam-choice.component.html",
  styleUrls: ["./exam-choice.component.css"]
})
export class ExamChoiceComponent implements OnInit {
  choices: Array<IExamChoice>;
  currentChoice: IExamChoice;
  node: INode[];
  constructor(private examChoiceService: ExamChoiceService, private user: UserService) {
    //console.log(user.Ouser,'--ouser--');   
  }

  ngOnInit() {
    this.examChoiceService.getData().subscribe(data => {
      //console.log(data,'-----choices--')
      this.user.Ouser
      .subscribe(({choices})=>{
        this.choices= choices.favChoices;
        this.currentChoice= choices.selectedChoice;
      })
    });
  }  
}

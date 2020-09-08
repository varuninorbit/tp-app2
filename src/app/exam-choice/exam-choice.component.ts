import { Component, OnInit } from "@angular/core";
import { ExamChoiceService } from "./exam-choice.service";
import { IExamChoice } from "../types/i-exam-choice";
import { INode } from "../types/i-node";
import { UserService } from "../user.service";
import { ActionService } from '../services/action.service';
import { store } from 'src/app/_services/store.service.js';
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
    private ac: ActionService
    ) {
      this.currentChoice={
        name:'',
        id:'',
        db_prefix:''
      };
      window['examChoice']=this;      
  }

  ngOnInit() {
    this.ac.get('AExamChoice')('choices')(this.user.me().id).subscribe(({choices,currentChoice})=>{
      this.choices = choices;
      this.currentChoice=currentChoice;
      store.currentChoice=currentChoice;
    })
  }
}

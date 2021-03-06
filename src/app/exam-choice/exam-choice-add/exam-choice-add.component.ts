import { Component, OnInit, Input } from "@angular/core";
import { INode } from "src/app/types/i-node";
import { ExamChoiceServiceHierarchy } from "./exam-choice-hierarchy.service";
@Component({
  selector: "app-exam-choice-add",
  templateUrl: "./exam-choice-add.component.html",
  styles: []
})
export class ExamChoiceAddComponent implements OnInit {
  node: INode[];
  
  constructor( private examChoiceHierarchy: ExamChoiceServiceHierarchy
    ) {
    
      examChoiceHierarchy.examChoiceHierarchy.subscribe(node=>{
      this.node = [node];
    });
  }

  ngOnInit() {}
}

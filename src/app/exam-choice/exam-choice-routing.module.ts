import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExamChoiceComponent } from "./exam-choice.component";
import { ExamChoiceAddComponent } from "./exam-choice-add/exam-choice-add.component";

const routes: Routes = [  
  {
    path: "exam-choice",
    children: [
      { path: "", component: ExamChoiceComponent },
      { path: "exam-choice-add", component: ExamChoiceAddComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ExamChoiceRoutingModule {
  static components = [ExamChoiceComponent, ExamChoiceAddComponent];
}

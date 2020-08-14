import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OptionsComponent } from "./options.component";
import { ChaptersComponent } from "src/app/chapters/chapters.component";
import { MarksComponent } from "src/app/marks/marks.component";
import { CategoryComponent } from "src/app/category/category.component";
import { QuestionComponent } from "src/app/test/questions/question/question.component";
import { ChadComponent } from "./chad/chad.component";
import { QumaComponent } from "./chad/quma/quma.component";
import { NavComponent } from "../nav/nav.component";

const routes: Routes = [
  // {
  //   path: "options",
  //   component: OptionsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule {
  static components = [
    OptionsComponent,ChaptersComponent, MarksComponent,CategoryComponent,QuestionComponent,
    ChadComponent,QumaComponent
    ];
}

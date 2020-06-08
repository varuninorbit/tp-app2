import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OptionsRoutingModule } from "./options-routing.module";
import { MarksService } from "src/app/marks/marks.service";
import { ChaptersService } from "src/app/chapters/chapters.service";
import { CategoryService } from "src/app/category/category-service";
import { MaterialModule } from "src/app/material/material.module";
import { QuestionsService } from "src/app/test/questions.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MathJaxModule } from "ngx-mathjax";
import { NavModule } from "../nav.module";

@NgModule({
  declarations: OptionsRoutingModule.components,
  imports: [CommonModule, OptionsRoutingModule, MaterialModule, FormsModule,ReactiveFormsModule,
    NavModule,
  MathJaxModule.forChild()
  ],
  exports: [],
  providers: [MarksService, ChaptersService, CategoryService, QuestionsService   
  ]
})
export class OptionsModule {}

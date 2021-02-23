import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamChoiceRoutingModule } from './exam-choice-routing.module';
import { CardComponent } from '../card/card.component';
import { DynamicDropComponent } from './exam-choice-add/dynamic-drop.component';
import { GlobalModule } from '../global.module';
import { ExamChoiceServiceHierarchy } from './exam-choice-add/exam-choice-hierarchy.service';

@NgModule({
  declarations: [
    ExamChoiceRoutingModule.components,CardComponent, DynamicDropComponent],
  imports: [
    CommonModule,
    ExamChoiceRoutingModule,
    GlobalModule
  ],
  providers: [ ExamChoiceServiceHierarchy]
})
export class ExamChoiceModule { }

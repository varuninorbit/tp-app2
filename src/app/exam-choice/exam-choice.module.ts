import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamChoiceRoutingModule } from './exam-choice-routing.module';
import { CardComponent } from '../card/card.component';
import { DynamicDropComponent } from './exam-choice-add/dynamic-drop.component';
import { ExamChoiceServiceHierarchy } from './exam-choice-add/exam-choice-hierarchy.service';
import { ExamChoiceService } from './exam-choice.service';

@NgModule({
  declarations: [
    ExamChoiceRoutingModule.components,CardComponent, DynamicDropComponent],
  imports: [
    CommonModule,
    ExamChoiceRoutingModule
  ],
  providers: [ ExamChoiceServiceHierarchy, ExamChoiceService]
})
export class ExamChoiceModule { }

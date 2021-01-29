import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QeditRoutingModule } from './qedit-routing.module';
import { QuestionEditorComponent } from '../question-editor/question-editor.component';


@NgModule({
  declarations: [QuestionEditorComponent],
  imports: [
    CommonModule,
    QeditRoutingModule
  ]
})
export class QeditModule { }

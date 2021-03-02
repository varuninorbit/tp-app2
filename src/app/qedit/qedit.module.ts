import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QeditRoutingModule } from './qedit-routing.module';
import { QuestionEditorComponent } from '../question-editor/question-editor.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuestionEditorComponent],
  imports: [
    CommonModule,
    QeditRoutingModule,
    EditorModule,
    FormsModule
  ]
})
export class QeditModule { }

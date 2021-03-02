import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionEditorComponent } from '../question-editor/question-editor.component';

const routes: Routes = [
  {path:'qedit', component:QuestionEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  
  ],
  exports: [RouterModule]
})
export class QeditRoutingModule { }

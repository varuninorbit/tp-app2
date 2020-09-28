import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SchemeComponent } from './scheme/scheme.component';
import { ChapcilComponent } from './chapcil/chapcil.component';
import { ChikooComponent } from './chikoo/chikoo.component';
import { QuestionComponent } from '../test/questions/question/question.component';
import { ErrorReportComponent } from './error-report/error-report.component';
import { ShrimComponent } from './shrim/shrim.component';

const routes: Routes = [
  {path: '', component: SchemeComponent},
  {path: "scheme", component: SchemeComponent},
  {path: "shrim", component: ShrimComponent},
  {path: "scheme/chapcil", component: ChapcilComponent},
  {path: "scheme/chikoo", component: ChikooComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SchemeRoutingModule {
  static components = [
    SchemeComponent, ChapcilComponent, ChikooComponent, 
    QuestionComponent, ErrorReportComponent
  ]
}

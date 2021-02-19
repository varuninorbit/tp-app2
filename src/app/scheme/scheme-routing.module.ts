import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemeComponent } from './scheme/scheme.component';
import { ChapcilComponent } from './chapcil/chapcil.component';
import { ChikooComponent } from './chikoo/chikoo.component';
import { QuestionComponent } from '../test/questions/question/question.component';
import { ErrorReportComponent } from './error-report/error-report.component';
//import { ShrimComponent } from './shrim/shrim.component';
import { LaviComponent } from './lavi/lavi.component';
import { McqChapcilComponent } from './mcq-chapcil/mcq-chapcil.component';
import { StepaComponent } from './stepa/stepa.component';
import { CustmeComponent } from './custme/custme.component';
//import { RedirectGuard } from '../_guards/redirect.guard';
//import { InstructionsComponent } from './instructions/instructions.component';

const routes: Routes = [
  //{ path: '', component: StepaComponent },
 // { path: '', component: InstructionsComponent },
  { path: "scheme", component: SchemeComponent },
  { path: "lavi", component: LaviComponent },
  //{ path: "scheme/shrim", component: ShrimComponent },
  { path: "scheme/chapcil", component: ChapcilComponent },
  { path: "scheme/mcq-chapcil", component: McqChapcilComponent },
  { path: "scheme/chikoo", component: ChikooComponent },  
  { path: "scheme/stepa", component: StepaComponent },  
  { path: "scheme/custme", component: CustmeComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SchemeRoutingModule {
  static components = [
    SchemeComponent, ChapcilComponent, ChikooComponent,
    QuestionComponent, ErrorReportComponent, McqChapcilComponent
  ]
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SchemeComponent } from './scheme/scheme.component';
import { ChapcilComponent } from './chapcil/chapcil.component';
import { BottomNavComponent } from '../bottom-nav.component';
import { ChikooComponent } from './chikoo/chikoo.component';

const routes: Routes = [
  {path: "scheme", component: SchemeComponent},
  {path: "scheme/chapcil", component: ChapcilComponent},
  {path: "scheme/chikoo", component: ChikooComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SchemeRoutingModule {
  static components = [
    SchemeComponent, ChapcilComponent,ChikooComponent
  ]
}

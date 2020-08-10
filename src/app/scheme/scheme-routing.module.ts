import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SchemeComponent } from './scheme/scheme.component';
import { ChapcilComponent } from './chapcil/chapcil.component';
import { BottomNavComponent } from '../bottom-nav.component';

const routes: Routes = [
  {path: "scheme", component: SchemeComponent},
  {path: "scheme/chapcil", component: ChapcilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SchemeRoutingModule {
  static components = [
    SchemeComponent, ChapcilComponent
  ]
 }

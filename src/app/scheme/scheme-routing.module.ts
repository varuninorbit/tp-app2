import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SchemeComponent } from './scheme/scheme.component';

const routes: Routes = [
  {
    path: "scheme",
    component: SchemeComponent,
    // children: [
    //   {
    //     path: "",
    //     component: HomeComponent,
    //     canActivate: [AuthGuard]
    //   },
    //   { path: "sign-in", component: SignInComponent },
    //   { path: "forgot-password", component: PasswordResetComponent },
    //   { path: "sign-up", component: SignUpComponent },
    //   //{ path: "**", redirectTo: "sign-in" }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SchemeRoutingModule {
  static components = [
    SchemeComponent
  ]
 }

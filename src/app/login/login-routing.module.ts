import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PasswordResetComponent } from "./password-reset/password-reset.component";
import { LoginComponent } from "./login.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HomeComponent } from "./home";
import { AuthGuard } from "../_guards";
import { AlertComponent } from "../_directives";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      { path: "sign-in", component: SignInComponent },
      { path: "forgot-password", component: PasswordResetComponent },
      { path: "sign-up", component: SignUpComponent },
      //{ path: "**", redirectTo: "sign-in" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LoginRoutingModule {
  static components = [
    PasswordResetComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ];
}

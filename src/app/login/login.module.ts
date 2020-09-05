import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { AuthGuard } from "../_guards";
import { AuthenticationService } from "../_services";
import { UserService } from "../user.service";
//import { HTTP_INTERCEPTORS } from "@angular/common/http";
//import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from "../_helpers";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [LoginRoutingModule.components],
  imports: [CommonModule, LoginRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers:[
    AuthGuard,
    AuthenticationService,
    UserService,
    //{provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true},
    //{provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true},
    //fakeBackendProvider
  ]
})
export class LoginModule {}

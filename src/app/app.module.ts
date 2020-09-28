import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
//import { FaIconsComponent } from './nav/fa-icons/fa-icons.component';

import { HttpClientModule } from "@angular/common/http";
import { ExamChoiceService } from "./exam-choice/exam-choice.service";
import { AppRoutingModule } from "./app-routing.module";
//import { LoginModule } from "./login/login.module";
import { ExamChoiceModule } from "./exam-choice/exam-choice.module";
import { AlertComponent } from "./_directives";
import { AlertService } from "./_services";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { MathJaxModule } from "ngx-mathjax";
import { GlobalService } from "./_services/global.service";
import { ActionService } from "./services/action.service";
import { SchemeModule } from './scheme/scheme.module';
import { GlobalModule } from './global.module';
import { SafePipeModule } from 'safe-pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    
    AppRoutingModule,
    
    MathJaxModule.forRoot({
      version: "2.7.5",
      config: "TeX-MML-AM_CHTML",
      hostname: "cdnjs.cloudflare.com"
    }),
    SchemeModule,
    GlobalModule,
    ExamChoiceModule
  ],
  declarations: [AppComponent, AppRoutingModule.components, AlertComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule, FormsModule, ReactiveFormsModule, MathJaxModule
    ,GlobalModule
  ],
  providers: [
    ExamChoiceService,
    AlertService,   
    GlobalService,
    ActionService
  ]
})
export class AppModule {}

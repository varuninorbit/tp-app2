import { NgModule, Injectable } from "@angular/core";
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig
} from "@angular/platform-browser";
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
import * as Hammer from "hammerjs";
import { ActionService } from "./services/action.service";
import { SchemeModule } from './scheme/scheme.module';
import { GlobalModule } from './global.module';
import { SafePipeModule } from 'safe-pipe';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y",
    });
    return mc;
  }
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL }
  };
}

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
    ExamChoiceModule,

    SafePipeModule
  ],
  declarations: [AppComponent, AppRoutingModule.components, AlertComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule, FormsModule, ReactiveFormsModule, MathJaxModule
    ,GlobalModule, SafePipeModule
  ],
  providers: [
    ExamChoiceService,
    AlertService,
    //ToggleMenuService,
    //SelectedOptionsService,
    // {provide:HAMMER_GESTURE_CONFIG,useClass:HammerGestureConfig},
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    GlobalService,
    ActionService
  ]
})
export class AppModule {}

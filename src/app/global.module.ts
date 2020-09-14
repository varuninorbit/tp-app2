import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonDirective } from './back-button.directive';
import { BottomNavComponent } from './bottom-nav.component';
import { StateService } from './state.service';
import { UserService } from './user.service';
import { GlobalService } from './_services';
import { NotifierModule } from "angular-notifier";
import { LiteralService } from './_services/literal.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageHttpInterceptor } from './interceptors/message-http.interceptor';
import { ConfirmDialog } from './confirm-dialog.component';
import { MaterialModule } from './material/material.module';
import { ExamChoiceService } from './exam-choice/exam-choice.service';
import { TriggerHttpInterceptor } from './interceptors/trigger-http.interceptor';
import { TriggerService } from './_services/trigger.service';
@NgModule({
  declarations: [BackButtonDirective, BottomNavComponent, ConfirmDialog],
  imports: [
    CommonModule, NotifierModule, MaterialModule
  ],
  exports:[BackButtonDirective,BottomNavComponent, NotifierModule, ConfirmDialog],
  providers:[
    StateService, UserService, GlobalService, LiteralService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: MessageHttpInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: TriggerHttpInterceptor, multi: true},
    ExamChoiceService, TriggerService 
  ],
  entryComponents:[]
})
export class GlobalModule { }

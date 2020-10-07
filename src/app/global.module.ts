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
import { ResconService } from './rescon.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { NumberSpinnerComponent } from './number-spinner/number-spinner.component';
@NgModule({
  declarations: [BackButtonDirective, BottomNavComponent, ConfirmDialog, CheckboxComponent, NumberSpinnerComponent],
  imports: [
    CommonModule, NotifierModule, MaterialModule, NgbModule, FormsModule
  ],
  exports:[BackButtonDirective,BottomNavComponent, NotifierModule, ConfirmDialog,
  NgbModule, CheckboxComponent, NumberSpinnerComponent
  ],
  providers:[
    StateService, UserService, GlobalService, LiteralService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: MessageHttpInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: TriggerHttpInterceptor, multi: true},
    ExamChoiceService, TriggerService, ResconService
  ],
  entryComponents:[]
})
export class GlobalModule { }

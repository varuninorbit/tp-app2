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
import { PlutiComponent } from './pluti/pluti.component';
import { ApiTokenService } from './services/api-token.service';
import { RootStateService } from './root-state.service';
import { ExamChoiceStateService } from './exam-choice/exam-choice-state.service';
import { RedirectGuard } from './_guards/redirect.guard';


@NgModule({
  declarations: [BackButtonDirective, BottomNavComponent, ConfirmDialog, CheckboxComponent, 
    NumberSpinnerComponent, PlutiComponent
  ],
  imports: [
    CommonModule, NotifierModule, MaterialModule, NgbModule, FormsModule
  ],
  exports:[BackButtonDirective,BottomNavComponent, NotifierModule, ConfirmDialog,
  NgbModule, CheckboxComponent, NumberSpinnerComponent, PlutiComponent
  ],
  providers:[
    StateService, UserService, GlobalService, LiteralService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: MessageHttpInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: TriggerHttpInterceptor, multi: true},
    ExamChoiceService, //TODO Check if it is redundant.
    TriggerService, ResconService, ApiTokenService, RootStateService,
    ExamChoiceStateService,
    RedirectGuard
  ],
  entryComponents:[]
})
export class GlobalModule { }

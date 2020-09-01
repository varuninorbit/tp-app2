import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonDirective } from './back-button.directive';
import { BottomNavComponent } from './bottom-nav.component';
import { StateService } from './state.service';
import { UserService } from './user.service';
import { GlobalService } from './_services';
import { NotifierModule } from "angular-notifier";
import { LiteralService } from './_services/literal.service';
@NgModule({
  declarations: [BackButtonDirective, BottomNavComponent],
  imports: [
    CommonModule, NotifierModule
  ],
  exports:[BackButtonDirective,BottomNavComponent, NotifierModule],
  providers:[StateService, UserService, GlobalService, LiteralService]
})
export class GlobalModule { }

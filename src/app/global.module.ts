import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonDirective } from './back-button.directive';
import { BottomNavComponent } from './bottom-nav.component';
import { StateService } from './state.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [BackButtonDirective, BottomNavComponent],
  imports: [
    CommonModule
  ],
  exports:[BackButtonDirective,BottomNavComponent],
  providers:[StateService, UserService]
})
export class GlobalModule { }

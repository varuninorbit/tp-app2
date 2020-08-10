import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonDirective } from './back-button.directive';
import { BottomNavComponent } from './bottom-nav.component';

@NgModule({
  declarations: [BackButtonDirective, BottomNavComponent],
  imports: [
    CommonModule
  ],
  exports:[BackButtonDirective,BottomNavComponent]
})
export class GlobalModule { }

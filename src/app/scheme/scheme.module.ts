import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeRoutingModule } from './scheme-routing.module';
import { SchemeComponent } from './scheme/scheme.component';
import { ActionService } from '../services/action.service';
import { MaterialModule } from '../material/material.module';
import { GlobalModule } from '../global.module';
@NgModule({
  declarations: [SchemeRoutingModule.components, SchemeComponent],
  imports: [
    CommonModule, SchemeRoutingModule, MaterialModule, GlobalModule
  ],
  providers:[
    ActionService
  ]
})
export class SchemeModule { }

// import app-nav

//schem routing import app-nav
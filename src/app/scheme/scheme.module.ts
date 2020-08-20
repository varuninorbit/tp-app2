import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeRoutingModule } from './scheme-routing.module';
import { ActionService } from '../services/action.service';
import { ArrayTableService } from '../scheme/array-table.service';
import { MaterialModule } from '../material/material.module';
import { GlobalModule } from '../global.module';
import { FormsModule } from '@angular/forms';
import { MathJaxModule } from 'ngx-mathjax';
@NgModule({
  declarations: [SchemeRoutingModule.components],
  imports: [
    CommonModule, SchemeRoutingModule, MaterialModule, GlobalModule,
    FormsModule, MathJaxModule.forChild()
  ],
  providers:[
    ActionService, ArrayTableService
  ]
})
export class SchemeModule { }

// import app-nav

//schem routing import app-nav
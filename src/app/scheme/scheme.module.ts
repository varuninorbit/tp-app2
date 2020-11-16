import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeRoutingModule } from './scheme-routing.module';
import { ActionService } from '../services/action.service';
import { ArrayTableService } from '../scheme/array-table.service';
import { MaterialModule } from '../material/material.module';
import { GlobalModule } from '../global.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MathJaxModule } from 'ngx-mathjax';
import { SafePipeModule } from 'safe-pipe';
import { SchemeCreateService } from './scheme-create.service';
import { ShrimComponent } from './shrim/shrim.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestDetailsComponent } from './test-details/test-details.component';
import { ConsetComponent } from './conset/conset.component';
import { DateTimeDialogComponent } from '../date-time-dialog/date-time-dialog.component';
import { LaviComponent } from './lavi/lavi.component';
import { ExamChoiceAttributesService } from '../exam-choice/exam-choice-add/exam-choice-attributes.service';

@NgModule({
  declarations: [SchemeRoutingModule.components, ShrimComponent, TestDetailsComponent, ConsetComponent, 
    DateTimeDialogComponent, LaviComponent],
  entryComponents:[DateTimeDialogComponent],  
  imports: [
    CommonModule, SchemeRoutingModule, MaterialModule, GlobalModule,
    FormsModule, MathJaxModule.forChild(), 
    SafePipeModule, NgbModule, ReactiveFormsModule
  ],
  providers:[
    ActionService, ArrayTableService, SchemeCreateService, ExamChoiceAttributesService
  ]
})
export class SchemeModule {  }

// import app-nav

//schem routing import app-nav
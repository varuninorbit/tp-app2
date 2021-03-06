import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrayTableService } from '../array-table.service';
import * as _ from 'underscore';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-datrix-dialog',
  templateUrl: './datrix-dialog.component.html',
  styleUrls: ['./datrix-dialog.component.css']
})
export class DatrixDialogComponent implements OnInit {

  selected:any = {chapter:'',category:'',marks:'',q_no:''};
  chapters = [[]];
  categories =[[]];
  valuesheet:any={};
  marks:string[]=[];
  maxQuestions:number=0;

  numberSpinnerConfig = {min:1,max:50,step:1,start:1}

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private ah: ArrayTableService) {
    window['datrix']=this;
    this.valuesheet=data;
    this.ChaptersFromSheet();   
   }

  ngOnInit(): void {
  }

  chapterChanged(){
    this.CalculateCategories().ResetCategory().ResetMarks();
  }

  categoryChanged(){
    this.CalculateMarks().ResetMarks();
  }

  marksChanged(){
    this.CalculateMaxNoOfQuestions().ResetNumber();
  }

  ResetCategory(){
    this.selected.category='';
    return this;
  }

  ResetMarks(){
    this.selected.marks='';
    return this;
  }

  ResetNumber(){
    this.selected.q_no=''
    return this;
  }

  ChaptersFromSheet(){
    let ids= this.ah.entityArray(this.valuesheet,'chapter_id')
      let chapters= this.ah.entityArray(this.data,'chapter_name')
      this.chapters = _.zip(ids,chapters);
      return this;
  }

  categoryValueSheet(){
    return this.ah.valueSheetSubset(this.valuesheet,'chapter_id',this.selected.chapter)
  }

  CalculateCategories(){
    let vs = this.categoryValueSheet();
    let ids= this.ah.entityArray(vs,'category_id')
    let categories= this.ah.entityArray(vs,'category_name')
    this.categories= _.zip(ids,categories);
    return this;
  }

  marksValueSheet(){
    return this.ah.valueSheetSubset(this.categoryValueSheet(),'category_id',this.selected.category)
  }

  CalculateMarks(){
    this.marks = this.ah.entityArray(this.marksValueSheet(),'marks');
    return this;
  }

  CalculateMaxNoOfQuestions(){
    this.maxQuestions = this.ah.valueSheetSubset(this.marksValueSheet(),'marks',this.selected.marks)[0].q_no;

    //limit number spinner to max
    this.numberSpinnerConfig.max = this.maxQuestions;

    return this;
  }

  setNoOfQuestions($e){    
    this.selected.q_no=$e;   
  }





}

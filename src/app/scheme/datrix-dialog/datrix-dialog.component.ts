import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrayTableService } from '../array-table.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-datrix-dialog',
  templateUrl: './datrix-dialog.component.html',
  styleUrls: ['./datrix-dialog.component.css']
})
export class DatrixDialogComponent implements OnInit {

  selected:any =[];
  options = [[1,2],[2,3],[3,4]];
 
  name ='parent';
  arrayTable=[[1,2,3],[3,4,5]];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private ah: ArrayTableService) {
    window['datrix']=this;
    
      let ids= this.ah.entityArray(this.data,'chapter_id')
      let chapters= this.ah.entityArray(this.data,'chapter_name')
      this.options = _.zip(ids,chapters);
    
   }

  ngOnInit(): void {
  }

  updateValue(value){
    this.selected[0]=value;
  }

}

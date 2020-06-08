import { Component, OnInit } from '@angular/core';
import { MarksService } from './marks.service';
import { SelectedOptionsService } from '../selected-options.service';
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

selectedMarks:Array<number>=[];
marks:Array<number>;
  constructor(private marksService: MarksService, private selectedOptions:SelectedOptionsService) { }

  ngOnInit() {
     this.marksService.getData().subscribe((data)=>{
        this.marks = data;
    })
  }

  updateMarks(){
    let selectedOptions = this.selectedOptions.selected;
    selectedOptions.marks= Object.keys(this.selectedMarks);
    this.selectedOptions.updateSelectedOptions(selectedOptions)
  }
}
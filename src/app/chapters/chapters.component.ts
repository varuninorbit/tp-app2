import { Component, OnInit, Output } from '@angular/core';
import { ChaptersService } from './chapters.service';
import { EventEmitter } from 'events';
import { IChapter } from '../types/i-exam-choice';
import { SelectedOptionsService} from '../selected-options.service';
import { ArrayService } from '../_helers/array.service';
@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {
  chapters:Array<IChapter>;

  @Output() readonly menuToggle= new EventEmitter();

  selectedChapters:any=[];

  constructor(
    private chaptersService: ChaptersService, 
    private selectedOptions :SelectedOptionsService,
    private arrayService: ArrayService
    ) { }

  ngOnInit() {
    this.chaptersService.getData().subscribe((data)=>{
      this.chapters = data;
    });
  }

  openMenu(){ 
    this.menuToggle.emit('');
  }

  upadateChapters(){
    let selectedOptions = this.selectedOptions.selected;
    selectedOptions.chapters= Object.keys(this.selectedChapters);
    this.selectedOptions.updateSelectedOptions(selectedOptions)
  }
}


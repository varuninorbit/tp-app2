import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { IScheme } from 'src/app/types/i-scheme';
import { IChapter } from 'src/app/types/i-exam-choice';

@Component({
  selector: 'app-chapcil',
  templateUrl: './chapcil.component.html',
  styleUrls: ['./chapcil.component.css']
})
export class ChapcilComponent implements OnInit {

  private AScheme;
  scheme:IScheme;
  chapters:IChapter[];

  constructor(private ac:ActionService) { 
    this.AScheme = ac.get('ASchema');
  }

  ngOnInit(): void {
   this.AScheme('schter')(8,'exam_choice=9th_sci_cb_en').subscribe(({scheme,chapters})=>{
     this.chapters = chapters;
     this.scheme = scheme;
   })
  }

}
/*
todo
1 import componet into the routes
    .1 route => /chapsil
    .2 

2 fake data in component
*/
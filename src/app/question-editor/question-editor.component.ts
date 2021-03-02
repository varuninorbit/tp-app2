import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {
  editor='';
  constructor() {
    window['qedit']=this;
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>Question selection</h1>
<ngb-timepicker [(ngModel)]="time"></ngb-timepicker>
<hr>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   
  time:any;

  constructor() { }

  ngOnInit() {
  }

}
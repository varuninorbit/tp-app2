import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  template:`
  <h1>Question selection</h1>
  <ngb-timepicker [(ngModel)]="time"></ngb-timepicker>
  <hr>
  <pre>Selected time: {{time | json}}</pre>
  `,
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  time = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit(): void {
  }

}

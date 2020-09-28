import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>Question selection</h1>
  
<hr>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   
  time = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit() {
  }

}
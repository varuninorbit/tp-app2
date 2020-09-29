import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   
  time = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lavi',
  templateUrl: './lavi.component.html',
  styleUrls: ['./lavi.component.css']
})
export class LaviComponent implements OnInit {
  showPluti={
    chapter:false,
    marks:false,
    section:false,
  };

  constructor() { }

  ngOnInit(): void {
  }

}

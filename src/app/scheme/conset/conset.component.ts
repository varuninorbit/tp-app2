import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scheme-conset',
  templateUrl: './conset.component.html',
  styleUrls: ['./conset.component.css']
})
export class ConsetComponent implements OnInit {

  time = {hour: 10, minute: 0};
  timeDuration = {hour: 1, minute: 0};
  resultTime = {hour:0, minute: 0};
  resultInstantCheck_q=true;

  constructor() {
    window['conset'] = this;
   }

  ngOnInit(): void {
  }

}

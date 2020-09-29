import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shrim',
  templateUrl: './shrim.component.html',
  styleUrls: ['./shrim.component.css']
})
export class ShrimComponent implements OnInit {
  time = {hour: 10, minute: 0};
  timeDuration = {hour: 1, minute: 0};
  resultTime = {hour:0, minute: 0};
  pinChecked=true;
  resultInstantCheck_q=true;

  constructor() { 
    window['shrim'] = this;
  }

  ngOnInit(): void {
  }

}

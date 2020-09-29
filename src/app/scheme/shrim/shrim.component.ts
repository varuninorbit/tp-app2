import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shrim',
  templateUrl: './shrim.component.html',
  styleUrls: ['./shrim.component.css']
})
export class ShrimComponent implements OnInit {
  time = {hour: 10, minute: 0};

  pinChecked=true;

  constructor() { }

  ngOnInit(): void {
  }

}

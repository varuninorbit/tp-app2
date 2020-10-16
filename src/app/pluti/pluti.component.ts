import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pluti',
  templateUrl: './pluti.component.html',
  styleUrls: ['./pluti.component.css']
})
export class PlutiComponent implements OnInit {

  @Input() config={
    showCross:true,
    showPlus:true
  };
  constructor() { }

  ngOnInit(): void {
  }

}

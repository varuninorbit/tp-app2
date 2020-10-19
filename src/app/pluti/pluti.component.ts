import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


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

  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click(buttonName){
    this.buttonClick.emit(buttonName)
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-spinner',
  templateUrl: './number-spinner.component.html',
  styleUrls: ['./number-spinner.component.css']
})
export class NumberSpinnerComponent implements OnInit {
  
  // @Input('min') minValue: number;
  // @Input('max') maxValue: number;
  // @Input() step: number;
  // @Input('start') value=60;

  @Input() config={min:1,max:10,step:1,start:1};

  @Output('getValue') valueEmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {   
  }
  
  add(){
    this.config.start +=this.config.step;
    if(this.config.start > this.config.max){
      this.config.start = this.config.min;      
    }
         
    this.emit(this.config.start);   
  }

  subtract(){
    this.config.start -=this.config.step;
    if(this.config.start < this.config.min){
      this.config.start = this.config.max;
    }
    
    this.emit(this.config.start);
  }

  emit(value){
    this.valueEmit.emit(value);
  }

  limitMaxAndMin(){
    if(this.config.start < this.config.min){
      this.config.start = this.config.max;
    }

    if(this.config.start > this.config.max){
      this.config.start = this.config.min;      
    }
  }



}

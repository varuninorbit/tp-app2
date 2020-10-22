import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-spinner',
  templateUrl: './number-spinner.component.html',
  styleUrls: ['./number-spinner.component.css']
})
export class NumberSpinnerComponent implements OnInit {
  
  @Input('min') minValue: number;
  @Input('max') maxValue: number;
  @Input() step:number;
  @Input() value=60;

  @Output('getValue') valueEmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
  add(){
    this.value +=this.step;
    if(this.value > this.maxValue){
      this.value = this.minValue;      
    }
         
    this.emit(this.value);   
  }

  subtract(){
    this.value -=this.step;
    if(this.value < this.minValue){
      this.value = this.maxValue;
    }
    
    this.emit(this.value);
  }

  emit(value){
    this.valueEmit.emit(value);
  }

  limitMaxAndMin(){
    if(this.value < this.minValue){
      this.value = this.maxValue;
    }

    if(this.value > this.maxValue){
      this.value = this.minValue;      
    }
  }

}

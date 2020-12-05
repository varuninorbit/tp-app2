import { Component, OnInit } from '@angular/core';
import { InstructionsStateService } from './instructions-state.service';

@Component({
  selector: 'scheme-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  
  st= {instructions:[]};

  constructor(private sm:InstructionsStateService) { 
    this.st =this.sm.state;
  }

  ngOnInit(): void {
  }

  add(instruction){
    this.sm.add(instruction.value);
  }

  remove(i:number){
    this.sm.remove(i);
  }

}

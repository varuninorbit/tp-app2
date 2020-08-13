import { Component, OnInit } from '@angular/core';
import { SchemeModule } from '../scheme.module';

@Component({
  selector: 'app-chikoo',
  templateUrl: './chikoo.component.html',
  styleUrls: ['./chikoo.component.css']
})
export class ChikooComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  select(scheme){
    alert('selected'+scheme.id);
  }

}

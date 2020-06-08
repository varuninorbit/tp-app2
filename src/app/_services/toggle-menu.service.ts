import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {
  opened:boolean=true;
  toggeleEvent:EventEmitter;
  menu:Observable<any>;
  constructor() { }

  state(){

  }

  setState(){

  }
}

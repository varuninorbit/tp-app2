import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }

  BoolToIndexArray(arr:boolean[]): number[]{
    // [true,true,false,false,true] => [1,2,5]
    return arr.map((i:boolean,j)=>Number(i) *(j+1)).filter(i=>i)
  }
}

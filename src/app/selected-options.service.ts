import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedOptionsService {

  selected:ISelectedOptions={
    chapters:[],
    marks:[],
    category:[]
  };

  constructor() { }

  updateSelectedOptions(selected: ISelectedOptions){
    this.selected = selected;
    console.log(this.selected);
  }
}


export interface ISelectedOptions {
  chapters:string[];
  marks:string[];
  category:string[];
}

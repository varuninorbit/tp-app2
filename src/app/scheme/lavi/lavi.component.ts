import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lavi',
  templateUrl: './lavi.component.html',
  styleUrls: ['./lavi.component.css']
})
export class LaviComponent implements OnInit {
  @Input() contenteditable;

  showPluti = {
    chapter: false,
    marks: false,
    section: false,
  };

  laviState: namespace.LaviState = {
    sections: [
      {
        name: 'Section A', showPluti: false, edit:false,
        categories: [
          {
            name: 'MCQ', showPluti: false,
            marks: [
              {
                value: '2', showPluti: false,
                chapters: [
                  { name: 'Mottion in 2D', no: '3', questionsNo: 4, showPluti: false },
                  { name: 'Mottion in 3D', no: '4', questionsNo: 4, showPluti: false }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Section A', showPluti: false, edit:false,
        categories: [
          {
            name: 'MCQ', showPluti: false,
            marks: [
              {
                value: '2', showPluti: false,
                chapters: [
                  { name: 'Mottion in 2D', no: '3', questionsNo: 4, showPluti: false }
                ]
              }
            ]
          }
        ]
      }
      // { name: 'Section B', showPluti: false }
    ]
  }

  constructor() { 
    window['lavi']= this;
  }

  ngOnInit(): void {
  }

  click(obj:any, i:number, whichButton:string): void {
    if(whichButton==='cross'){
      this.delete(obj,i)
    }

    if(whichButton==='plus'){
      this.add(obj,i)
    }
  }

  delete(obj:any,i:number){
    obj.splice(i,1);
  }

  add(obj:any,i:number){
    console.log('adding',i)
  }

  click2(obj:any, i:number, whichButton:string, sectionName): void {
    if(whichButton==='plus'){
     // this.add(obj,i)
     console.log(sectionName);
    }
  }

  edit(element,section){
    section.edit=false;
    section.name= element.innerText;
  }
  
  toggleEdit(whatever){
    whatever.edit=!whatever.edit
  }   
}

declare module namespace {

  export interface Chapter {
    name: string;
    no: string;
    questionsNo: number;
    showPluti: boolean;
  }

  export interface Mark {
    value: string;
    showPluti: boolean;
    chapters: Chapter[];
  }

  export interface Category {
    name: string;
    showPluti: boolean;
    marks: Mark[];
  }

  export interface Section {
    name: string;
    showPluti: boolean;
    categories: Category[];
    edit: boolean;
  }

  export interface LaviState {
    sections: Section[];
  }
  
}

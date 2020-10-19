import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lavi',
  templateUrl: './lavi.component.html',
  styleUrls: ['./lavi.component.css']
})
export class LaviComponent implements OnInit {
  showPluti = {
    chapter: false,
    marks: false,
    section: false,
  };

  laviState: namespace.LaviState = {
    sections: [
      {
        name: 'Section A', showPluti: false,
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

  constructor() { }

  ngOnInit(): void {
  }

  click(...event) {
    console.log(event);
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
  }

  export interface LaviState {
    sections: Section[];
  }
}

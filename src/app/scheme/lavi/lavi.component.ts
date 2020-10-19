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
        name: 'A', showPluti: false,
        marks: [
          {
            value: '2', showPluti: false,
            chapters: [
              {
                name: 'Motion in 2D', no: '3'
                , questionsNo: 5, showPluti: false
              },
              {
                name: 'Motion in Plane', no: '4'
                , questionsNo: 3, showPluti: false
              }
            ]
          },
          {
            value: '2', showPluti: false,
            chapters: [
              {
                name: 'Motion in 2D', no: '3'
                , questionsNo: 5, showPluti: false
              },
              {
                name: 'Motion in Plane', no: '4'
                , questionsNo: 3, showPluti: false
              }
            ]
          }
        ]
      },
      {
        name: 'A', showPluti: false,
        marks: [
          {
            value: '2', showPluti: false,
            chapters: [
              {
                name: 'Motion in 2D', no: '3'
                , questionsNo: 5, showPluti: false
              },
              {
                name: 'Motion in Plane', no: '4'
                , questionsNo: 3, showPluti: false
              }
            ]
          },
          {
            value: '2', showPluti: false,
            chapters: [
              {
                name: 'Motion in 2D', no: '3'
                , questionsNo: 5, showPluti: false
              },
              {
                name: 'Motion in Plane', no: '4'
                , questionsNo: 3, showPluti: false
              }
            ]
          }
        ]
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
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

  export interface Section {
    name: string;
    showPluti: boolean;
    marks: Mark[];
  }

  export interface LaviState {
    sections: Section[];
  }
}

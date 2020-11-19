import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-exp',
  template:`
  <h1>edit</h1>
  <p [attr.contenteditable]="edit"
  (click)="edit=!edit"
  >This is a test text<p>
  `,
  styleUrls: ['./exp.component.css']
})
export class ExpEditComponent implements OnInit {
  name:string='';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-exp',
  template:`
  <br>
  <mat-form-field appearance="fill">
  <mat-label>Select an option</mat-label>
  <mat-select [(value)]="selected">
    <mat-option [value]="scheme" *ngFor="let scheme of schemes;let i = index">+{{scheme.right}} -{{scheme.wrong}}</mat-option>
  </mat-select>
</mat-form-field>

<p>You selected: +{{selected.right}} -{{selected.wrong}}</p>
  `,
  styleUrls: ['./exp.component.css']
})
export class ExpComponent  {
  schemes= [
    {right:4,wrong:1},
    {right:3,wrong:1},
    {right:4,wrong:0}
  ];
  selected = this.schemes[1];

}

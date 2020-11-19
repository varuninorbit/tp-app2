import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-exp',
  template:`
  <div>
  <p #para
  (click)="editPara(para)"   [attr.contenteditable]="edit"   (mouseout)="editPara(para)"
  >{{editValue$ | async }}</p>
  </div>
  `,
  styleUrls: ['./exp.component.css']
})
export class xx implements OnInit {
  edit=false;
  editValue='Test value';
  // editValue$ = new Observable<string>((observer: Observer<string>)=>{
  //   observer.next('test');
  // })

   editValue$ = new BehaviorSubject('test');
  constructor() { 
    window['exp'] = this;
  }

  ngOnInit(): void {
  }

  editPara(elem){
    this.edit = true;
    this.editValue = elem.innerText;
  }

}

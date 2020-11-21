import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject, Observable, Observer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-exp-two',
  template:`
  <p>Exp 2</p>
  `,
  styleUrls: ['./exp.component.css']
})
export class Exp2Component implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
    window['exp']= this;
   }

  ngOnInit() {
    
  }


}

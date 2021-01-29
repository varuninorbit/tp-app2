//import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject, Observable, Observer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-exp',
  template:`
  <button>Instructions</button>
  `,
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
    window['exp']= this;
   }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe((d) => {
      console.log('id->',d)
    });

  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  template: `
    <div class="fixed-bottom nav-link row">
      <div class="bg-primary pt-1">
          <div>
              <ng-content></ng-content>
              <button class="btn btn-primary btn-lg float-right" appBackButton type="button">
                  <span class="fa fa-chevron-left text-light" data-toogle="tooltip"></span></button>
          </div>
      </div>
    </div>
  `,
  styles: [`  
  `]
})
export class BottomNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
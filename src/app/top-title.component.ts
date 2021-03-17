import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-title',
  template: `
  <span class="d-inline-flex modal-dialog" style="font-size: x-large;font-family: monospace;"
  ><ng-content></ng-content></span>
  `,
  styles: [
  ]
})
export class TopTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

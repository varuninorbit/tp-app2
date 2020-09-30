import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template:`
  <div class="form-group">
    <div>
        <div class="custom-control custom-checkbox custom-control-inline">
            <input [(ngModel)]="checked" name="result-instant-check-check"
                id="result-instant-check-check_0" type="checkbox" class="custom-control-input"
                value="checked" aria-describedby="result-instant-check-checkHelpBlock">
            <label for="result-instant-check-check_0" class="custom-control-label">{{label}}</label>
        </div>
    </div>
</div>
  `,
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() checked=false;
  @Input() label='';
  constructor() { }

  ngOnInit(): void {
  }

}

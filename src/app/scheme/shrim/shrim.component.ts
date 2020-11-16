import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-shrim',
  templateUrl: './shrim.component.html',
  styleUrls: ['./shrim.component.css']
})
export class ShrimComponent implements OnInit {  
  
  pinChecked=true;
  shrim = new FormGroup({
    name: new FormControl(''),
    pin: new FormControl('')
  });

  constructor() { 
    window['shrim'] = this;
  }

  

  ngOnInit(): void {
  }
}

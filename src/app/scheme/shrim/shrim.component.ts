import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shrim',
  templateUrl: './shrim.component.html',
  styleUrls: ['./shrim.component.css']
})
export class ShrimComponent implements OnInit {  
  
  pinChecked=true;

  constructor() { 
    window['shrim'] = this;
  }

  ngOnInit(): void {
  }

}

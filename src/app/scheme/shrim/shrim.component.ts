import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShrimStateService } from './shrim-state.service';
@Component({
  selector: 'app-shrim',
  templateUrl: './shrim.component.html',
  styleUrls: ['./shrim.component.css'],
  providers: [ShrimStateService]
})
export class ShrimComponent implements OnInit {  
  pinChecked=true;
  
  state = {
    name:'', 
    pin:''
  }


  constructor(private sm: ShrimStateService) { 
    window['shrim'] = this;
    this.state =this.sm.SetDefaultState(this.state)
    .state;
  }

  

  ngOnInit(): void {
  }


}

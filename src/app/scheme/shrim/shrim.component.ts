import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Action2Service } from 'src/app/services/action2.service';
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


  constructor(
    private sm: ShrimStateService, 
    private ac: Action2Service) { 
    
      window['shrim'] = this;

    this.state =this.sm.SetDefaultState(this.state)
    .state;

  }  

  ngOnInit(): void {
  }


}

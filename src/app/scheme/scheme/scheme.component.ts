import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { IScheme } from 'src/app/types/i-scheme';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {
  private AScheme;
  schemes:IScheme[];
  constructor(private ac:ActionService ) { 
    this.AScheme = ac.get('ASchema');
  }

  ngOnInit(): void {
    this.AScheme('all')('exam_choice=9th_sci_cb_en').subscribe(schemes=>{
      this.schemes = schemes;
    })
  }

  pop(){
    alert('hello');
  }
}

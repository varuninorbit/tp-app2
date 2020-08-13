import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { IScheme } from 'src/app/types/i-scheme';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {
  private AScheme;
  schemes:IScheme[];
  selectHighlighted:[];
  selectedID=0;

  cardClass=[];
  constructor(private ac:ActionService, private state: StateService ) { 
    this.AScheme = ac.get('ASchema');
    this.selectedID=this.state.state.currentScheme.id;
  }

  ngOnInit(): void {
    this.AScheme('all')('exam_choice=9th_sci_cb_en')
    .subscribe(schemes=>{
      this.schemes = schemes;
    })
  }  

  select(scheme){
    this.state.updateState((state)=>{
      state.currentScheme=scheme;
      return state;
    });
  }

  isSelected(schemeId){
    return (schemeId==this.state?.state.currentScheme.id)
    ?true
    :false;
  }
}

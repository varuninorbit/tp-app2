import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { IScheme } from 'src/app/types/i-scheme';
import { StateService } from 'src/app/state.service';
import { NotifierService } from 'angular-notifier';
import { MatDialog } from '@angular/material/dialog';
import { ErrorReportComponent } from '../error-report/error-report.component';

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
  private 
  constructor(private ac:ActionService, private state: StateService, 
    private notifier:NotifierService,
    private dialog: MatDialog
    ) { 
    window['scheme']= this;
    this.AScheme = ac.get('ASchema');
    
  }

  ngOnInit(): void {
    this.AScheme('all')()
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

  nextIsEnabled(){
    return (this.state.state.currentScheme.id);
  }

  notify(){
    this.notifier.show({
      type: "warning",
      message: "Select a Scheme first."
    });
  }

  openErrorDialog(){
    alert('opening dialog');
    const dialogRef = this.dialog.open(ErrorReportComponent);
  }
}

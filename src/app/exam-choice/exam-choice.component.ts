import { Component, OnInit } from "@angular/core";
import { IExamChoice } from "../types/i-exam-choice";
import { INode } from "../types/i-node";
import { UserService } from "../user.service";
import { ActionService } from '../services/action.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../confirm-dialog.component';
import { StateService } from '../state.service';
import { ExamChoiceStateService } from './exam-choice-state.service';

@Component({
  selector: "app-exam-choice",
  templateUrl: "./exam-choice.component.html",
  styleUrls: ["./exam-choice.component.css"]
})
export class ExamChoiceComponent implements OnInit {
  choices: Array<IExamChoice>;
  currentChoice: IExamChoice;
  node: INode[];
  store: any; //TODO Change type.
  st:any; 

  constructor(private stateManager: ExamChoiceStateService, 
    private user: UserService,
    private ac: ActionService, private dialog: MatDialog,
    private state: StateService
  ) {    
    window['examChoice'] = this;    
  }

  

  ngOnInit() {
    this.stateManager.state$.subscribe(state=>{
      this.st = state;
    })
  }

  openChoicesDialog(choice): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      data: {
        title: choice.name,
        message: 'Use this choice?',
        btn1: { name: 'Yes', value: 'make-current', color: 'primary' },
        btn2: { name: 'Delete', value: 'delete-choice', color: 'warn' },
        btn3: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'make-current') {
        this.stateManager.makeCurrent(choice)
      }
      if (result === 'delete-choice') {
        this.stateManager.delete(choice)
      }     
    });
  }



  updateChoices() {
    this.state.state$.subscribe(({ choices, currentChoice }) => {
      this.choices = choices;
      this.currentChoice = currentChoice;
    }); 
       
  }

}

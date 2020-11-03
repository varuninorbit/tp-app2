import { Component, OnInit } from "@angular/core";
import { ExamChoiceService } from "./exam-choice.service";
import { IExamChoice } from "../types/i-exam-choice";
import { INode } from "../types/i-node";
import { UserService } from "../user.service";
import { ActionService } from '../services/action.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../confirm-dialog.component';
import { GlobalService } from '../_services';
import { StateService } from '../state.service';

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
  cacheBuster=1;
  constructor(private examChoiceService: ExamChoiceService, private user: UserService,
    private ac: ActionService, private dialog: MatDialog,
    private gs: GlobalService, private state: StateService
  ) {
    this.currentChoice = {
      name: '',
      id: '',
      db_prefix: ''
    };
    window['examChoice'] = this;
    this.store = gs.store();
  }

  st = {
    currentChoice:{},
    choices: []
  }

  ngOnInit() {
    this.userChoices().subscribe(({ choices, currentChoice }) => {    
      this.st.choices = choices;
      this.st.currentChoice = currentChoice;
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
        this.ac.get('AExamChoice')('updateCurrentChoice')(choice.id).subscribe(()=> {})
      }
      if (result === 'delete-choice') {
        this.ac.get('AExamChoice')('deleteChoice')(choice.id).subscribe(()=> {})
      }
      
      this.CACHE_BUSTING.updateChoices();
    });
  }

  updateChoices() {
    this.state.state$.subscribe(({ choices, currentChoice }) => {
      this.st.choices = choices;
      this.st.currentChoice = currentChoice;
    });    
  }


  userChoices(){
    return this.ac.get('AExamChoice')('choices')(String(this.cacheBuster));
  }

  get CACHE_BUSTING(){ 
    this.cacheBuster++;
    return this;
  }


}

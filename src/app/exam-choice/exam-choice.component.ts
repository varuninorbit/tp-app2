import { Component, OnInit } from "@angular/core";
import { ExamChoiceService } from "./exam-choice.service";
import { IExamChoice } from "../types/i-exam-choice";
import { INode } from "../types/i-node";
import { UserService } from "../user.service";
import { ActionService } from '../services/action.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../confirm-dialog.component';
import { GlobalService } from '../_services';
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
  state: any;
  constructor(private examChoiceService: ExamChoiceService, private user: UserService,
    private ac: ActionService, private dialog: MatDialog,
    private gs: GlobalService
    ) {
      this.currentChoice={
        name:'',
        id:'',
        db_prefix:''
      };
      window['examChoice']=this;  
      this.store = gs.store();
      this.state = gs.state();    
  }

  ngOnInit() {
    this.ac.get('AExamChoice')('choices')(this.user.me().id).subscribe(({choices,currentChoice})=>{
      this.choices = choices;
      this.currentChoice=currentChoice;
      
      //update state 
      //TODO 3 assignments of same data
      this.state.updateState(state=>{
        state.currentChoice = currentChoice;
        state.choices = choices;
        return state;
      })

      this.store.currentChoice = currentChoice;
      this.store.choices = choices;
    })
  }

  openChoicesDialog(choice): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {      
      data:{
          title: choice.name,
          message:'Use this choice?',
          btn1:{name:'Yes',value:'make-current',color:'primary'},
          btn2:{name:'Delete',value:'delete-choice', color:'warn'},
          btn3:null
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==='make-current'){
        this.ac.get('AExamChoice')('updateCurrentChoice')(choice.id).subscribe(r=>{})
      }
      if(result==='delete-choice'){
        alert('delete choice')
      }
    });
  }

  deleteChoice(){

  }
  
  makeItCurrentChoice(){

  }

  
}

import { Component, OnInit } from "@angular/core";
import { ExamChoiceService } from "./exam-choice.service";
import { IExamChoice } from "../types/i-exam-choice";
import { INode } from "../types/i-node";
import { UserService } from "../user.service";
import { ActionService } from '../services/action.service';
import { store } from 'src/app/_services/store.service.js';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../confirm-dialog.component';
@Component({
  selector: "app-exam-choice",
  templateUrl: "./exam-choice.component.html",
  styleUrls: ["./exam-choice.component.css"]
})
export class ExamChoiceComponent implements OnInit {
  choices: Array<IExamChoice>;
  currentChoice: IExamChoice;
  node: INode[];
  constructor(private examChoiceService: ExamChoiceService, private user: UserService,
    private ac: ActionService, private dialog: MatDialog
    ) {
      this.currentChoice={
        name:'',
        id:'',
        db_prefix:''
      };
      window['examChoice']=this;      
  }

  ngOnInit() {
    this.ac.get('AExamChoice')('choices')(this.user.me().id).subscribe(({choices,currentChoice})=>{
      this.choices = choices;
      this.currentChoice=currentChoice;
      store.currentChoice=currentChoice;
    })
  }

  openChoicesDialog(choice): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {      
      data:{
          title: choice.name,
          message:'Use this choice?',
          btn1:{name:'Yes',value:'true',color:'primary'},
          btn2:{name:'Delete',value:'delete', color:'warn'},
          btn3:null
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  
}

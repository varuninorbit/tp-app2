import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RootStateService } from 'src/app/root-state.service';
import { StateService } from 'src/app/state.service';
import { ArrayTableService } from '../array-table.service';
import { DatrixDialogComponent } from '../datrix-dialog/datrix-dialog.component';
import { CustmeStateService } from './custme-state.service';
import { ValueSheetHelper } from './ValueSheeHelper';
@Component({
  selector: 'app-custme',
  templateUrl: './custme.component.html',
  styleUrls: ['./custme.component.css']
})
export class CustmeComponent implements OnInit, OnDestroy {
  st:any;
  vh = new ValueSheetHelper();

  constructor(private ah: ArrayTableService,
    private datrixDialog: MatDialog,
    private sm: CustmeStateService,
    private rs: RootStateService,
    private stateService: StateService) {
    window['custme'] = this;

    this.st = this.sm.state;
  }

 

  ngOnInit(): void { 
    this.sm.Attach();
  }

  add() {
    let csv = confirm('Type separated by comma');
  }

  addRow(): void {
    let valueSheet = this.vh.Set(this.st.valueSheet)
    .fromAtMatrix(this.st.arrayTable[1]).valueSheet;

    this.filterValuesheetfromAtMatrix();
    const dialogRef = this.datrixDialog.open(DatrixDialogComponent,
      { data: valueSheet });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let row = Object.values(result).map(i => parseInt(i as string));
        this.st.arrayTable[1].push(row);
      }
    });
  }

  ngOnDestroy(): void {
    this.stateService.state.arrayTable = this.st.arrayTable;
  }


  removeRowElementFromMatrixOf(chid, catid, marks) {
    let index = this.st.valueSheet.findIndex(i => (i.chapter_id == chid && i.category_id == catid && i.marks == marks));
    if (index != -1) this.st.valueSheet.splice(index, 1)
    return this;
  }

  //modifies valusheet by reference
  filterValuesheetfromAtMatrix() {
    return this.st.arrayTable[1].reduce((acc, i) => {
      return this.removeRowElementFromMatrixOf(i.chapter_id, i.category_id, i.marks);
    }, this.st.valueSheet)
  }

}

interface Row {
  chapter_id: string;
  category_id: string;
  marks: string;
}



/*
Q What data marix will be called ?
A Datrix.

Q What is frequency matrix called ?
A Frix.
*/

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
  st = { arrayTable: {} };
  vh = new ValueSheetHelper();

  constructor(private ah: ArrayTableService,
    private datrixDialog: MatDialog,
    private sm: CustmeStateService,
    private rs: RootStateService,
    private stateService: StateService) {
    window['custme'] = this;

    this.sm.state$.subscribe(state=>{
      this.st = state;
    });
  }

  valueSheet = [
    {
      "q_no": "27",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 1(Rational Numbers)",
      "chapter_id": "1",
      "marks": "1"
    },
    {
      "q_no": "1",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 1(Rational Numbers)",
      "chapter_id": "1",
      "marks": "4"
    },
    {
      "q_no": "41",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 2(Data Handling)",
      "chapter_id": "2",
      "marks": "1"
    },
    {
      "q_no": "31",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 3(Square-Square Root & Cube-Cube Root)",
      "chapter_id": "3",
      "marks": "1"
    },
    {
      "q_no": "17",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 4(Linear Equation In One Variable)",
      "chapter_id": "4",
      "marks": "1"
    },
    {
      "q_no": "60",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 5(Understanding Quadrilaterals & Practical Geometry)",
      "chapter_id": "5",
      "marks": "1"
    },
    {
      "q_no": "23",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 6(Visualising The Solid Shapes)",
      "chapter_id": "6",
      "marks": "1"
    },
    {
      "q_no": "37",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 7(Algebraic Expression, Identities & Factorisation)",
      "chapter_id": "7",
      "marks": "1"
    },
    {
      "q_no": "35",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 8(Exponents & Powers)",
      "chapter_id": "8",
      "marks": "1"
    },
    {
      "q_no": "24",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 9(Comparing Quantities)",
      "chapter_id": "9",
      "marks": "1"
    },
    {
      "q_no": "19",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 10(Direct & Inverse Proportions)",
      "chapter_id": "10",
      "marks": "1"
    },
    {
      "q_no": "30",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 11(Mensuration)",
      "chapter_id": "11",
      "marks": "1"
    },
    {
      "q_no": "21",
      "category_id": "1",
      "category_name": "MCQ (one  correct)",
      "chapter_name": "Unit 13(Playing With Numbers)",
      "chapter_id": "13",
      "marks": "1"
    },
    {
      "q_no": "53",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 1(Rational Numbers)",
      "chapter_id": "1",
      "marks": "1"
    },
    {
      "q_no": "51",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 1(Rational Numbers)",
      "chapter_id": "1",
      "marks": "2"
    },
    {
      "q_no": "37",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 1(Rational Numbers)",
      "chapter_id": "1",
      "marks": "3"
    },
    {
      "q_no": "45",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 2(Data Handling)",
      "chapter_id": "2",
      "marks": "2"
    },
    {
      "q_no": "45",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 2(Data Handling)",
      "chapter_id": "2",
      "marks": "3"
    },
    {
      "q_no": "1",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 2(Data Handling)",
      "chapter_id": "2",
      "marks": "4"
    },
    {
      "q_no": "19",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 3(Square-Square Root & Cube-Cube Root)",
      "chapter_id": "3",
      "marks": "1"
    },
    {
      "q_no": "10",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 3(Square-Square Root & Cube-Cube Root)",
      "chapter_id": "3",
      "marks": "2"
    },
    {
      "q_no": "25",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 3(Square-Square Root & Cube-Cube Root)",
      "chapter_id": "3",
      "marks": "3"
    },
    {
      "q_no": "21",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 3(Square-Square Root & Cube-Cube Root)",
      "chapter_id": "3",
      "marks": "4"
    },
    {
      "q_no": "20",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 4(Linear Equation In One Variable)",
      "chapter_id": "4",
      "marks": "1"
    },
    {
      "q_no": "99",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 4(Linear Equation In One Variable)",
      "chapter_id": "4",
      "marks": "2"
    },
    {
      "q_no": "31",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 4(Linear Equation In One Variable)",
      "chapter_id": "4",
      "marks": "3"
    },
    {
      "q_no": "4",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 4(Linear Equation In One Variable)",
      "chapter_id": "4",
      "marks": "4"
    },
    {
      "q_no": "123",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 5(Understanding Quadrilaterals & Practical Geometry)",
      "chapter_id": "5",
      "marks": "2"
    },
    {
      "q_no": "61",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 5(Understanding Quadrilaterals & Practical Geometry)",
      "chapter_id": "5",
      "marks": "3"
    },
    {
      "q_no": "37",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 6(Visualising The Solid Shapes)",
      "chapter_id": "6",
      "marks": "1"
    },
    {
      "q_no": "16",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 6(Visualising The Solid Shapes)",
      "chapter_id": "6",
      "marks": "2"
    },
    {
      "q_no": "23",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 6(Visualising The Solid Shapes)",
      "chapter_id": "6",
      "marks": "3"
    },
    {
      "q_no": "6",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 6(Visualising The Solid Shapes)",
      "chapter_id": "6",
      "marks": "4"
    },
    {
      "q_no": "5",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 6(Visualising The Solid Shapes)",
      "chapter_id": "6",
      "marks": "5"
    },
    {
      "q_no": "1",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 7(Algebraic Expression, Identities & Factorisation)",
      "chapter_id": "7",
      "marks": "1"
    },
    {
      "q_no": "96",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 7(Algebraic Expression, Identities & Factorisation)",
      "chapter_id": "7",
      "marks": "2"
    },
    {
      "q_no": "154",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 7(Algebraic Expression, Identities & Factorisation)",
      "chapter_id": "7",
      "marks": "3"
    },
    {
      "q_no": "2",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 8(Exponents & Powers)",
      "chapter_id": "8",
      "marks": "1"
    },
    {
      "q_no": "37",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 8(Exponents & Powers)",
      "chapter_id": "8",
      "marks": "2"
    },
    {
      "q_no": "64",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 8(Exponents & Powers)",
      "chapter_id": "8",
      "marks": "3"
    },
    {
      "q_no": "3",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 9(Comparing Quantities)",
      "chapter_id": "9",
      "marks": "1"
    },
    {
      "q_no": "24",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 9(Comparing Quantities)",
      "chapter_id": "9",
      "marks": "2"
    },
    {
      "q_no": "19",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 9(Comparing Quantities)",
      "chapter_id": "9",
      "marks": "3"
    },
    {
      "q_no": "20",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 9(Comparing Quantities)",
      "chapter_id": "9",
      "marks": "4"
    },
    {
      "q_no": "31",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 10(Direct & Inverse Proportions)",
      "chapter_id": "10",
      "marks": "2"
    },
    {
      "q_no": "23",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 10(Direct & Inverse Proportions)",
      "chapter_id": "10",
      "marks": "3"
    },
    {
      "q_no": "4",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 11(Mensuration)",
      "chapter_id": "11",
      "marks": "1"
    },
    {
      "q_no": "25",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 11(Mensuration)",
      "chapter_id": "11",
      "marks": "2"
    },
    {
      "q_no": "38",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 11(Mensuration)",
      "chapter_id": "11",
      "marks": "3"
    },
    {
      "q_no": "2",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 11(Mensuration)",
      "chapter_id": "11",
      "marks": "4"
    },
    {
      "q_no": "25",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 13(Playing With Numbers)",
      "chapter_id": "13",
      "marks": "2"
    },
    {
      "q_no": "8",
      "category_id": "3",
      "category_name": "Subjective",
      "chapter_name": "Unit 13(Playing With Numbers)",
      "chapter_id": "13",
      "marks": "3"
    },
    {
      "q_no": "54",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 1(Rational Numbers)",
      "chapter_id": "1",
      "marks": "1"
    },
    {
      "q_no": "26",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 2(Data Handling)",
      "chapter_id": "2",
      "marks": "1"
    },
    {
      "q_no": "43",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 3(Square-Square Root & Cube-Cube Root)",
      "chapter_id": "3",
      "marks": "1"
    },
    {
      "q_no": "18",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 4(Linear Equation In One Variable)",
      "chapter_id": "4",
      "marks": "1"
    },
    {
      "q_no": "49",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 5(Understanding Quadrilaterals & Practical Geometry)",
      "chapter_id": "5",
      "marks": "1"
    },
    {
      "q_no": "21",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 6(Visualising The Solid Shapes)",
      "chapter_id": "6",
      "marks": "1"
    },
    {
      "q_no": "25",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 7(Algebraic Expression, Identities & Factorisation)",
      "chapter_id": "7",
      "marks": "1"
    },
    {
      "q_no": "26",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 8(Exponents & Powers)",
      "chapter_id": "8",
      "marks": "1"
    },
    {
      "q_no": "24",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 9(Comparing Quantities)",
      "chapter_id": "9",
      "marks": "1"
    },
    {
      "q_no": "19",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 10(Direct & Inverse Proportions)",
      "chapter_id": "10",
      "marks": "1"
    },
    {
      "q_no": "11",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 11(Mensuration)",
      "chapter_id": "11",
      "marks": "1"
    },
    {
      "q_no": "14",
      "category_id": "4",
      "category_name": "True or False",
      "chapter_name": "Unit 13(Playing With Numbers)",
      "chapter_id": "13",
      "marks": "1"
    },
    {
      "q_no": "29",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 1(Rational Numbers)",
      "chapter_id": "1",
      "marks": "1"
    },
    {
      "q_no": "1",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 1(Rational Numbers)",
      "chapter_id": "1",
      "marks": "2"
    },
    {
      "q_no": "26",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 2(Data Handling)",
      "chapter_id": "2",
      "marks": "1"
    },
    {
      "q_no": "31",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 3(Square-Square Root & Cube-Cube Root)",
      "chapter_id": "3",
      "marks": "1"
    },
    {
      "q_no": "19",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 4(Linear Equation In One Variable)",
      "chapter_id": "4",
      "marks": "1"
    },
    {
      "q_no": "44",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 5(Understanding Quadrilaterals & Practical Geometry)",
      "chapter_id": "5",
      "marks": "1"
    },
    {
      "q_no": "33",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 6(Visualising The Solid Shapes)",
      "chapter_id": "6",
      "marks": "1"
    },
    {
      "q_no": "27",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 7(Algebraic Expression, Identities & Factorisation)",
      "chapter_id": "7",
      "marks": "1"
    },
    {
      "q_no": "35",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 8(Exponents & Powers)",
      "chapter_id": "8",
      "marks": "1"
    },
    {
      "q_no": "28",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 9(Comparing Quantities)",
      "chapter_id": "9",
      "marks": "1"
    },
    {
      "q_no": "29",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 10(Direct & Inverse Proportions)",
      "chapter_id": "10",
      "marks": "1"
    },
    {
      "q_no": "26",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 11(Mensuration)",
      "chapter_id": "11",
      "marks": "1"
    },
    {
      "q_no": "19",
      "category_id": "5",
      "category_name": "Fill in the blanks",
      "chapter_name": "Unit 13(Playing With Numbers)",
      "chapter_id": "13",
      "marks": "1"
    }
  ];



  ngOnInit(): void { 
    this.sm.Attach();
  }

  add() {
    let csv = confirm('Type separated by comma');
  }

  addRow(): void {
    let valueSheet = this.vh.Set(this.valueSheet)
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
    let index = this.valueSheet.findIndex(i => (i.chapter_id == chid && i.category_id == catid && i.marks == marks));
    if (index != -1) this.valueSheet.splice(index, 1)
    return this;
  }

  //modifies valusheet by reference
  filterValuesheetfromAtMatrix() {
    return this.st.arrayTable[1].reduce((acc, i) => {
      return this.removeRowElementFromMatrixOf(i.chapter_id, i.category_id, i.marks);
    }, this.valueSheet)
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

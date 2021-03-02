import { Injectable } from '@angular/core';
import * as _ from 'underscore';
@Injectable({
  providedIn: 'root'
})
export class ArrayTableService {
  constructor() { }
  private from(jsontable) {
    return this.arrayTable(jsontable);
  }
  jsonTableToMatrix(table) {
    let matrix = table.map(row => {
      return Object.values(row);
    });
    return matrix;
  }

  colNames(jsonTable) {
    return Object.keys(jsonTable[0]);
  }

  arrayTable(jsonTable) {
    return [this.colNames(jsonTable), this.jsonTableToMatrix(jsonTable)];
  }

  f(x, mappingArr) {
    /*  mappingArr = 
      [3, 7, 4],
      [6, 9, 10]
  
      f(3,mappingArr) => 6
    */
    return mappingArr[1][mappingArr[0].indexOf(x)];
  }



  /*  mappingArr = 
    [3, 7, 4],
    [6, 9, 10]
 
    f(3,mappingArr) => 6
  */

  /*
    replaceColDataInArrayTable('chapter_id',at,mappingArr)    
  */

  replaceColDataInArrayTable(replaceColName, arrayTable, mappingArr) {
    let colNames = arrayTable[0];
    let matrix = arrayTable[1];
    let replacement_id_index = colNames.indexOf(replaceColName)

    matrix = matrix.map((item, idx) => {
      let x = item[replacement_id_index];
      let y = this.f(x, mappingArr);
      item[replacement_id_index] = y;
      return item;
    })
  }


  iDArray(CheckboxArray) {

    return [...CheckboxArray].map((item, i) => {
      return (Boolean(item)) ? i : false;
    }).filter(i => i)
  }
  //   index      =>  0    1          3                   7        
  //CheckboxArray = [null,null,null,true,null,null,null,true,null,null];
  //IDArray(CheckboxArray) => [3, 7]


  //idArray = [3,7]
  //checkboxArray(idArray) => 
  //      0                              3                                     7
  // [undefined, undefined, undefined, true, undefined, undefined, undefined, true, undefined, undefined]
  checkboxArray(IDArray, length) {
    let arr = Array(length);
    arr = [...arr];
    return arr.map((item, index) => {
      if (IDArray.indexOf(index) != -1) {
        //console.log(index)
        return true;
      }
      return item;
    });
  }


  iDColfrom(arrayTable, col_name) {
    let col_index = arrayTable[0].indexOf(col_name);
    return arrayTable[1].map((row, indx) => {
      return row[col_index];
    }).filter(item => item);
  }


  //used in above function to get the block index of question from its id
  //TODO function need to change out of body
  blockOf(questionID, questionsList) {
    return questionsList[questionID].blk;
  }

  stringArrayTointArray(arr: string[]): number[] {
    return arr.map(i => parseInt(i));
  }


  //matrix is array of elements [row1,row2,row3...]
  //matrix = [[1,2,2],[2,2,3],[2,3,3],[1,2,2],[1,2,2],[2,3,3]];

  //frequencyMatrix=[];
  // [[row1,f1],[row2,f2]]
  // f is frequency


  countFrequency(matrix, elem) {
    return matrix.reduce((carry, item) => {
      if (_.isEqual(item, elem)) { ++carry; }
      return carry;
    }, 0)
  }

  removeRow(matrix, elem) {
    return matrix.filter((item) => {
      return (!_.isEqual(item, elem));
    })
  }



  frequencyColumn(matrix) {
    let tMatrix = Object.assign([], matrix);
    let frequencyCol = [];
    while (tMatrix.length) {
      let elem = tMatrix[0];
      frequencyCol.push([elem, this.countFrequency(tMatrix, elem)]);
      tMatrix = this.removeRow(tMatrix, elem);
    }
    return frequencyCol;
  }

/* 
twoValJsonObj(['a',1],['b',2])
{a: 1, b: 2}
*/
  twoValJsonObj(c1,c2){
    let o = new Object();
    o[c1[0]]=c1[1]; o[c2[0]]=c2[1];
    return o;
  }

  /*
  {e1,e2,e3,e4,e1,e3}=> {e1,e2,e3,e4}
  */
  uniqueCollection(collection){
    return [... new Set(collection.map(i=>JSON.stringify(i)))].map(i=>JSON.parse(i as string))
  }

  /*
  pluck two col unique
  */
  entityArray(valueSheet,col1Name,col2Name){
    let collection= valueSheet.map(i=>( this.twoValJsonObj([col1Name,i[col1Name]],[col2Name,i[col2Name]])));
    return this.uniqueCollection(collection);
  }
}

/*
array_table
let table = [   //table type is JSONtable json format of collection
  {
    "chapter_id": 3,
    "category_id": 1,
    "marks": 0,
    "no": 3
  },
  {
    "chapter_id": 7,
    "category_id": 1,
    "marks": 1,
    "no": 6
  },
  {
    "chapter_id": 4,
    "category_id": 1,
    "marks": 0,
    "no": 5
  }
];

arrayTable=(jsonTable)=>{
 return [colNames(jsonTable),jsonTableToMatrix(jsonTable)]
}

jsonTable =
[{"chapter_id":3,"category_id":3,"marks":6,"q_no":3},{"chapter_id":7,"category_id":1,"marks":1,"q_no":6},{"chapter_id":4,"category_id":2,"marks":3,"q_no":5}]

array_tbl =
[
  [ "chapter_id","category_id","marks","q_no"],
  [3,3,6,3],
  [7,1,1,6],
  [4,2,3,5]
]
*/



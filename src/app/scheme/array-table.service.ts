import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayTableService {
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

  // to get 10 questions no val is to be replaced by 10;
  //replaceColDataInArrayTable('no',[10],row_at) 
  replaceColDataInArrayTable(replaceColName, replacementCol, arrayTable) {
    let colNames = arrayTable[0];
    let matrix = arrayTable[1];
    let replacement_id_index = colNames.indexOf(replaceColName)
    matrix = matrix.map((row, i) => {
      row[replacement_id_index] = replacementCol[i];
      return row;
    });
    return [colNames, matrix];
  }

  replaceChapterColInArrayTable(replacementCol,arrayTable){
    return this.replaceColDataInArrayTable('chapter_id',replacementCol, arrayTable);
  }


  iDArray(CheckboxArray) {

    return [...CheckboxArray].map((item, i) => {
      return (item === undefined) ? false : i;
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


  chapterIDColfrom(arrayTable) {
    return this.iDColfrom(arrayTable, 'chapter_id');
  }

  iDColfrom(arrayTable, col_name) {
    let col_index = arrayTable[0].indexOf(col_name);
    return arrayTable[1].map((row, indx) => {
      return row[col_index];
    });
  }


  //to get arrayTable for single question
  rowArrayTableOf(questionID, arrayTable, questionsList) {
    let rowMatrix = arrayTable[1][this.blockOf(questionID, questionsList)];
    return [arrayTable[0], [rowMatrix]];
  }

  //used in above function to get the block index of question from its id
  blockOf(questionID, questionsList) {
    return questionsList[questionID].blk;
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
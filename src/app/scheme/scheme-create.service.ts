import { Injectable } from '@angular/core';
import { ArrayTableService } from './array-table.service';

@Injectable({
  providedIn: 'root'
})
export class SchemeCreateService {
    constructor(private arrayHelper:ArrayTableService){  
    }

      //to get arrayTable for single question
  rowArrayTableOf(questionID, arrayTable, questionsList) {
    let rowMatrix = arrayTable[1][this.arrayHelper.blockOf(questionID, questionsList)];
    return [arrayTable[0], [rowMatrix]];
  }

  friendSchemeForSingleQuestion(question,arrayTable,noOfQuestions=1){
    let at = arrayTable;
    let row = at[1][question.blk]
    let n = noOfQuestions;
    
    row = row.map((i,idx)=>{
        return (at[0].indexOf('no')===idx)?n:i;
    })
    return [at[0],[row]];
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
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayTableService {
  from(jsontable) {
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
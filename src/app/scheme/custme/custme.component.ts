import { Component, OnInit } from '@angular/core';
import { ArrayTableService } from '../array-table.service';

@Component({
  selector: 'app-custme',
  templateUrl: './custme.component.html',
  styleUrls: ['./custme.component.css']
})
export class CustmeComponent implements OnInit {

  constructor(private ah: ArrayTableService) {
    window['custme']=this;
   }

  ngOnInit(): void {
  }

  add(){
    let csv = confirm('Type separated by comma');
  }

}

/* 
Q What data marix will be called ?
A Datrix.

Q What is frequency matrix called ?
A Frix.
*/

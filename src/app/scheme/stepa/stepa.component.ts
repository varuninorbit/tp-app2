import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-stepa',
  templateUrl: './stepa.component.html',
  styleUrls: ['./stepa.component.css']
})
export class StepaComponent implements OnInit {

  constructor(private dialog: MatDialog) { 
    window['stepa'] = this;
  }

  ngOnInit(): void {
  }
}

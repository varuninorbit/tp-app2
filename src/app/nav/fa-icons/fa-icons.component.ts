import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-fa-icons',
  templateUrl: './fa-icons.component.html',
  styleUrls: ['./fa-icons.component.css']
})
export class FaIconsComponent implements OnInit {
  @Input('fa-icon') faName:string;
  @Input() ihref:string;
  
  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { ShrimDataService } from '../shrim/shrim-data.service';

@Component({
  selector: 'scheme-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  author;
  scheme;

  constructor(private tepa: ShrimDataService) {
    this.author = tepa.tepa().author;
    this.scheme = tepa.tepa().scheme;
   }

  ngOnInit(): void {
  }

}

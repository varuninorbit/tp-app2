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
  allSchemes;
  allMarkingStyles;
  selectedMarkingStyle;

  constructor(private tepa: ShrimDataService) {
    const t = tepa.tepa();
    this.author = t.author;
    this.scheme = t.scheme;
    this.selectedMarkingStyle = t.scheme.marking_style
    this.allMarkingStyles = {
      mcq: [
        { right: 4, wrong: 1 },
        { right: 3, wrong: 1 },
        { right: 3, wrong: 2 },
      ],
      mcq2: [],
      tnf: []
    }
    window['testDetails'] = this;
  }

  ngOnInit(): void {
  }

}

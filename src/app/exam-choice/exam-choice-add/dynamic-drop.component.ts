import { Component, OnInit, Input } from "@angular/core";
import { INode } from "src/app/types/i-node";

@Component({
  selector: "app-dynamic-drop",
  template: `
    <div class="breadcrumb">
      <button
        type="button"
        class="btn btn-block  dropdown-toggle"
        data-toggle="dropdown"
      >
        {{ node[0].name }}
      </button>
      <div class="dropdown-menu">
        <a
          class="dropdown-item"
          (click)="selected([x])"
          *ngFor="let x of node[0].node"
        >
          {{ x.name }}
        </a>
      </div>
    </div>
    <div *ngIf="DoesInnerNodeExists()">
      <app-dynamic-drop [node]="selectedChoice"></app-dynamic-drop>
    </div>
  `,
  styles: []
})
export class DynamicDropComponent implements OnInit {
  @Input() node: INode[];
  blankSelectedChoice: INode[] = [{ name: "", node: [] }];
  selectedChoice: INode[] = [];

  constructor() {
    this.node=[];
    this.selectedChoice = this.blankSelectedChoice;
  }

  selected(selectedChoice: INode[]) {
    this.selectedChoice = selectedChoice; // so that if inner node does not exist lenght prop can be 0
  }

  DoesInnerNodeExists(): boolean {
    const hasNode = this.selectedChoice[0].hasOwnProperty('node');
    if(hasNode){
        return ( this.selectedChoice[0].node.length)?true:false;
    }    
  }

  ngOnInit() {}
}

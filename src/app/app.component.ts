import { Component, OnInit, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToggleMenuService } from './_services/toggle-menu.service';
import { MatSidenav } from '@angular/material/sidenav';
import { ActionService } from './services/action.service';
import { UserService } from './user.service';
import { store } from 'src/app/_services/store.service.js';
import { StateService } from './state.service';
import { GlobalService } from './_services';
import { RootStateService } from './root-state.service';
import { ExamChoiceStateService } from './exam-choice/exam-choice-state.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav, { static: true })
  menuRef;

  examChoiceName: string;
  constructor(private menu: ToggleMenuService, private zone: NgZone,
    private as: ActionService,
    private user: UserService,
    private state: StateService,
    private gs: GlobalService,
    private rootStateService: RootStateService,//TODO: Optmise: analysis inection.
    private examChoiceState: ExamChoiceStateService //TODO: Optmise: Shouln't be here technically
  ) {
    window['app'] = this;
    //let choiceName = this.gs.literal.resolve(store)('currentChoice.name'); //TODO: Optmise fix code to update exam choice      
  }

  ngOnInit() {
    //this.menu.opened
    window['appComp'] = this;
    this.state.state$.subscribe(state => {
      this.examChoiceName = state.currentChoice.name
    })

    this.examChoiceState.state$.subscribe(state => {
      this.examChoiceName = state.currentChoice.name;
    });    
  }
  mode = new FormControl('over');

  menuToggle(sidenav) {
    sidenav.toggle();
  }

  ngAfterViewInit() {

  }
}

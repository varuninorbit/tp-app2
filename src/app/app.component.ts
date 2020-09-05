import { Component, OnInit, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToggleMenuService } from './_services/toggle-menu.service';
import { MatSidenav } from '@angular/material/sidenav';
import { ActionService } from './services/action.service';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit  {
  @ViewChild(MatSidenav,{static:true}) 
  menuRef;
  constructor(private menu:ToggleMenuService, private zone: NgZone, 
    private as:ActionService,
    private user:UserService
    ){
  }

  ngOnInit(){
    //this.menu.opened
    window['appComp']=this;
  }
  mode = new FormControl('over');

  menuToggle(sidenav){
    sidenav.toggle();
  }

  ngAfterViewInit(){
    
  }
}

import { Injectable } from "@angular/core";
import { SubStateService } from 'src/app/sub-state.service';
import { Action2Service } from 'src/app/services/action2.service';
import { RootStateService } from 'src/app/root-state.service';
import { Cacheable } from 'ts-cacheable/dist/cjs/cacheable.decorator';
import { Subject} from 'rxjs';
import { Router } from '@angular/router';
import { ShrimDataService } from './shrim-data.service';

const cacheBusterObserver$:Subject<number> = new Subject();

const defaultState = {
    name:'',
    pin:''
};
 

@Injectable({
  providedIn: "root",
})

export class ShrimStateService extends SubStateService {  

  constructor(
    private ac: Action2Service, 
    private rootStateService: RootStateService,
    private shrimData: ShrimDataService
    ) {
      super();

      this.
      SetStateName('shrim').
      Init();

    if (0) {
      this.LOAD_STATE
    }    
  }


  get LOAD_STATE() {   
    return this;
  }

  get cashBuster$(){
    return cacheBusterObserver$;
  }
}
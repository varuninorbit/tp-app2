/*******************************
 * State loader for McqComponent
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StateService } from 'src/app/state.service';
import { GlobalService } from 'src/app/_services';
@Injectable({
    providedIn: "root",
})
export abstract class SubStateService {
    //initial state, transformation point
    defaultState: any;
    state: any;
    rootStateService: any;
    gs:any;
    stateName = '';
    parentState_:any;

    constructor(
        rootSateService: StateService,
        gs: GlobalService) {        
    }

    SetDefaultState(defaultState) {
        this.defaultState = defaultState;
        this.state = Object.assign({}, this.defaultState);
        return this;
    }




    public SetStateName(stateName: string) {
        this.stateName = stateName;
        return this;
    }

    public SetParentState(parentState) {
        this.parentState_ = parentState;
        return this;
    }

    Init() {        
        this.state = Object.assign({}, this.defaultState)
        this.AttachToParent();
        return this;
    }


    parentState() {
        return this.parentState_;
    }

    AttachToParent() {
        //substate does not exist create it
        if (this.parentState()[this.stateName] == undefined) {
            this.parentState()[this.stateName] = this.state;
        } else {
            this.state = this.parentState()[this.stateName];
        }
        return this;
    }
}


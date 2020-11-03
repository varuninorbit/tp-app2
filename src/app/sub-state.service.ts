/*******************************
 * Sub state class
 * This attaches sub state to a parent state.
 * state_ is tansformation point.
 *  any changes will be emitted. These changes are present in 
 *  state$ BehaviorSubject observable.
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { StateService } from 'src/app/state.service';
import { GlobalService } from 'src/app/_services';
@Injectable({
    providedIn: "root",
})
export abstract class SubStateService {    
    defaultState: any;
    state_: {};
    stateName = '';
    parentState_:any;
    state$:BehaviorSubject<any>; 

    constructor() {  
        this.state$ = new BehaviorSubject<any>(this.state_);      
    }

    set state(state_){
        this.state$.next(state_);
    }

    get state(){
        return this.state$.getValue();
    }

    SetDefaultState(defaultState) {
        this.defaultState = defaultState;        
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
        this.
        CopyDefaultStateToState().
        AttachToParent();
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

    CopyDefaultStateToState(){ 
        this.state = Object.assign({}, this.defaultState);
        return this;
    }

    UpdateState(callback){
        this.state$.next(callback(this.state));
    }

    get EMIT_STATE(){ 
        this.state$.next(this.state);
        return this;
    }

}


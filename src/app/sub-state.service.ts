/*******************************
 * Sub state class
 * This attaches sub state to a parent state.
 * state_ is tansformation point.
 *  any changes will be emitted. These changes are present in 
 *  state$ BehaviorSubject observable.
 */
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
    providedIn: "root",
})
export abstract class SubStateService {    
    defaultState: any;
    state_: {};
    stateName = '';
    parentState_:any;
    state$:BehaviorSubject<any>; 
    rootStateService:any;

    constructor() { 
        this.rootStateService = window['rootStateService'];
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
        AttachToParent().
        Attach()
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

    Attach(){
      let node = this.rootStateService.getNodesOfName(this.stateName)[0];
      if(node!=undefined) {
       if(node.model.state==undefined){
        node.model.state = this.state;
       }else{
        this.state = node.model.state;
       }
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


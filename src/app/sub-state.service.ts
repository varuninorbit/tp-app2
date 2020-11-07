/*******************************
 * Sub state class
 * This attaches sub state to a parent state.
 * state_ is tansformation point.
 *  any changes will be emitted. These changes are present in 
 *  state$ BehaviorSubject observable.
 */
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: "root",
})
export  abstract class SubStateService {    
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

    Init() {        
        this.
        CopyDefaultStateToState().
        Attach()
        return this;
    }

    get parent() {
        return this['rootStateService'].getNodesOfName(this.stateName)[0].parent;
    }

    Attach(){
      let node = this['rootStateService'].getNodesOfName(this.stateName)[0];
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

    removeChildren(){
        //deletes state of all children
        this['rootStateService'].getNodesOfName('examChoice')[0].children.forEach(node=>{ delete node.model.state; });

        //triggers cashBuster subject observable
        this['cashBuster$'].next();
    }

    

}


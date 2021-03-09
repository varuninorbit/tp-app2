/*******************************
 * Sub state class
 * This attaches sub state to a parent state.
 * state_ is tansformation point.
 *  any changes will be emitted. These changes are present in 
 *  state$ BehaviorSubject observable.
 */
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
    providedIn: "root",
})
export  abstract class SubStateService {
    //default state. If nothing is set this is used.    
    defaultState: any;

    //temp state variable;
    state_: {};

    //name of the state which is used in state tree.
    stateName = '';

    //reference of parent state where this state is attached 
    //as children
    parentState_:any;

    //state$ rxjs subject. It emits when state changes.
    state$:BehaviorSubject<any>; 

    constructor() {
        //rxjs initialized 
        this.state$ = new BehaviorSubject<any>(this.state_);      
    }

    //TODO: check if working in production
    //emits about new state when it is set.
    set state(state_){
        this.state$.next(state_);
    }

    //returns current state value from rxSubject.
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

    //initialized on each state.
    //this is to be called from children
    Init() {        
        this.
        CopyDefaultStateToState().
        Attach()
        return this;
    }

    //return parent state
    get parent() {
        return this['rootStateService'].getNodesOfName(this.stateName)[0].parent;
    }

    //attaches state to parent
    Attach(){
      let node = this['rootStateService'].getNodesOfName(this.stateName)
      .forEach(node => {          
        if(node!=undefined) { //node is defined
            if(node.model.state==undefined){ //node state is not defined
             node.model.state = this.state;
            }else{                           //node state is defined
             this.state = node.model.state;
            }
           }else{ //node is defined       
             if(node.model.state == undefined){   //state is undefined
                 node.model.state = this.state;
             }
           }
      });
     
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

    get REMOVE_CHILDREN(){
        //deletes state of all children
        this['rootStateService'].getNodesOfName('examChoice')[0]
        .children.forEach(node=>
            node.all().forEach(n=>{
                if(n.model.state){ delete n.model.state; }
            })
        );


        //triggers cashBuster subject observable
        this['cashBuster$'].next();
        return this;
    }  

}


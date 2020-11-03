import { Injectable } from '@angular/core';
import { store } from 'src/app/_services/store.service.js';
import { ResconService } from '../rescon.service';
import { StateService } from '../state.service';
import { LiteralService } from './literal.service';
import * as _ from 'underscore';
import * as Tree from 'tree-model';

@Injectable()
export class GlobalService{
    private tree_;

    get window(){
        return window;
    }

    constructor(private state_: StateService, 
        private literal_:LiteralService,
        private rescon:ResconService ){
    this.tree_ = new Tree();        
        
    }

    newOrDefaultValue(obj, defaultObj, nonExistingProp=null) {
        return new Proxy(obj,{
            get(obj, key) {
                if (!Reflect.has(obj, key)) {
                //console.log("Getting non-existent property '" + name + "'");
                return defaultObj[key] || nonExistingProp;
                } 
                return obj[key];
            }
        })
    }

    store(){
        return store;
    }

    state():StateService{
        return this.state_;
    }

    updateChoices({currentChoice,choices}){
        this.state_.updateState(state=>{
            state.currentChoice = currentChoice;
            state.choices = choices;
            return state;
        });
    }

    get literal(){
        return this.literal_;
    }   
    
    get _(){
        return _;
    }

    get tree(){
        return this.tree_;
    }
}
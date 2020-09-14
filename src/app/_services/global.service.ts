import { Injectable } from '@angular/core';
import { store } from 'src/app/_services/store.service.js';
import { StateService } from '../state.service';
@Injectable()
export class GlobalService{
    get window(){
        return window;
    }

    constructor(private state_: StateService){
        
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

    updateState(){
        this.state_.updateState(state=>{
            return state; //just to hit subscribers
        });
    }


    
}
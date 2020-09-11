import { Injectable } from '@angular/core';
import * as _ from 'underscore';
@Injectable()
export class GlobalService{
    get window(){
        return window;
    }

    constructor(){
         window['_']=_;
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
    
}
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
}
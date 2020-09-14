import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
@Injectable()
export class TriggerService{
    exp: any;
    constructor(private global:GlobalService){
         window['trigger']=this; //TODO window remove
    }

    hit(trigger){
        if(trigger.param){
            this[trigger.name][trigger.action](trigger.param)
            return 
        }
        this[trigger.name][trigger.action]()
        return 
    }

        
}
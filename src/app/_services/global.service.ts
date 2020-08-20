import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService{
    get window(){
        return window;
    }

    constructor(){
         
    }
}
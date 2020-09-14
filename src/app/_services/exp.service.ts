import { Injectable } from '@angular/core';
@Injectable()
export class ExpService{
   
    constructor(){
                 
    }  
    
    add(param){
        console.log('Adding...',param[0]+param)
    }
}
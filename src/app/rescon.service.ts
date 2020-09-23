import { Injectable } from '@angular/core';
import { IState } from './types/i-state';
import { BehaviorSubject } from 'rxjs';
import { state } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResconService {
    resources:[
        'first',
        'second',
        'third'
    ];
    resource$:BehaviorSubject<any>;
    index=[
        {chapter:3, r1:0},
        {chapter:1, r2:1},
        {chapter:2, r3:2}
    ];

    
    constructor_(resources){ //s3 is default value
        this.resources = resources;
        this.resource$ = new BehaviorSubject<any> (this.resources[0]);
        window['rescon']= this;
    }

    fetch(){
        let i=0;
        this.resource$.next(this.resources[i]);
    }

    latest(){
        return this.index.sort((i,j)=>{
            return (i.chapter<j.chapter)?1:-1;
           })[0];           
    }
}


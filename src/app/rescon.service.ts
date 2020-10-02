import { Injectable } from '@angular/core';
import { IState } from './types/i-state';
import { BehaviorSubject } from 'rxjs';
import { state } from 'src/environments/environment';
import { property } from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class ResconService {    
    resource$ = new BehaviorSubject<any>(null);

    directory: DirectoryRow[]=[
        {chapter:3, marks:1, from:'state'},     //state
        {chapter:1, marks:2, from:'store'},     //store
        {chapter:2, marks:3, from: 'web' }      //web
    ];

    resource={
        chapter:{
            state:()=>this.resource$.next('chapter from state'),
            store:()=>this.resource$.next('chapter from store'),
            web:()=>this.resource$.next('chapter from web'),
         },

         marks:{
            state:()=>this.resource$.next('marks from state'),
            store:()=>this.resource$.next('marks from store'),
            web:()=>this.resource$.next('marks from web'),
         }
    };

    
    constructor(){ //s3 is default value        
        window['rescon']= this;
    }

    fetch(resourceName:string){
        let from = this.latest(resourceName);
        this.resource[resourceName][from]();
    }

    //returns refrence name from directory
    private latest(resourceName:string) :string{
        return this.directory.sort((i,j)=>{
            return (i[resourceName]<j[resourceName])?1:-1;
           })[0].from;           
    }

    Updatedirectory(directoryRow: DirectoryRow){
        let from = directoryRow.from;
        this.directory[this.findIndexNoOf(from)]=directoryRow;
        return this;
    }

    private findIndexNoOf(resourceName): number{
        return this.directory.findIndex(row=> row.from===resourceName)
    }

    updateIndexOf(resourceName:string,property:string,newVal:number){
        this.directory[this.findIndexNoOf(resourceName)][property]=newVal;
        return this;
    }
}

interface DirectoryRow {
    from:string; //resouce name
    chapter?:number; //property
    marks?:number;   //property
}


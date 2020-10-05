//TODO obselete
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Urls } from "../../environments/environment";
import { Observable } from 'rxjs';
import { ActionService } from './action.service';
@Injectable({
  providedIn: "root",
})

export class ApiGroupVersion {
    private apiGroupUrl:string;
    constructor(private http: HttpClient){
        window['apiGroup'] = this;  
    }

    version(name:string): string{ //
        return window['apiVIndex'][name];
    }
    
}

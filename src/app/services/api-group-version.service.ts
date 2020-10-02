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
       this.apiGroupUrl = Urls.apiGroup;
    }

    version(name:string): Observable<any>{ //
        return this.http.get(this.apiGroupUrl+name+'.json');
    }
    
}

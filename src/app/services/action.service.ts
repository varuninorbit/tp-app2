import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Urls } from "../../environments/environment";
import { Observable } from "rxjs";
import { GlobalService } from "../_services";
@Injectable({
  providedIn: "root",
})
export class ActionService {
  private relativeURL = "api/conact/";

  constructor(private http: HttpClient, private global: GlobalService) {
    global.window['ac'] = this;
    window['http'] = http;
  }

  get(ControllerName: string, keyval = false,query='') {
    //action name callback
    return (ActionName: string) => {
      let actionUrl = `${Urls.apiServerUrl}${ControllerName}/${ActionName}`;

      if (keyval) {
        //keval callback
        return (data:any):Observable<any> =>{
          return this.http.get(actionUrl+'/keyval'+query,{params: data})
        }
      } else {
        //params callback
        return (...params: string[]): Observable<any> => {
          let query = params.join('&');
          return this.http.get(actionUrl+'?'+query);
        };
      }
    };
  }

  post(ControllerName: string, keyval = false,query='') {
    //action name callback
    return (ActionName: string) => {
      let actionUrl = `${Urls.base}${this.relativeURL}${ControllerName}/${ActionName}`;

      if (keyval) {
        //keval callback
        return (data:any):Observable<any> =>{
          return this.http.post(actionUrl+'/keyval'+query,data)
        }
      } else {
        //params callback
        return (...params: string[]): Observable<any> => {
          
          return this.http.post(actionUrl+query,params);
        };
      }
    };
  }
  


}

abstract class ActionAPI {
  //http://192.168.0.103:3001/ api/conact/ SomeAction/multiply?_params_[]=7&_params_[]=2
}

//action('SomeAction','multiply')(2,3).done(r=>console.log(r))


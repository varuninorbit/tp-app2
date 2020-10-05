import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Urls } from "../../environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ActionService {
  hemta: Hemta; //headers meta queries and defaults
  headers: HttpHeaders;
  apiGroupName='default';
  cache='' //empty string means no cache. cache='&cache' for caching
  constructor(private http: HttpClient) {
    window['ac'] = this;
    window['http'] = http;
    this.hemta = {
      baseURL: Urls.apiBase,
      everyQuery: Urls.everyQuery,
      relativeURL: Urls.relativeURL,
      apiGroup: 'default/',
      version:'0'
    };
    this.headers = new HttpHeaders();
  }

  UpdateHemta(callback) {
    callback(this.hemta);
    return this;
  }



  private get url() {
    return `${this.hemta.baseURL}${this.hemta.relativeURL}${this.hemta.apiGroup}`;
  }

  get(ControllerName: string, keyval = false, query = '') {
    //action name callback
    return (ActionName: string) => {
      let actionUrl = `${this.url}${ControllerName}/${ActionName}`;

      if (keyval) {
        //keval callback
        return (data: any): Observable<any> => {
          this.setCachingHemta(ControllerName+'.'+ActionName)          
          return this.http.get(actionUrl + '/keyval' + '?' + this._(query), { params: data })
        }
      } else {
        //params callback
        return (...params: string[]): Observable<any> => {
          let q = params.join('&') + '&' + query;
          this.setCachingHemta(ControllerName+'.'+ActionName)
          return this.http.get(actionUrl + '?' + this._(q));
        };
      }
    };
  }

  post(ControllerName: string, keyval = false, query = '') {
    //action name callback
    return (ActionName: string) => {
      let actionUrl = `${this.url}${ControllerName}/${ActionName}`;

      if (keyval) {
        //keval callback
        return (data: any): Observable<any> => { //todo type correction
          return this.http.post(actionUrl + '/keyval' + '?' + this._(query), data)
        }
      } else {
        //params callback
        return (...params: string[] | any): Observable<any> => { //todo type correction          
          return this.http.post(actionUrl + '?' + this._(query), params);
        }
      }
    };
  }

  private _(query) {
    return `${query}${this.hemta.everyQuery}&ver=${this.hemta.version}${this.cache}`;
  }

  //here ver={version name} is only for caching purpose till now
  // for request cahing 
  //use ac.CachedApiGroup({group name})('AExp')('chapter')('cache').subscribe(r=>console.log(r))
  setCachingHemta(resourceName) {
    this.UpdateHemta(hemta=>{           
      //let resourceName = 'chapters';
      hemta.apiGroup = this.apiGroupName + '/';
      hemta.version= window['apiVIndex'][this.apiGroupName][resourceName] || 0;
    })
  }  
  
  CachedApiGroup(apiGroupName='default'){
    this.cache='&cache';
    this.apiGroupName=apiGroupName; //TODO bug name is not set, http://localhost:4200/exam-choice
    return this;
  }
}

interface Hemta {
  headers?: string[];
  apiGroup?: string;
  everyQuery?: string; //shoud start with &
  query?: string;
  version?:string;
  baseURL: string;
  relativeURL: string;
}

abstract class ActionAPI {
  //http://192.168.0.103:3001/ api/conact/ SomeAction/multiply?_params_[]=7&_params_[]=2
}

//action('SomeAction','multiply')(2,3).done(r=>console.log(r))


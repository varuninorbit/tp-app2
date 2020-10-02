import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Urls } from "../../environments/environment";
import { Observable } from "rxjs";
import { ApiGroupVersion } from './api-group-version.service';
@Injectable({
  providedIn: "root",
})
export class ActionService {
  hemta: Hemta; //headers meta queries and defaults
  headers: HttpHeaders;
  constructor(private http: HttpClient, private apiGroup: ApiGroupVersion) {
    window['ac'] = this;
    window['http'] = http;
    this.hemta = {
      baseURL: Urls.apiBase,
      everyQuery: Urls.everyQuery,
      relativeURL: Urls.relativeURL,
      apiGroup: 'default/'
    };
    this.headers = new HttpHeaders();
  }

  UpdateHemta(callback) {
    this.hemta = callback(this.hemta);
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
          return this.http.get(actionUrl + '/keyval' + '?' + this._(query), { params: data })
        }
      } else {
        //params callback
        return (...params: string[]): Observable<any> => {
          let q = params.join('&') + '&' + query;
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
    return `${query}${this.hemta.everyQuery}`;
  }

  SetApiGroup(apiGroupName,resourceName, callback) {
    this.UpdateHemta(hemta => {
      this.apiGroup.version(apiGroupName).subscribe(r => {
        hemta.apiGroup = apiGroupName + '/';
        hemta.everyQuery += '&v' + r[resourceName];
        callback(this)
      })
      return hemta;
    })
    return this;
  }
}

interface Hemta {
  headers?: string[];
  apiGroup?: string;
  everyQuery?: string; //shoud start with &
  query?: string;
  baseURL: string;
  relativeURL: string;
}

abstract class ActionAPI {
  //http://192.168.0.103:3001/ api/conact/ SomeAction/multiply?_params_[]=7&_params_[]=2
}

//action('SomeAction','multiply')(2,3).done(r=>console.log(r))


import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Urls } from "../../environments/environment";
import { Observable } from "rxjs";
import { GlobalService } from '../_services';
import { ApiTokenService } from './api-token.service';
@Injectable({
  providedIn: "root",
})
export class Action2Service {
  hemta: Hemta; //headers meta queries and defaults
  headers: HttpHeaders;
  apiGroupName = 'default';
  cache = '' //empty string means no cache. cache='&cache' for caching
  constructor(private http: HttpClient, private gs: GlobalService, private api: ApiTokenService) {
    window['ac2'] = this;
    this.hemta = {
      baseURL: Urls.apiBase,
      everyQuery: Urls.everyQuery+`&api_token=${api.token}`,
      relativeURL: Urls.relativeURL,
      apiGroup: 'default',
      version: '0',
      keyval: false,
      cache: '' //&cache
    };
  }

  private get url() {
    return `${this.hemta.baseURL}${this.hemta.relativeURL}`;
  }

  get = (hemta_: Hemta = {}) => (resource: string) => {
    let r = resource.split('.');
    let ControllerName = r[0];
    let ActionName = r[1];
    let hemta: Hemta = this.gs.newOrDefaultValue(hemta_, this.hemta, '');
    let actionUrl = `${this.url}${hemta.apiGroup}/${ControllerName}/${ActionName}`;
    let version = window['apiVIndex'][hemta.apiGroup][resource] || hemta.version;
    let query = `${hemta.query}${hemta.everyQuery}&ver=${version}${hemta.cache}`;

    if (hemta.keyval) {
      //keval callback
      return (data: any): Observable<any> => {
        return this.http.get(actionUrl + '/keyval' + '?' + query, { params: data })
      }
    } else {
      //params callback
      return (...params: string[]): Observable<any> => {
        let q = params.join('&') + '&' + query;
        return this.http.get(actionUrl + '?' + q);
      };
    }
  }

  post = (hemta_: Hemta = {}) => (resource: string) => {
    let r = resource.split('.');
    let ControllerName = r[0];
    let ActionName = r[1];
    let hemta: Hemta = this.gs.newOrDefaultValue(hemta_, this.hemta, '');
    let actionUrl = `${this.url}${hemta.apiGroup}/${ControllerName}/${ActionName}`;
    let query = `${hemta.query}${hemta.everyQuery}`;

    if (hemta.keyval) {
      //keval callback
      return (data: any): Observable<any> => { //todo type correction
        return this.http.post(actionUrl + '/keyval' + '?' + query, data)
      }
    } else {
      //params callback
      return (...params: string[] | any): Observable<any> => { //todo type correction          
        return this.http.post(actionUrl + '?' + query, params);
      }
    }
  }

}

interface Hemta {
  headers?: string[];
  apiGroup?: string;
  everyQuery?: string; //shoud start with &
  query?: string;
  version?: string;
  baseURL?: string;
  relativeURL?: string;
  keyval?: boolean;
  cache?: string;
}

abstract class ActionAPI {
  //http://192.168.0.103:3001/ api/conact/ SomeAction/multiply?_params_[]=7&_params_[]=2
}

//action('SomeAction','multiply')(2,3).done(r=>console.log(r))


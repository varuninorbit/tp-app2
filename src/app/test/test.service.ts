import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of, BehaviorSubject } from 'rxjs';

@Injectable()
export class TestService {

 data:string;
 behaviorSubject:BehaviorSubject<string>;

  constructor(private http:HttpClient) {
    this.data='initial string has changed';
    this.behaviorSubject = new BehaviorSubject(this.data);
    this.behaviorSubject.subscribe((data)=>{
        console.log(data)
    });
   }

  getData():Observable<string> {
    return this.behaviorSubject
  }

  setMarks(data: string){
    this.data = data
  }

}

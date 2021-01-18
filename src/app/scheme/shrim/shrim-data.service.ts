/*******************************
 * This class creates tepa from rootstate 
 * */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RootStateService } from 'src/app/root-state.service';
import { state } from 'src/environments/environment';
import { property } from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class ShrimDataService {

  constructor(private rs: RootStateService) { }

  examChoice() {
    return this.rs.getSateOf('examChoice').currentChoice;
  }

  questionsNo() {
    return this.rs.getSateOf('chikoo').questionsList.length;
  }

  type_of_questions() {
    return 'mcq'
  }

  instructions() {
    return 'Attempt all questions'
  }
  author() {
    return {
      "name": "Varun Sharma",
      "email": "varuninorbit@gmail.com",
      "phone_no": "8000287267"
    };
  }

  institute() {
    return {
      "name": "Vector Classes",
      "address": "F216 Florence Pride, Sun Pharma Road",
      "phone_no": "0265-223333"
    };
  }

  description() {
    return "Jee Single chapter containing 30 Mcq questions.";
  }

  duration(){
    return "1 hour";
  }

  submission_time() {
    return "2010-06-09 13:12:01";
  }

  password() {
    this.rs.getSateOf('shrim').pin;
  }


  tepa={
      "scheme": {
        "id": this.examChoice().id,
        "name": this.examChoice().db_prefix,
        "description": this.description(),
        "questions_no": this.questionsNo(),
        "type_of_questions": this.type_of_questions(),
        "duration": this.duration(),    
        "instruction":this.instructions(), 
        "marking_style": {
          "mcq": 1
        }
      },
      "author": this.author(),
      "institute": this.institute(),
      "conset": {
        "submission_time": this.submission_time(),
        "marking_style": '',
        "instructions": this.instructions()
      },
      "password":this.password()
    }
  }





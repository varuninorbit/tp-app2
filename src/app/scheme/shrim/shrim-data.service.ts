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
  marking_style() {
    return {
      "mcq": {
        "right": 3,
        "wrong": -1
      }
    }
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


  tepa(){
    let m = this;
    return {
      "scheme": {
        "id": m.examChoice().id,
        "name": m.examChoice().db_prefix,
        "description": m.description(),
        "questions_no": m.questionsNo(),
        "type_of_questions": m.type_of_questions(),
        "duration": m.duration(),    
        "instruction":m.instructions(), 
        "marking_style": m.marking_style()
      },
      "author": m.author(),
      "institute": m.institute(),
      "conset": {
        "submission_time": m.submission_time(),
        "marking_style": m.marking_style(),
        "instructions": m.instructions()
      }
    }
  }

}



import { Injectable } from "@angular/core";
import { IQuestion } from "../types/i-question";
import { Observable, BehaviorSubject } from "rxjs";
import { map, switchMap , tap} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Urls } from "../../environments/environment";
import { ISelectedOptions, SelectedOptionsService } from "../selected-options.service";
import { GlobalService } from "./../_services/global.service";

abstract class AQobjSchema {
  version: number;
  schema: any;
}

abstract class AQobjModification {
  correction: (qobj:any) => any // todo correction types
}

class QobjSchema extends AQobjSchema {
  version: 1;
  schmea: any;
}

class QobjModification { //todo it should extend AQobjModification class
  correction(qobj: IQuestion) {
    qobj.question =  this.correction1(qobj.question);
    qobj.answer =  this.correction1(qobj.answer);
    return qobj;
  }

  private correction1=(string:string) =>{
    return typeof string === "string"
      ? string
          .replace(/[\r\n]/g, " ")
          .replace(/&quot;/g, "'") //remove new line characters ->image correction
          .replace(/\$\\x/, "$\\\\x") //escapes latex rightarrow type code for hex
      : string;
  }
}

@Injectable()
export class QuestionsService {
  url_: string;
  questions: IQuestion[];
  readonly behaviourSubject = new BehaviorSubject<IQuestion[]>(null);

  private qobjModification
  constructor(private httpClient: HttpClient, 
    private selectedOptions: SelectedOptionsService,
    private gs: GlobalService
    ) 
    
  {    
    this.url_ = Urls.questionsAPI;
    this.qobjModification =  new QobjModification();
  }

  loadQuestions(): Observable<IQuestion[]> {
    return this.behaviourSubject.pipe(
      map(questions => {
        return questions.map<IQuestion>(que=>{
          return this.modifyQuestion(que);
        })
      })
    );
  }

  updateQuestions(){
    let $ = this.gs["window"]['$'];
    $.get(this.url()).then(r=>{
        this.behaviourSubject.next(r)
    });
  }

  modifyQuestion(que:IQuestion){
    return this.qobjModification.correction(que);
  }

  url(){
    const ch = '1,2,3';
    return 'http://192.168.0.103:3001/exp/questionv2?'+QuestionURL.url(this.selectedOptions.selected);
  }

  reload(){

  }
}

abstract class AQuestionURL{
  static url:(options: ISelectedOptions)=>string;
}
class QuestionURL extends AQuestionURL{
  static url(options: ISelectedOptions): string{ 
    let marks = 'm='+options.marks.join(',');
    let chapters = 'ch='+options.chapters.join(',');
    let category = 'cat='+options.category.join(',');   
    return '&std=8&sub=mat&p_no=1&q_nos=10&'+chapters+'&'+marks+'&'+category;
  }
}
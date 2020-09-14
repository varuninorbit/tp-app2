import { IChapter, IExamChoice } from './i-exam-choice';
import { IScheme } from './i-scheme';
import { IQuestionsList } from './i-questions-list';

export interface IState {
    chapters?:IChapter[];
    selectedChapters?:number[];
    currentScheme?:IScheme;
    arrayTable?:any //todo change type,
    questionsList?:IQuestionsList,
    currentChoice?:IExamChoice,
    choices?:IExamChoice[]
}
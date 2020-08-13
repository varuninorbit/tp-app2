import { IChapter } from './i-exam-choice';
import { IScheme } from './i-scheme';

export interface IState {
    chapters?:IChapter[];
    selectedChapters?:number[];

    scheme?:IScheme;    
}
  
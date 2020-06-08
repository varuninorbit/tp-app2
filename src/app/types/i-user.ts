import { IExamChoice } from "./i-exam-choice";

export interface IUser {
  choices: {
    favChoices: IExamChoice[];
    selectedChoice: IExamChoice;
    id: number;
    name: string;
    phone: string;
    email: string;
  };
}

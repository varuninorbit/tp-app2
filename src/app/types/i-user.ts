import { IExamChoice } from "./i-exam-choice";

export interface IUser {
  id?: number;
  username: string;
  email:string;
  password?: string;
  firstName?: string;
  lastName?: string;
  token?:string;
}


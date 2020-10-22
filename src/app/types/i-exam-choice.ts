export interface IExamChoice{
    name:string;
    id:string;
    db_prefix:string;
    chapters?:IChapter[];
    marks?: number[];
    categories?: ICategory[];
}

export interface Marks {}


export interface IChapter{
    chapter: string;
    id: string;
}


export interface ICategory{
    name: string;
    id: string;
}


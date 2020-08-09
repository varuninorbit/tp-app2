export interface SchemeTable {
    id: number;
    chapter_id: number;
    marks: number;
}

export interface Scheme {
    id: number;
    name: string;
    description: string;
    table?: SchemeTable[];
}
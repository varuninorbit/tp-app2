export interface ISchemeTable {
    id: number;
    chapter_id: number;
    marks: number;
}

export interface IScheme {
    id: number;
    name: string;
    description: string;
    table?: ISchemeTable[];
}
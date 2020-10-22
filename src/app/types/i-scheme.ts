export interface ISchemeTable {
    id?: number;
    chapter_id: number;
    category_id:number;
    marks: number;
    no: number;
}
/**
 * "chapter_id": 1,
            "category_id": 1,
            "marks": 1,
            "no": 5
 * 
 */

export interface IScheme {
    id: number;
    name: string;
    description: string;
    table?: ISchemeTable[];
}
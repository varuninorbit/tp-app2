export interface IChickooState {
    chapters: {
        id: string;
        chapter: string;
    }[];
    categories: {
        id: string;
        name: string;
    }[];
    questionsList: {
        id: string;
        question: string;
        answer: string;
        category_id: string;
        chapter_id: string;
        marks: string;
        blk: string;
    }[];
};
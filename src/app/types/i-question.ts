export interface IQuestion {
  id: number;
  question: string;
  answer: string;
  marks: number;
  type_id: null | string;
  category_id: number;
  level_id: null | number;
  chapter_id: number;
  created_at: string;
  updated_at: string;
  status: number;
  uploaded_by: number;
  approved_by: null | number;
  approved_at: null | string;
  file_id: number;
}
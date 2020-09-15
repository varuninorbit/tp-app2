export interface INode {
  name: string;
  parentName?: string;
  node?: INode[];
  id?:string
}
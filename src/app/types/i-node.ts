export interface INode {
  name: string;
  parentName?: string;
  node?: INode[];
}
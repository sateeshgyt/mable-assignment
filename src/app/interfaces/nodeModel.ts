export interface NodeModel {
  type: 'folder' | 'files' | 'unset' | null,
  name: string;
  children: NodeModel[];
  id: string;
}

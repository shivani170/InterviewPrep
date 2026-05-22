type BaseNode = {
  name: string;
  id: number
};

export type ConfigJson =
  | (BaseNode & {
      isFolder: true;
      isOpen: boolean;
      children: ConfigJson[];
    })
  | (BaseNode & {
      isFolder: false;
      children: [];
      isOpen: boolean;
    });
export interface iTechContext {
  loading: boolean;
  createTechnology: (params: iNewTech) => void;
  listTechs: iTech[];
  showModalNewTech: boolean;
  setShowModalNewTech: React.Dispatch<React.SetStateAction<boolean>>;
  showModalEditTech: boolean;
  setShowModalEditTech: React.Dispatch<React.SetStateAction<boolean>>;
  techEdit: iTech;
  setTechEdit: React.Dispatch<React.SetStateAction<iTech>>;
  editTechnology: (params: iEditTech) => void;
  deleteTechnology: (params: string) => void;
}

export interface iTech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface iNewTech {
  title: string;
  status: string;
}

export interface iEditTech {
  status: string;
}

export interface iPropsTechContext {
  children: React.ReactNode;
}

export interface iPropsCardTech {
  tech: iTech;
  children: React.ReactNode;
}

export interface iTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

interface Meta {
  description: string;
  image: string;
  title: string;
  type: string;
}

export interface Dairy {
  content: string;
  created_by: string | null;
  created_dt: string;
  id: string;
  meta: Meta;
  status: string;
}

export interface Content {
  title: string;
  url: string;
  description: string;
  imageUrl: string;
  id: string;
}

export interface ContentKind {
  nextPage: string;
  description: string;
  imageUrl: string;
  color: string;
  id: string;
  contents: Content[];
}

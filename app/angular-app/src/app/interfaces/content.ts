export interface Content {
  title: string;
  url: string;
  description: string;
  imageUrl: string;
  id: string;
}

export interface ContentKind {
  title: string;
  nextPage: string;
  description: string;
  imageUrl: string;
  colorSet: {
    primary: {
      color: string;
      primaryShadow: {
        primary: string;
        second: string;
      };
      secondaryShadow: {
        primary: string;
        second: string;
      };
    };
    secondary: {
      color: string;
      primaryShadow: {
        primary: string;
        second: string;
      };
      secondaryShadow: {
        primary: string;
        second: string;
      };
    };
  };
  id: string;
  contents: Content[];
}

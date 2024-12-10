export interface IErrorAxios {
  response: {
    data: {
      error: {
        message?: string;
      };
      data ?: IArticle[]
    }
    };
};

export interface IuserData {
  jwt: string;
  user: {
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    documentId: string;
    username: string;
    email: string;
    id: number;
    provider: string;
    publishedAt: string;
    updatedAt: string;
  };
}

export interface IArticle {
  id: number;
  documentId: string;
  title: string;
  description: string;
  thumbnail: {
    id: number;
    documentId: string;
    url: string;
  }
}

export interface ArticlesResponse {
  data: IArticle[];
}
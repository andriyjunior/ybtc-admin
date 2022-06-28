export type TObjectId = {
  _id: string;
};

export type Response<T> = {
  data: T | null;
  message: string;
  success: boolean;
};

export interface ILang {
  en: string;
  ua: string;
}

export interface PageDTO extends TObjectId {
  route: string;
  meta: {
    title: ILang;
    description: ILang;
  };
  body: ILang;
}

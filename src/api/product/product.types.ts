import { TCategory } from "api/category";

export type TSizeProduct = string;

export interface IPostProductPayload {
  brand: string;
  category: string;
  name: string;
  color: string;
  size: TSizeProduct[];
  amount: number;
  price: number;
}

export interface ProductDTO {
  category: TCategory;
  name: string;
  brand: string;
  color: string;
  size: TSizeProduct[];
  amount: string;
  price: string;
}

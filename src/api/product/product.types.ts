import { Response } from "api";
import {
  BrandDTO,
  ColorDTO,
  ProductDTO,
  SizeProductDTO,
  SubCategoryDTO,
  CategoryDTO,
} from "api";

export interface IProductOptions {
  categories: CategoryDTO[];
  subCategories: SubCategoryDTO[];
  brands: BrandDTO[];
  colors: ColorDTO[];
  sizes: SizeProductDTO[];
}

export type IProductOptionsResponse = Response<IProductOptions>;
export type IProductResponse = Response<ProductDTO>;

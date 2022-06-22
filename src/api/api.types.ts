export type TObjectId = {
  _id: string;
};

export type Response<T> = {
  data: T | null;
  message: string;
  success: boolean;
};

export interface ProductDTO extends TObjectId {
  category: CategoryDTO;
  subCategory: SubCategoryDTO;
  name: string;
  description: string;
  brand: BrandDTO;
  colors: ColorDTO[];
  sizes: SizeProductDTO[];
  amount: number;
  price: number;
  images: ProductImagesDTO;
  feedback: FeedbackDTO[];
}

export interface CategoryDTO extends TObjectId {
  name: string;
  subCategories?: SubCategoryDTO[];
  image?: string;
}

export interface SubCategoryDTO extends TObjectId {
  name: string;
  category: CategoryDTO;
  products: ProductDTO[];
  image?: string;
}

export interface ColorDTO extends TObjectId {
  color: string;
  cssColor: string;
}

export interface SizeProductDTO extends TObjectId {
  size: string;
}

export interface ProductImagesDTO {
  main: string;
  other: string[];
}

export interface FeedbackDTO extends TObjectId {
  username: string;
  message: string;
  createdAt: string;
}

export interface BrandDTO extends TObjectId {
  name: string;
}

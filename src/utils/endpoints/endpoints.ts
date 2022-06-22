export const endpoints = {
  initial: "initial",
  product: "product",
  productById: (id: string) => `product/${id}`,
  productOptions: "product-options",
  category: "category",
  subCategory: (id: string) => `sub-category/${id}`,
};

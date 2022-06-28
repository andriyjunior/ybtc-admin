export const endpoints = {
  initial: "initial",
  product: "product",
  productById: (id: string) => `product/${id}`,
  productOptions: "product-options",
  category: "category",
  subCategory: (id: string) => `sub-category/${id}`,

  page: "page",
  pages: "pages",
  pageByName: function (name: string) {
    return `${this.page}/${name}`;
  },
};

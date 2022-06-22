import { endpoints, request } from "utils";
import { IProductResponse } from "./product.types";

export const getProducts = () => {
  return request.get<IProductResponse>(endpoints.product);
};

export const getProductById = (id: string) => {
  return request.get<IProductResponse>(endpoints.productById(id));
};

export const postProduct = (body: {}) => {
  return request.post(endpoints.product, body);
};

export const removeProduct = (id: string) => {
  return request.delete(`${endpoints.product}/${id}`);
};

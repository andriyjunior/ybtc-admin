import { endpoints, request } from "utils";
import { IPostProductPayload } from "./product.types";

export const getProducts = () => {
  return request.get(endpoints.product);
};

export const postProduct = (body: IPostProductPayload) => {
  return request.post(endpoints.product, body);
};

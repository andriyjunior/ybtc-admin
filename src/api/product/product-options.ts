import { endpoints, request } from "utils";

export const getProductOptions = () => {
  return request.get(endpoints.productOptions);
};

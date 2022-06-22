import { endpoints, request } from "../../utils";
import { SubCategoryResponse } from "./sub-category.types";

export const getSubCategories = (id: string) => {
  return request.get<SubCategoryResponse>(endpoints.subCategory(id));
};

// export const getCategoryById = (id: string) => {
//   return request.get(`${endpoints.subCategory}/${id}`);
// };

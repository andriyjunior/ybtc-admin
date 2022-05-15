import { endpoints, request } from "utils";

interface IGetCategories {
  withProducts?: boolean;
}

export const getCategories = ({ withProducts = false }: IGetCategories) => {
  return request.get(`${endpoints.category}/?withProducts=${withProducts}`);
};

export const getCategoryById = (id: string) => {
  return request.get(`${endpoints.category}/${id}`);
};

import { PageDTO } from "api/api.types";
import { endpoints, request } from "utils";
import { GetPageResponse, GetPagesResponse } from "./page.types";

export const getPages = () => {
  return request.get<GetPagesResponse>(`${endpoints.pages}`);
};

export const getPage = (name: string) => {
  return request.get<GetPageResponse>(`${endpoints.pageByName(name)}`);
};

export const postPage = (body: Omit<PageDTO, "_id">) => {
  return request.post<GetPageResponse>(`${endpoints.page}`, body);
};

export const putPage = (name: string, body: Omit<PageDTO, "_id">) => {
  return request.put<GetPageResponse>(`${endpoints.pageByName(name)}`, body);
};

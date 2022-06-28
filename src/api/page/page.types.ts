import { PageDTO } from "api/api.types";

export interface GetPagesResponse {
  data: PageDTO[];
  success: boolean;
  message: string;
}

export interface GetPageResponse {
  data: PageDTO;
  success: boolean;
  message: string;
}

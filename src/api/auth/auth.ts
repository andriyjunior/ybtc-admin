import { endpoints, request } from "utils";
import { IAuth, IAuthResponse } from "./auth.types";

export const signIn = (body: IAuth) => {
  return request.post<IAuthResponse>(`${endpoints.auth.signIn}`, body);
};

export const signUp = (body: IAuth) => {
  return request.post<IAuthResponse>(`${endpoints.auth.signUp}`, body);
};

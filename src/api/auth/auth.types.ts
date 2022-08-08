import { Response, UserDTO } from "../api.types";

export interface IAuth {
  name: string;
  password: string;
}

export type IAuthResponse = Response<UserDTO>;

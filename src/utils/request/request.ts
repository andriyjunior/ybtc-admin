import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "utils/auth";

const { REACT_APP_URL_API, REACT_APP_API_VERSION } = process.env;

const baseURL = `${REACT_APP_URL_API}/${REACT_APP_API_VERSION}`;

const request = axios.create({ baseURL });

const onRequest = (config: AxiosRequestConfig) => {
  const token = getToken();

  if (!token) {
    return config;
  }

  config.headers = {
    "jwt-access-token": token,
  };

  return config;
};

request.interceptors.request.use(async (config) => {
  onRequest(config);

  return config;
});

export { request };

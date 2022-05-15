import axios from "axios";

const { REACT_APP_URL_API, REACT_APP_API_VERSION } = process.env;

const baseURL = `${REACT_APP_URL_API}/${REACT_APP_API_VERSION}`;

const request = axios.create({ baseURL });

export { request };

import { endpoints, request } from "utils";

export const getInitialOptions = () => request.get(endpoints.initial);

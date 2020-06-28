import axios, { AxiosRequestConfig } from "axios";
const defaultConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:4001",
};
export const axiosInstance = axios.create(defaultConfig);

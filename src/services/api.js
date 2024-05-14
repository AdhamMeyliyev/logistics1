import axios from "axios";
// import { getItem } from "../helpers/storege";

axios.defaults.baseURL = "http://164.90.171.135:8080";

axios.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  const authorization = token ? `Bearer ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;

import axios from "axios";
import { BASE_API_URL } from "../url/api";

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
});

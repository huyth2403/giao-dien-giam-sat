import axios from "axios";
export const instance = axios.create({
  baseURL: 'http://34.124.188.122:8085',
  timeout: 30000
});
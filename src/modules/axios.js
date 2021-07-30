import axios from "axios";

const baseURL = "http://localhost:8080";
export const customAxios = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  withCredentials: true,
});

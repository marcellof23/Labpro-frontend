import axios from "axios";

// const baseURL = "http://localhost:8080";
const baseURL =  "https://api.marcellof.me",
export const customAxios = axios.create({
  baseURL,
  headers: {
    //"Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Origin": "https://marcellof.me",
  },
  withCredentials: true,
});

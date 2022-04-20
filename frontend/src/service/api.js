import axios from "axios";

const api = axios.create({
  baseURL: "http://3.145.198.0:8080/", //aqui será a URL da nossa API
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default api;

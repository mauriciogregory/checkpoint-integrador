import axios from "axios";

const api = axios.create({
  baseURL: "http://3.17.135.191:8080", //aqui será a URL da nossa API
});

export default api; 



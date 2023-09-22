import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
console.log(baseUrl);

const api = axios.create({
  baseURL: baseUrl,
});

export default api;

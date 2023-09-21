import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const api = axios.create({
  baseURL: baseUrl,
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  },
});

export default api;

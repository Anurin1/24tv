import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  },
});

export default api;
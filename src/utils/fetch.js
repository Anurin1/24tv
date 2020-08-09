import config from "../config/config";
import api from "./api";

export async function fetchVideoURL(id) {
  try {
    const res = await api.get(
      `movie/${id}/videos?api_key=${config.movieKey}&language=${config.language}`
    );

    return res.data.results[0];
  } catch (err) {
    return null;
  }
}

export async function fetchMovie(id) {
  try {
    const res = await api.get(
      `movie/${id}?api_key=${config.movieKey}&language=${config.language}`
    );

    return res.data;
  } catch (err) {
    return null;
  }
}

export async function fetchPopularMovies() {
  const res = await api.get(
    `movie/popular?api_key=${config.movieKey}&language=${config.language}&page=1`
  );
  return res.data.results;
}

export async function fetchSearchResult(input) {
  const res = await api.get(
    `search/movie?api_key=${config.movieKey}&language=${config.language}&query=${input}&page=1&include_adult=${config.includeAdult}`
  );
  return res.data.results;
}

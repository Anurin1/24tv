import api from "../utils/api";
import config from "../config/config";

import { addAlert } from "./alerts";

export function fetchMovies(category) {
  return async dispatch => {
    switch (category) {
      case "popular":
        try {
          const res = await api.get(
            `movie/popular?api_key=${config.movieKey}&language=${config.language}&page=1`
          );
          return dispatch(addMovies(res.data.results, category));
        } catch (err) {
          addAlert(err.message);
        }

      default:
        return dispatch(addAlert("Something went wrong."));
    }
  };
}

export function addMovies(movies, category) {
  return async dispatch => {
    dispatch({ type: "ADD_MOVIES", movies, category });
  };
}

export function fetchSearch(input) {
  return async dispatch => {
    try {
      const res = await api.get(
        `search/movie?api_key=${config.movieKey}&language=${config.language}&query=${input}&page=1&include_adult=${config.includeAdult}`
      );

      dispatch({ type: "ADD_SEARCH", movies: res.data.results });
    } catch (err) {
      addAlert(err.message);
    }
  };
}

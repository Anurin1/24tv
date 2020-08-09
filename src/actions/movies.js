


import { addAlert } from "./alerts";

import { fetchPopularMovies, fetchSearchResult } from "../utils/fetch";

export function fetchMovies(category) {
  return async dispatch => {
    switch (category) {
      case "popular":
        try {
          const movies = await fetchPopularMovies();
          return dispatch(addMovies(movies, category));
        } catch (err) {
          addAlert(err.message);
        }
        break;
      default:
        return dispatch(addAlert("Something went wrong."));
    }
  };
}

export function addMovies(movies, category) {
  return async (dispatch, getState) => {
    dispatch({ type: "ADD_MOVIES", movies, category });
  };
}

export function fetchSearch(input) {
  return async dispatch => {
    try {
      const movies = await fetchSearchResult(input);

      dispatch({ type: "ADD_SEARCH", movies });
    } catch (err) {
      addAlert(err.message);
    }
  };
}

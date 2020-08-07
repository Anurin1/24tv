import api from "../utils/api"


export function fetchMovies(category) {
  return async dispatch => {
    // dispatch({ type: "SET_LOADING" });

    const res = await api.get(`/popular?api_key=24f236a5226844fd146103fb45ff24f2&language=en-US&page=1`);
    console.log("fetchResults -> res", res)

    dispatch({ type: "SAVE_MOVIES", movies: res.data.results });
    // dispatch({ type: "REMOVE_LOADING" });
  };
}

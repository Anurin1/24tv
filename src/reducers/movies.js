const initialState = {
  popularMovies: [],
  popularSeries: [],
  family: [],
  documentary: [],
};

export default function (state = initialState, action) {
  switch (action.type) {

    case "SAVE_MOVIES": {
      const { movies } = action;
      return {
        ...state,
        popularMovies: movies,
      };
    }
    

    default:
      return state;
  }
}

// -- Selectors
export function getMovies(state) {
  return state.movies.popularMovies;
}



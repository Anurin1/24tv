const initialState = {
  category: {
    popular: [],
    search: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIES": {
      const { movies, category } = action;

      // Sorts movies by popularity.
      movies.sort((a, b) => b.popularity - a.popularity);

      return {
        ...state,
        category: {
          ...state.category,
          [category]: movies,
        },
      };
    }

    case "ADD_SEARCH": {
      const { movies } = action;

      return {
        ...state,
        category: {
          ...state.category,
          search: movies,
        },
      };
    }

    default:
      return state;
  }
}

// -- Selectors
export function getMovies(state, category) {
  return state.movies.category[category];
}

export function getSearch(state) {
  return state.movies.category.search;
}

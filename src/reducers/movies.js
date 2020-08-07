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

      // Sorts movies by popularity.
      movies.sort((a, b) => b.popularity - a.popularity);

      // Adds url title name to every movie.
      const updated = movies.map(movie => {
        return {
          ...movie,
          urlTitle: movie.title.toLowerCase().replace(/[.:?"'!]/g, "").replace(/\s/g, "-"),
        }
      })

      return {
        ...state,
        popularMovies: updated,
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

function sortByPopularity(movies) {
  const sorted = movies.sort((a, b) => {
    return b.popularity - a.popularity;
  });
  return sorted;
}

function getURLTitle(movie) {
  movie.urlTitle = movie.title.toLowerCase().replace(/\s/g, "-");
}

export function getMovie(state, movieURL) {
  return state.movies.popularMovies.find(movie => movie.urlTitle === movieURL);
}

const initialState = {
  category: {
    popular: [],
    search: null,
  },
  
  selectedMovie: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIES": {
      const { movies, category } = action;

      // Sorts movies by popularity.
      movies.sort((a, b) => b.popularity - a.popularity);

      // Adds url title name to every movie.
      const updated = movies.map(movie => {
        return {
          ...movie,
          urlTitle: getURLTitle(movie.title),
        }
      })

      return {
        ...state,
        category: {
          ...state.category,
          [category]: updated,
        }
      };
    }
    case "ADD_SELECTED_MOVIE": {
      const { movie } = action;


      return {
        ...state,
        selectedMovie: movie
      };
    }

    case "ADD_SEARCH": {
      const { movies } = action;
      console.log("movies", movies)
  
      const updated = movies.map(movie => {
        return {
          ...movie,
          urlTitle: getURLTitle(movie.title),
        }
      })


      return {
        ...state,
        category: {
          ...state.category,
          search: updated,
        }
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

export function getSelectedMovie(state, category, movieName) {
  return state.movies.selectedMovie;
}

function sortByPopularity(movies) {
  const sorted = movies.sort((a, b) => {
    return b.popularity - a.popularity;
  });
  return sorted;
}

// function getURLTitle(movie) {
//   movie.urlTitle = movie.title.toLowerCase().replace(/\s/g, "-");
// }

export function getMovie(state, category, movieName) {
  return state.movies.category[category].find(movie => movie.urlTitle === movieName);
}


export function getURLTitle(name) {
  return name.toLowerCase().replace(/[.:?"'!]/g, "").replace(/\s/g, "-")
}
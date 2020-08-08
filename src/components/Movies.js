import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../actions";

import { getMovies } from "../reducers/movies";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const IMG_PATH = "https://image.tmdb.org/t/p/w154";
const CATEGORIES = {
  popular: "Popular movies",
};

class Movies extends Component {
  componentDidMount() {
    const { category } = this.props;
    this.props.fetchMovies(category);
  }

  renderMovies() {
    const { movies, category } = this.props;

    return movies.map((movie, i) => {
      // !comment
      if (/null$/.test(movie.poster_path)) {
        return null;
      }

      return (
        <Link to={`/movies/${category}/${movie.urlTitle}`}>
          <img
            src={IMG_PATH + movie.poster_path}
            key={movie.original_title}
            className="img-movie"
          />
        </Link>
      );
    });
  }

  render() {
    const { movies, category } = this.props;

    //! add loading
    if (movies.length === 0) {
      return (
        <div>
          <p>Nothing found</p>
        </div>
      );
    }

    return (
      <div>
        <h2>{CATEGORIES[category]}</h2>
        <Carousel
          slidesPerPage={8}
          slidesPerScroll={1}
          offset={30}
          itemWidth={154}
        >
          {this.renderMovies()}
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps;

  return {
    movies: getMovies(state, category),
  };
};

export default connect(mapStateToProps, {
  fetchMovies: actions.fetchMovies,
  addSelectedMovie: actions.addSelectedMovie,
})(Movies);

// export default Carousel;
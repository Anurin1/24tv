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
  search: "Search results",
};

class Movies extends Component {
  componentDidMount() {
    const { category } = this.props;
    this.props.fetchMovies(category);
  }

  renderMovies() {
    const { movies } = this.props;

    return movies.map((movie, i) => {
      // Doesn't show movie if the movie doesn't have a poster image.
      if (!movie.poster_path) {
        return null;
      }

      return (
        <Link
          to={`/browse/${movie.id}`}
          key={`${movie.id}:${movie.original_title}`}
        >
          <img
            src={IMG_PATH + movie.poster_path}
            className="img-movie"
            alt={movie.original_title}
          />
        </Link>
      );
    });
  }

  renderLoadingState() {
    return <div className="movies loading"></div>;
  }

  renderCarousel() {
    return (
      <div className="movies">
        <Carousel
          slidesPerPage={10}
          slidesPerScroll={1}
          offset={30}
          itemWidth={154}
          arrows
        >
          {this.renderMovies()}
        </Carousel>
      </div>
    );
  }

  render() {
    const { movies, category } = this.props;

    // Displays 'nothing found' if there is no search match.
    if (category === "search" && movies.length === 0) {
      return <h2>Nothing found</h2>;
    }

    return (
      <div>
        <h2>{CATEGORIES[category]}</h2>
        {movies.length ? this.renderCarousel() : this.renderLoadingState()}
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

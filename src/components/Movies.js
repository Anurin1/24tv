import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ReactPlayer from "react-player";

import actions from "../actions";

import { getMovies } from "../reducers/movies";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import api from "../utils/api";

const IMG_PATH = "https://image.tmdb.org/t/p/w154";

const CATEGORIES = {
  popular: "Popular movies",
};

class Movies extends Component {
  // renderMovie() {
  //   return (

  //   )
  // }

  constructor(props) {
    super(props);
    // this.state = {url: ''}
  }

  componentDidMount() {
    const { category } = this.props;

    this.props.fetchMovies(category);
  }

  renderMovies() {
    // const { movies } = this.props;

    //!if ends with null remove
    // https://image.tmdb.org/t/p/w154null
    //https://image.tmdb.org/t/p/w154null

    const { movies, category } = this.props;

    return movies.map((movie, i) => {
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
    // console.log("Carousel -> render -> movies", movies)

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

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../actions";

import { getMovies } from "../reducers/movies";


import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const IMG_PATH = "https://image.tmdb.org/t/p/w154";

class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }



  // renderMovie() {
  //   return (

  //   )
  // }

  render() {
    // console.log("Carousel -> render -> movies", movies)

    return (
      <div>
        ahoj

      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps, {
  fetchMovies: actions.fetchMovies,
})(Movie);

// export default Carousel;

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../actions";

import { getMovie } from "../reducers/movies";


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
    // console.log("----", this.props);
    
    const { movie } = this.props;
    console.log("Movie -> render -> movie", movie)

    if (!movie) return;

    const { title, overview, original_language } = movie;

    return (
      <div className="container-movie">
        <h3>{title}</h3>
        <p>{overview}</p>

        <h4>Language</h4>
        <span>{original_language}</span>

        <Link to={`/wath/${movie.urlTitle}`}>
          Watch video
        </Link>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { movieName } = ownProps.match.params;

  return {
    movie: getMovie(state, movieName),
  }
};

export default connect(mapStateToProps, {
  fetchMovies: actions.fetchMovies,
})(Movie);

// export default Carousel;

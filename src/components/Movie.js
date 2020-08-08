import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../actions";

import { getMovie } from "../reducers/movies";


import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const IMG_PATH = "https://image.tmdb.org/t/p/w154";

class Movie extends Component {
 
  // componentDidMount() {
  //   this.props.fetchMovies();
  // }



  // renderMovie() {
  //   return (

  //   )
  // }

  render() {
    // console.log("Carousel -> render -> movies", movies)
    // console.log("----", this.props);
    
    const { movie, category } = this.props;
    // console.log("Movie -> render -> props", this.props)
    console.log("Movie -> render -> movie", movie)

    if (!movie) return;

    const { title, overview, original_language } = movie;

    return (
      <div className="container-movie">
        <h3>{title}</h3>
        <p>{overview}</p>

        <h4>Language</h4>
        <span>{original_language}</span>

        <Link to={`/movies/${category}/${movie.urlTitle}/watch`}>
          Watch video
        </Link>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { movieName, category } = ownProps.match.params;
  console.log("mapStateToProps -> movieName", ownProps.match.params)

  return {
    category,
    movie: getMovie(state, category, movieName),
  }
};

export default connect(mapStateToProps, {
  // fetchMovies: actions.fetchMovies,
})(Movie);

// export default Carousel;

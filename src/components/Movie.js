import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovie } from "../reducers/movies";

const Movie = props => {
  const { movie, category } = props;

  //! pridat
  if (!movie) {
    return <div></div>
  };

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
};

const mapStateToProps = (state, ownProps) => {
  const { movieName, category } = ownProps.match.params;

  return {
    category,
    movie: getMovie(state, category, movieName),
  };
};

export default connect(mapStateToProps)(Movie);

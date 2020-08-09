import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovie } from "../reducers/movies";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";

const Movie = props => {
  const { movie, category } = props;

  //! pridat
  if (!movie) {
    return <div></div>;
  }

  const { title, overview, original_language } = movie;

  return (
    <div className="movie">
      <div className="desc">
        <h2>{title}</h2>
        <p>{overview}</p>

        <h4>Language</h4>
        <span>{original_language}</span>

        <Link to={`/movies/${category}/${movie.urlTitle}/watch`} className="btn">
          Watch video
        </Link>
      </div>
      <div className="img">
        <img
            src={IMG_PATH + movie.poster_path}
            
           
          />
      </div>
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

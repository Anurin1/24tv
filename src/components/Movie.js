import React, { Component } from "react";
import { Link } from "react-router-dom";

import { fetchMovie } from "../utils/fetch";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: null };
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { id } = this.props.match.params;

    const movie = await fetchMovie(id);
    this.setState({ movie });
  }

  renderLoadingState() {
    return <div className="movie loading"></div>;
  }

  render() {
    const { movie } = this.state;

    if (!movie) {
      return this.renderLoadingState();
    }

    const { title, overview } = movie;

    return (
      <div className="movie">
        <div className="desc">
          <h2>{title}</h2>
          <p>{overview}</p>

          <h4>Language</h4>
          <span>{movie.original_language}</span>

          <Link to={`/watch/${movie.id}`} className="btn">
            Watch video
          </Link>
        </div>
        <div className="img">
          <img src={IMG_PATH + movie.poster_path} alt={movie.original_title} />
        </div>
      </div>
    );
  }
}

export default Movie;

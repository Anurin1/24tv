import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ReactPlayer from "react-player";

import actions from "../actions";

import { getMovie } from "../reducers/movies";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import api from "../utils/api";

const IMG_PATH = "https://image.tmdb.org/t/p/w154";

class Search extends Component {
  // renderMovie() {
  //   return (

  //   )
  // }

  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  handleSearchClick(e) {
    e.preventDefault();

    const { input } = this.state;

    this.props.fetchSearch(input);
  }

  render() {
    // console.log("Carousel -> render -> movies", movies)

    const { input } = this.state;

    return (
      <div>
        <h2>Search</h2>
        <form>
          <input
            value={input}
            onChange={e => this.setState({ input: e.target.value })}
            placeholder={"Find your favorite movie"}
          />
          <button onClick={e => this.handleSearchClick(e)}>Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { movieName } = ownProps.match.params;

  return {
    // movie: getMovie(state, movieName),
  };
};

export default connect(null, {
  fetchSearch: actions.fetchSearch,
})(Search);

// export default Carousel;

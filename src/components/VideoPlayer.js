import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import ReactPlayer from "react-player";

import actions from "../actions";

import { getMovie } from "../reducers/movies";
import { fetchVideoURL } from "../utils/video";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
  }

  componentDidMount() {
    this.setVideoURL();
  }

  async setVideoURL() {
    const { movie } = this.props;
    const url = await fetchVideoURL(movie);

    this.setState({ url });
  }

  render() {
    const { movie } = this.props;
    const { url } = this.state;

    //!loading state
    if (url === '') {
      return <div></div>;
    }

    if (url === null) {
      return <div>not found</div>
    }

    return (
      <div>
        <h3>{movie.title}</h3>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${url}`}
          width={"100vw"}
          height={"100vh"}
          playing={true}
          // controls={false}
          muted={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { movieName, category } = ownProps.match.params;

  return {
    category,
    movie: getMovie(state, category, movieName),
  };
};

export default connect(mapStateToProps, {
  getVideoURL: actions.getVideoURL,
})(VideoPlayer);

// export default Carousel;

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ReactPlayer from 'react-player'

import actions from "../actions";

import { getMovie } from "../reducers/movies";


import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import api from "../utils/api"

import { fetchVideoURL } from "../utils/video"

const IMG_PATH = "https://image.tmdb.org/t/p/w154";

class VideoPlayer extends Component {

  // renderMovie() {
  //   return (

  //   )
  // }

  constructor(props) {
    super(props)
    this.state = {url: ''}
  }

  componentDidMount() {

    this.setVideoURL();
    // const { movie } = this.props;
    // this.setState({url: getVideoURL(movie) })

   

    // this.props.getVideoURL(movieName);
  }


  async setVideoURL() {
    const { movie } = this.props;
    const url = await fetchVideoURL(movie);

    this.setState({url})
  }


  render() {

    const { movie } = this.props;
    console.log("Carousel -> render -> movies->->->->->->");
    const {url} = this.state;

    //!loading state
    if (!url) {
      return <div></div>;
    }

    return (
     <div>
       <h3>{movie.title}</h3>
       <ReactPlayer url={`https://www.youtube.com/watch?v=${url}`}
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
  console.log("mapStateToProps -> movieName", ownProps.match.params)

  return {
    category,
    movie: getMovie(state, category, movieName),
  }
};

export default connect(mapStateToProps, {
  getVideoURL: actions.getVideoURL,
})(VideoPlayer);

// export default Carousel;

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ReactPlayer from 'react-player'

import actions from "../actions";

import { getMovie } from "../reducers/movies";


import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import api from "../utils/api"

const IMG_PATH = "https://image.tmdb.org/t/p/w154";

class Watch extends Component {

  // renderMovie() {
  //   return (

  //   )
  // }

  constructor(props) {
    super(props)
    this.state = {url: ''}
  }

  componentDidMount() {

    this.getVideoURL();
    


   

    // this.props.getVideoURL(movieName);
  }


  async getVideoURL() {
    const { movie } = this.props;
    const res = await api.get(`${movie.id}/videos?api_key=24f236a5226844fd146103fb45ff24f2&language=en-US`);
    console.log("Watch -> getVideoURL -> res", res)

    this.setState({url: res.data.results[0].key})
  }


  render() {
    // console.log("Carousel -> render -> movies", movies)
    const {url} = this.state;

    if (!url) {
      return <div></div>;
    }

    return (
     <div>
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
  const { movieName } = ownProps.match.params;

  return {
    movie: getMovie(state, movieName),
  }
};

export default connect(mapStateToProps, {
  getVideoURL: actions.getVideoURL,
})(Watch);

// export default Carousel;

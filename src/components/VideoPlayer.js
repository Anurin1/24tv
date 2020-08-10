import React, { Component } from "react";

import shaka from "shaka-player";

import { fetchMovie } from "../utils/fetch";

const VIDEO_URL =
  "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = { movie: null };
  }

  componentDidMount() {
    this.getVideo();
  }

  componentDidUpdate() {
    const videoEl = this.videoRef.current;
    const player = new shaka.Player(videoEl);

    try {
      this.playVideo(player, videoEl);
    } catch (err) {
      console.error(err.message);
    }
  }

  async getVideo() {
    const { id } = this.props.match.params;

    const movie = await fetchMovie(id);
    this.setState({ movie });
  }

  async playVideo(player, videoEl) {
    await player.load(VIDEO_URL);

    videoEl.play();
    videoEl.requestFullscreen();
  }

  renderLoadingState() {
    return <div className="movie loading"></div>;
  }

  render() {
    const { movie } = this.state;

    if (!movie) {
      return this.renderLoadingState();
    }

    return (
      <div className="video">
        <h3>{movie.title}</h3>
        <video ref={this.videoRef} width={"100%"} height={"100%"} controls />
      </div>
    );
  }
}

export default VideoPlayer;

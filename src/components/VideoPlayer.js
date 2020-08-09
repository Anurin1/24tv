import React, { Component } from "react";

import ReactPlayer from "react-player";

import { fetchVideoURL } from "../utils/fetch";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { video: null };
  }

  componentDidMount() {
    this.getVideo();
  }

  async getVideo() {
    const { id } = this.props.match.params;

    const video = await fetchVideoURL(id);
    this.setState({ video });
  }

  renderLoadingState() {
    return <div className="movie loading"></div>;
  }

  render() {
    const { video } = this.state;

    if (!video) {
      return this.renderLoadingState();
    }

    if (video.site !== "YouTube") {
      return <div>Format is not supported</div>;
    }

    return (
      <div className="video">
        <h3>{video.name}</h3>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video.key}`}
          width={"100%"}
          height={"100%"}
          playing={true}
          muted={true}
        />
      </div>
    );
  }
}

export default VideoPlayer;

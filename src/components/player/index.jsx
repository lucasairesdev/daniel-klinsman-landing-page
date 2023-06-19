import React from "react";
import YouTube from "react-youtube";
export default class YoutubeVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: typeof window !== "undefined" ? window.innerWidth : 0,
    };
  }
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.updateScreenWidth.bind(this));
    }
  }
  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.updateScreenWidth.bind(this));
    }
  }
  updateScreenWidth() {
    this.setState({
      screenWidth: typeof window !== "undefined" ? window.innerWidth : 0,
    });
  }
  render() {
    const { screenWidth } = this.state;
    const opts = {
      height: "390",
      width: screenWidth > 620 ? "600" : "300",
      playerVars: { autoplay: 1 },
    };
    return (
      <div>
        <YouTube videoId="-1azJ8nvB7M" opts={opts} onReady={this._onReady} />
      </div>
    );
  }
}

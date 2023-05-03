// import React, { useState } from "react";
// import YouTube from "react-youtube";

//  const YoutubeVideo = (width) => {

//     const opts = {
//       height: "390",
//       width: "300",
//       playerVars: {
//         autoplay: 1,
//       },
//     };

//     const opts2 = {
//       height: "390",
//       width: "600",
//       playerVars: {
//         autoplay: 1,
//       },
//     };

// console.log(width);
//     return (
//       <div className="shadow-lg shadow-white">
//         { width < 620 ? (
//         <YouTube videoId="-Pb3DI2IgIg" opts={opts} />
//         ) : (
//           <YouTube videoId="-Pb3DI2IgIg" opts={opts2} />
//         )
//  };
//       </div>
//     );
//   }


// export default YoutubeVideo;

import React from "react"; import YouTube from "react-youtube"; export default class YoutubeVideo extends React.Component {
  constructor(props) { super(props); this.state = { screenWidth: typeof window !== 'undefined' ? window.innerWidth : 0 }; } componentDidMount() { if (typeof window !== 'undefined') { window.addEventListener("resize", this.updateScreenWidth.bind(this)); } } componentWillUnmount() { if (typeof window !== 'undefined') { window.removeEventListener("resize", this.updateScreenWidth.bind(this)); } } updateScreenWidth() { this.setState({ screenWidth: typeof window !== 'undefined' ? window.innerWidth : 0 }); } render() {
    const { screenWidth } = this.state; const opts = { height: "390", width: screenWidth > 620 ? "600" : "300", playerVars: { autoplay: 1, }, };
    return (
      <div>
        <YouTube videoId="-Pb3DI2IgIg" opts={opts} onReady={this._onReady} />
        
      </div>
    );
  }

}
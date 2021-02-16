import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <iframe
        title="video"
        id="player"
        type="text/html"
        width="640"
        height="360"
        frameborder="0"
        allowFullScreen
        src="https://www.youtube.com/embed/M7lc1UVf-VE"
      />
    );
  }
}

export default Player;

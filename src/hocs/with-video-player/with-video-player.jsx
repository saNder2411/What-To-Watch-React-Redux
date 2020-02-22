import React, {PureComponent} from 'react';
import VideoPlayer from '../../components/video-player/video-player.jsx';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    _renderPlayer(props) {
      return <VideoPlayer {...props}/>;
    }

    render() {
      return (
        <Component
          {...this.props}
          renderPlayer={this._renderPlayer}
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;

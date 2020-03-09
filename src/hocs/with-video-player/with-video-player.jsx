import React, {PureComponent} from 'react';
import VideoContainer from '../../components/video-container/video-container.jsx';
import withVideo from '../with-video/with-video.jsx';

const VideoPlayer = withVideo(VideoContainer);

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

  return WithVideoPlayer;
};

export default withVideoPlayer;

import * as React from 'react';

import VideoContainer from '../../components/video-container/video-container';
import withVideo from '../with-video/with-video';

const VideoPlayer = withVideo(VideoContainer);


const withVideoPlayer = (Component) => {
  type Props = React.ComponentProps<typeof Component>

  class WithVideoPlayer extends React.PureComponent<Props> {

    private renderPlayer(props) {

      return <VideoPlayer {...props}/>;
    }

    render() {
      return (
        <Component
          {...this.props}
          renderPlayer={this.renderPlayer}
        />
      );
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;

import * as React from 'react';
import {VideoProps} from '../../types';

const DELAY = 1000;

type Props = VideoProps

const withVideo = (Component) => {

  class WithVideo extends React.PureComponent<Props> {
    private videoRef: React.RefObject<HTMLVideoElement>;
    private currentTimeout: NodeJS.Timeout | null;

    constructor(props) {
      super(props);
      this.videoRef = React.createRef();
      this.currentTimeout = null;
    }

    componentDidMount() {
      const {isPlaying, onEnded, onTimeUpdate, src, previewImage, isMuted = false, isDelay = false, width = void 0, height = void 0} = this.props;
      const video = this.videoRef.current;

      video.src = src;
      video.width = width;
      video.height = height;
      video.poster = previewImage;
      video.autoplay = false;
      video.muted = isMuted;

      video.oncanplaythrough = () => {
        if (isDelay && isPlaying) {
          this.currentTimeout = setTimeout(() => {
            video.play();
          }, DELAY);
          return;
        }

        if (isPlaying) {
          video.play();
        }
      };

      video.onended = () => {
        if (onEnded) {
          onEnded();
        } else {
          video.play();
        }
      };

      video.ontimeupdate = () => {
        if (onTimeUpdate) {
          const percentValue = Math.floor((Math.floor(video.currentTime) / video.duration) * 100);
          const secondsValue = Math.floor(video.currentTime);

          onTimeUpdate(secondsValue, percentValue);
        }
      };
    }

    componentDidUpdate() {
      const video = this.videoRef.current;

      if (this.props.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.width = 0;
      video.height = 0;

      video.oncanplaythrough = null;
      video.onended = null;
      video.ontimeupdate = null;

      clearTimeout(this.currentTimeout);
    }

    render() {
      const {className = ``} = this.props;
      return (
        <Component>
          <video ref={this.videoRef} className={className}/>
        </Component>
      );
    }
  }

  return WithVideo;
};

export default withVideo;

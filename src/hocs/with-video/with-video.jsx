import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const DELAY = 1000;

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();
      this._currentTimeout = null;
    }

    componentDidMount() {
      const {isPlaying, onEnded, onTimeUpdate, src, poster, isMuted = false, isDelay = false, width = ``, height = ``} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.width = width;
      video.height = height;
      video.poster = `img/${poster}.jpg`;
      video.autoplay = false;
      video.muted = isMuted;

      video.oncanplaythrough = () => {
        if (isDelay && isPlaying) {
          this._currentTimeout = setTimeout(() => {
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
      const video = this._videoRef.current;

      if (this.props.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.width = 0;
      video.height = 0;

      video.oncanplaythrough = null;
      video.onended = null;
      video.ontimeupdate = null;

      clearTimeout(this._currentTimeout);
    }

    render() {
      const {className = ``} = this.props;
      return (
        <Component>
          <video ref={this._videoRef} className={className}/>
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool,
    isDelay: PropTypes.bool,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string,
    onEnded: PropTypes.func,
    onTimeUpdate: PropTypes.func,
  };

  return WithVideo;
};

export default withVideo;

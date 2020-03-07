import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const DELAY = 1500;

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: props.isPlaying,
        isMuted: props.isMuted,
        isDelay: props.isDelay,
      };

      this._videoRef = createRef();

      this._currentTimeout = null;
    }

    componentDidMount() {
      const {src, poster, isMuted = false, isDelay = false, width, height} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.width = width;
      video.height = height;
      video.poster = `img/${poster}.jpg`;
      video.autoplay = false;
      video.muted = isMuted;

      video.oncanplaythrough = () => {
        if (isDelay) {
          this._currentTimeout = setTimeout(() => {
            this.setState({isLoading: false});
          }, DELAY);
          return;
        }

        this.setState({isLoading: false});
      };

      video.onplay = () => this.setState({isPlaying: true});
      video.onpause = () => this.setState({isPlaying: false});
      video.onended = () => this.setState({isPlaying: false});
      video.ontimeupdate = () => this.setState({progress: Math.floor(video.currentTime)});
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
        return;
      }

      video.pause();
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.width = 0;
      video.height = 0;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.onended = null;
      video.ontimeupdate = null;

      clearTimeout(this._currentTimeout);
    }

    render() {
      return (
        <Component>
          <video ref={this._videoRef} />
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
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  return WithVideo;
};

export default withVideo;

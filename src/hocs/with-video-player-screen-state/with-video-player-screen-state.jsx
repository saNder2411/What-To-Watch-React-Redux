import React, {PureComponent, createRef} from 'react';


const withVideoPlayerScreenState = (Component) => {

  class WithVideoPlayerScreenState extends PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        isFullScreen: false,
        progressInSeconds: 0,
        progressInPercent: 0,
      };

      this._playerRef = createRef();

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._handleVideoTimeUpdate = this._handleVideoTimeUpdate.bind(this);
      this._handleFullScreenChange = this._handleFullScreenChange.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
    }

    componentDidMount() {
      document.addEventListener(`fullscreenchange`, this._handleFullScreenChange);
    }

    componentWillUnmount() {
      document.removeEventListener(`keydown`, this._handleFullScreenChange);
    }

    _handlePlayButtonClick() {
      this.setState((prevState) => ({isPlaying: !prevState.isPlaying}));
    }

    _handleVideoTimeUpdate(secondsValue, percentValue) {
      this.setState({progressInSeconds: secondsValue, progressInPercent: percentValue});
    }

    _handleFullScreenChange() {
      this.setState((prevState) => ({isFullScreen: !prevState.isFullScreen}));
    }

    _handleFullScreenButtonClick() {
      if (this.state.isFullScreen) {
        document.exitFullscreen();
        return;
      }

      this._playerRef.current.requestFullscreen();
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          playerRef={this._playerRef}
          onPlayButtonClick={this._handlePlayButtonClick}
          onVideoTimeUpdate={this._handleVideoTimeUpdate}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
        />
      );
    }
  }

  return WithVideoPlayerScreenState;
};

export default withVideoPlayerScreenState;

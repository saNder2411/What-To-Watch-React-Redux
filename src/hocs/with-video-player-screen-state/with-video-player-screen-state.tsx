import * as React from 'react';


type State = {
  isPlaying: boolean;
  isFullScreen: boolean;
  progressInSeconds: number;
  progressInPercent: number;
}

const withVideoPlayerScreenState = (Component) => {

  class WithVideoPlayerScreenState extends React.PureComponent<{}, State> {
    private playerRef: React.RefObject<HTMLDivElement>;

    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        isFullScreen: false,
        progressInSeconds: 0,
        progressInPercent: 0,
      };

      this.playerRef = React.createRef();

      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleVideoTimeUpdate = this.handleVideoTimeUpdate.bind(this);
      this.handleFullScreenChange = this.handleFullScreenChange.bind(this);
      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);
    }

    componentDidMount() {
      document.addEventListener(`fullscreenchange`, this.handleFullScreenChange);
    }

    componentWillUnmount() {
      document.removeEventListener(`keydown`, this.handleFullScreenChange);
    }

    private handlePlayButtonClick() {
      this.setState((prevState) => ({isPlaying: !prevState.isPlaying}));
    }

    private handleVideoTimeUpdate(secondsValue, percentValue) {
      this.setState({progressInSeconds: secondsValue, progressInPercent: percentValue});
    }

    private handleFullScreenChange() {
      this.setState((prevState) => ({isFullScreen: !prevState.isFullScreen}));
    }

    private handleFullScreenButtonClick() {
      if (this.state.isFullScreen) {
        document.exitFullscreen();
        return;
      }

      this.playerRef.current.requestFullscreen();
    }

    render() {
      return (
        <Component
          {...this.state}
          playerRef={this.playerRef}
          onPlayButtonClick={this.handlePlayButtonClick}
          onVideoTimeUpdate={this.handleVideoTimeUpdate}
          onFullScreenButtonClick={this.handleFullScreenButtonClick}
        />
      );
    }
  }

  return WithVideoPlayerScreenState;
};

export default withVideoPlayerScreenState;

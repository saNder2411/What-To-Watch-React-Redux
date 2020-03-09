import React, {PureComponent, Fragment, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const convertVideoTime = (sec) => {
  const hours = (sec - (sec % (60 * 60))) / (60 * 60);
  const minutes = ((sec - (hours * 60 * 60)) - (sec % 60)) / 60;
  const seconds = sec - ((hours * 60 * 60) + (minutes * 60));

  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

class VideoPlayerScreen extends PureComponent {
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

  render() {
    const {selectedCardId, promoCardData, cardsData, renderPlayer} = this.props;
    const {isPlaying, isFullScreen, progressInSeconds, progressInPercent} = this.state;
    const selectedCard = selectedCardId === -1 ? promoCardData : cardsData.find(({id}) => +selectedCardId === id);
    const {videoSrc, poster, title} = selectedCard;
    const toExit = selectedCardId === -1 ? `/` : `/cards${selectedCardId}`;
    const videoProps = {
      isPlaying,
      poster,
      src: videoSrc,
      className: `player__video`,
      onEnded: this._handlePlayButtonClick,
      onTimeUpdate: this._handleVideoTimeUpdate,
    };

    return (
      <div className="player" >
        <div ref={this._playerRef}>
          {renderPlayer(videoProps)}
        </div>

        <Link to={toExit}>
          <button type="button" className="player__exit">Exit</button>
        </Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progressInPercent} max="100"></progress>
              <div className="player__toggler" style={{left: `${progressInPercent}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{convertVideoTime(progressInSeconds)}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={this._handlePlayButtonClick}
            >
              {isPlaying ? (
                <Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </Fragment>
              ) : (
                <Fragment>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Fragment>
              )}
            </button>
            <div className="player__name">{title}</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={() => {
                if (isFullScreen) {
                  document.exitFullscreen();
                  return;
                }

                this._playerRef.current.requestFullscreen();
              }}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

VideoPlayerScreen.propTypes = {
  selectedCardId: PropTypes.number.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired),
  promoCardData: PropTypes.object.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

const mapStateToProps = ({cardsData, promoCardData}) => ({cardsData, promoCardData});

export default connect(mapStateToProps)(VideoPlayerScreen);

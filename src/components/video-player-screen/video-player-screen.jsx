import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getPromoCardData} from '../../reducers/promo-card/selectors.js';
import {getCardsData} from '../../reducers/card-list/selectors.js';


const convertVideoTime = (sec) => {
  const hours = (sec - (sec % (60 * 60))) / (60 * 60);
  const minutes = ((sec - (hours * 60 * 60)) - (sec % 60)) / 60;
  const seconds = sec - ((hours * 60 * 60) + (minutes * 60));

  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const VideoPlayerScreen = (props) => {

  const {
    selectedCardId, promoCardData, cardsData, renderPlayer,
    isPlaying, progressInSeconds, progressInPercent, playerRef,
    onPlayButtonClick, onVideoTimeUpdate, onFullScreenButtonClick,
  } = props;

  const selectedCard = +selectedCardId === -1 ? promoCardData : cardsData.find(({id}) => +selectedCardId === id);
  const {videoSrc, previewImage, title} = selectedCard;
  const toExit = +selectedCardId === -1 ? `/` : `/cards/${selectedCardId}`;
  const videoProps = {
    isPlaying,
    previewImage,
    src: videoSrc,
    className: `player__video`,
    onEnded: onPlayButtonClick,
    onTimeUpdate: onVideoTimeUpdate,
  };

  return (
    <div className="player" >
      <div ref={playerRef}>
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
            onClick={onPlayButtonClick}
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
            onClick={onFullScreenButtonClick}
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
};

VideoPlayerScreen.propTypes = {
  selectedCardId: PropTypes.string.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired),
  promoCardData: PropTypes.object.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  progressInSeconds: PropTypes.number.isRequired,
  progressInPercent: PropTypes.number.isRequired,
  playerRef: PropTypes.object.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onVideoTimeUpdate: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoCardData: getPromoCardData(state),
  cardsData: getCardsData(state),
});

export default connect(mapStateToProps)(VideoPlayerScreen);

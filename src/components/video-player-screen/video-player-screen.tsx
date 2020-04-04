import * as React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getSelectedCard} from '../../reducers/app-state/selectors';

import {getAppRoute} from '../../utils/utils';
import {Card, VideoProps, Handle} from '../../types';


const convertVideoTime = (sec) => {
  const hours = (sec - (sec % (60 * 60))) / (60 * 60);
  const minutes = ((sec - (hours * 60 * 60)) - (sec % 60)) / 60;
  const seconds = sec - ((hours * 60 * 60) + (minutes * 60));

  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

type Props = {
  selectedCard: Card;
  renderPlayer: (videoProps: VideoProps) => React.ReactNode;
  isPlaying: boolean;
  progressInSeconds: number;
  progressInPercent: number;
  playerRef: React.RefObject<HTMLDivElement>;
  onPlayButtonClick: Handle;
  onVideoTimeUpdate: (secondsValue: number, percentValue: number) => void;
  onFullScreenButtonClick: Handle;
}

const VideoPlayerScreen: React.FC<Props> = (props: Props) => {

  const {selectedCard, renderPlayer, isPlaying, progressInSeconds, progressInPercent,
    playerRef, onPlayButtonClick, onVideoTimeUpdate, onFullScreenButtonClick} = props;

  const {videoSrc, previewImage, title} = selectedCard;
  const videoProps = {
    isPlaying,
    previewImage,
    src: videoSrc,
    className: `player__video`,
    onEnded: onPlayButtonClick,
    onTimeUpdate: onVideoTimeUpdate,
  };

  return (
    <div ref={playerRef} className="player" >
      {renderPlayer(videoProps)}

      <Link to={getAppRoute(selectedCard.id.toString()).CARDS}>
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
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </React.Fragment>
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

const mapStateToProps = (state) => ({selectedCard: getSelectedCard(state)});

export default connect(mapStateToProps)(VideoPlayerScreen);

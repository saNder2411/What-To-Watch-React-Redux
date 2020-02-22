import React from 'react';
import PropTypes from 'prop-types';

const PreviewPlayerOptions = {
  WIDTH: 280,
  HEIGHT: 175,
  IS_MUTED: true,
  IS_DELAY: true,
};

const PreviewCard = ({previewCardData, previewCardHandlers, renderPlayer}) => {
  const {id, title, poster, previewVideoSrc, isPlaying} = previewCardData;
  const [onPreviewCardClick, onPreviewCardMouseEnter, onPreviewCardMouseLeave] = previewCardHandlers;
  const playerOptions = {
    src: previewVideoSrc,
    poster,
    isPlaying,
    isMuted: PreviewPlayerOptions.IS_MUTED,
    isDelay: PreviewPlayerOptions.IS_DELAY,
    width: PreviewPlayerOptions.WIDTH,
    height: PreviewPlayerOptions.HEIGHT,
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={id}
      onClick={onPreviewCardClick}
      onMouseEnter={onPreviewCardMouseEnter}
      onMouseLeave={onPreviewCardMouseLeave}
    >
      <div className="small-movie-card__image">
        {isPlaying ? renderPlayer(playerOptions) : <img src={poster} alt={title} width="280" height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

PreviewCard.propTypes = {
  previewCardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewVideoSrc: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  }).isRequired,
  previewCardHandlers: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default PreviewCard;

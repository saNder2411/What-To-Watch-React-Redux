import React from 'react';
import PropTypes from 'prop-types';

const PreviewVideoOptions = {
  WIDTH: 280,
  HEIGHT: 175,
  IS_MUTED: true,
  IS_DELAY: true,
};

const PreviewCard = ({previewCardData, previewCardHandlers, renderPlayer}) => {
  const {id, title, previewImage, previewVideoSrc, isPlaying} = previewCardData;
  const [onPreviewCardClick, onPreviewCardMouseEnter, onPreviewCardMouseLeave] = previewCardHandlers;
  const videoProps = {
    isPlaying,
    previewImage,
    src: previewVideoSrc,
    isMuted: PreviewVideoOptions.IS_MUTED,
    isDelay: PreviewVideoOptions.IS_DELAY,
    width: PreviewVideoOptions.WIDTH,
    height: PreviewVideoOptions.HEIGHT,
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
        {isPlaying ? renderPlayer(videoProps) : <img src={previewImage} alt={title} width="280" height="175" />}
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
    previewVideoSrc: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  }).isRequired,
  previewCardHandlers: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default PreviewCard;

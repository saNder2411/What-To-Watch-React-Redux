import React from 'react';
import PropTypes from 'prop-types';

const PreviewCard = ({previewCardData, previewCardHandlers}) => {
  const {id, title, poster} = previewCardData;
  const [onPreviewCardClick, onPreviewCardMouseOver] = previewCardHandlers;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={id}
      onClick={onPreviewCardClick}
      onMouseOver={onPreviewCardMouseOver}
    >
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175" />
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
  }).isRequired,
  previewCardHandlers: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};

export default PreviewCard;

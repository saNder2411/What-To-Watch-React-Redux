import React from 'react';
import PropTypes from 'prop-types';


const Poster = ({isCardScreen, isAddReviewScreen, posterImage, title}) => {
  const cardScreenClassName = isCardScreen ? `movie-card__poster--big` : ``;
  const addReviewScreenClassName = isAddReviewScreen ? `movie-card__poster--small` : ``;

  return (
    <div className={`movie-card__poster ${cardScreenClassName} ${addReviewScreenClassName}`}>
      <img src={`${posterImage ? posterImage : `img/the-grand-budapest-hotel-poster.jpg`}`} alt={title} width="218" height="327" />
    </div>
  );
};

Poster.propTypes = {
  isCardScreen: PropTypes.bool,
  isAddReviewScreen: PropTypes.bool,
  posterImage: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Poster;

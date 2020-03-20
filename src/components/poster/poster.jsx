import React from 'react';
import PropTypes from 'prop-types';


const Poster = ({isCardScreen, posterImage, title}) => {

  return (
    <div className={`movie-card__poster ${isCardScreen ? `movie-card__poster--big` : ``}`}>
      <img src={`${posterImage ? posterImage : `img/the-grand-budapest-hotel-poster.jpg`}`} alt={title} width="218" height="327" />
    </div>
  );
};

Poster.propTypes = {
  isCardScreen: PropTypes.bool,
  posterImage: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Poster;

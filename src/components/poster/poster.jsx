import React from 'react';
import PropTypes from 'prop-types';

const Poster = ({poster, isCardScreen}) => {
  return (
    <div className={`movie-card__poster ${isCardScreen ? `movie-card__poster--big` : ``}`}>
      <img src={`img/${poster}.jpg`} alt="The Grand Budapest Hotel poster" width="218" height="327" />
    </div>
  );
};

Poster.propTypes = {
  poster: PropTypes.string,
  isCardScreen: PropTypes.bool,
};

export default Poster;

import React from 'react';
import PropTypes from 'prop-types';
import HeaderButtons from '../header-buttons/header-buttons.jsx';

const HeaderCardDesc = ({title, genre, date, isCardScreen}) => {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{date}</span>
      </p>

      <HeaderButtons isCardScreen={isCardScreen}/>
    </div>
  );
};

HeaderCardDesc.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  date: PropTypes.number,
  isCardScreen: PropTypes.bool,
};

export default HeaderCardDesc;

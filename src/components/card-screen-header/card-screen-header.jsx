import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';

const CardScreenHeader = ({title, genre, release}) => {
  const yearRelease = new Date(release).getFullYear();

  return (
    <div className="movie-card__hero">
      <Header isCardScreen />

      <div className="movie-card__wrap">
        <HeaderCardDesc title={title} genre={genre} date={yearRelease} isCardScreen />
      </div>
    </div>
  );
};

CardScreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
};

export default CardScreenHeader;

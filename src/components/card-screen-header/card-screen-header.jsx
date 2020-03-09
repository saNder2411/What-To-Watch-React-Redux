import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';
import HeaderButtons from '../header-buttons/header-buttons.jsx';

const CardScreenHeader = ({title, genre, release, selectedCardId}) => {
  const yearRelease = new Date(release).getFullYear();

  return (
    <div className="movie-card__hero">
      <Header isCardScreen />

      <div className="movie-card__wrap">
        <HeaderCardDesc title={title} genre={genre} date={yearRelease} >
          <HeaderButtons isCardScreen selectedCardId={selectedCardId}/>
        </HeaderCardDesc>
      </div>
    </div>
  );
};

CardScreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  selectedCardId: PropTypes.string.isRequired,
};

export default CardScreenHeader;

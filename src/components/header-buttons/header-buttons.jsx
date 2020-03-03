import React from 'react';
import PropTypes from 'prop-types';

const HeaderButtons = ({isCardScreen}) => {
  const addReviewButton = isCardScreen ? <a href="add-review.html" className="btn movie-card__button">Add review</a> : null;

  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
      {addReviewButton}
    </div>
  );
};

HeaderButtons.propTypes = {
  isCardScreen: PropTypes.bool,
};

export default HeaderButtons;

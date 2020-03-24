import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getAuthStatus} from '../../reducers/user/selectors.js';

import {getAppRoute} from '../../utils/utils.js';


const HeaderButtons = ({isCardScreen, isAuthorized, selectedCardId}) => {

  const toPlayerScreen = isCardScreen ? getAppRoute(selectedCardId).PLAYER : getAppRoute(-1).PLAYER;

  const addReviewButton = isCardScreen && isAuthorized ?
    <Link
      to={`/cards/${selectedCardId}/review`}
      className="btn movie-card__button">
        Add review
    </Link> : null;

  return (
    <div className="movie-card__buttons">
      <Link
        className="btn btn--play movie-card__button"
        to={toPlayerScreen}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
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
  isAuthorized: PropTypes.bool.isRequired,
  selectedCardId: PropTypes.string,
};

const mapStateToProps = (state) => ({isAuthorized: getAuthStatus(state)});

export default connect(mapStateToProps)(HeaderButtons);

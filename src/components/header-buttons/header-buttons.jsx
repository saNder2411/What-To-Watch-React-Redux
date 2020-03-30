import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import MyListButton from '../my-list-button/my-list-button';

import {connect} from 'react-redux';
import {getUserAuthStatus} from '../../reducers/user/selectors';

import {getAppRoute} from '../../utils/utils';
import {getScreen, getSelectedCardId} from '../../reducers/app-state/selectors';
import {Screens} from '../../const';

const HeaderButtons = ({screen, isAuthorized, selectedCardId}) => {

  const addReviewButton = screen === Screens.CARD && isAuthorized ?
    <Link
      to={getAppRoute(selectedCardId).REVIEW}
      className="btn movie-card__button">
        Add review
    </Link> : null;

  return (
    <div className="movie-card__buttons">
      <Link
        className="btn btn--play movie-card__button"
        to={getAppRoute(selectedCardId).PLAYER}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <MyListButton />
      {addReviewButton}
    </div>
  );
};

HeaderButtons.propTypes = {
  screen: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  selectedCardId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  screen: getScreen(state),
  isAuthorized: getUserAuthStatus(state),
  selectedCardId: getSelectedCardId(state),
});

export default connect(mapStateToProps)(HeaderButtons);

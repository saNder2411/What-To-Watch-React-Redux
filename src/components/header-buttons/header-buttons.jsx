import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import compose from '../../hocs/compose/compose.js';
import {getAuthStatus} from '../../reducers/user/selectors.js';

import {AuthStatus} from '../../const.js';
import {getAppRoute} from '../../utils/utils.js';


const HeaderButtons = ({isCardScreen, authStatus, selectedCardId, history}) => {

  const addReviewButton = isCardScreen && authStatus === AuthStatus.AUTH ?
    <Link
      to={`/cards/${selectedCardId}/review`}
      className="btn movie-card__button">
        Add review
    </Link> : null;
  const toPlayerScreen = isCardScreen ? getAppRoute(selectedCardId).PLAYER : getAppRoute(-1).PLAYER;

  return (
    <div className="movie-card__buttons">
      <button
        className="btn btn--play movie-card__button"
        type="button"
        onClick={() => history.push(toPlayerScreen)}
      >
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
  authStatus: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  selectedCardId: PropTypes.string,
};

const mapStateToProps = (state) => ({authStatus: getAuthStatus(state)});

export default compose(withRouter, connect(mapStateToProps))(HeaderButtons);

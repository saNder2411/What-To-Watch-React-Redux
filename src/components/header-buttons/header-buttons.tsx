import * as React from 'react';
import {Link} from 'react-router-dom';

import MyListButton from '../my-list-button/my-list-button';

import {connect} from 'react-redux';
import {getUserAuthStatus} from '../../reducers/user/selectors';
import ActionCreator from '../../actions/action-creator';

import {getAppRoute} from '../../utils/utils';
import {getScreen, getSelectedCardId} from '../../reducers/app-state/selectors';
import {getIsReviewAdded} from '../../reducers/reviews/selectors';
import {Screens} from '../../types';


type Props = {
  screen: Screens;
  isAuthorized: boolean;
  selectedCardId: number;
  isReviewAdded: boolean;
  setDefaultReviewAdded: () => void;
}

const HeaderButtons: React.FC<Props> = ({screen, isAuthorized, selectedCardId, isReviewAdded, setDefaultReviewAdded}: Props) => {

  const addReviewButton = screen === Screens.CARD && isAuthorized ?
    <Link
      className="btn movie-card__button"
      to={getAppRoute(selectedCardId.toString()).REVIEW}
      onClick={() => isReviewAdded && setDefaultReviewAdded()}>
        Add review
    </Link> : null;

  return (
    <div className="movie-card__buttons">
      <Link
        className="btn btn--play movie-card__button"
        to={getAppRoute(selectedCardId.toString()).PLAYER}>

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


const mapStateToProps = (state) => ({
  screen: getScreen(state),
  isAuthorized: getUserAuthStatus(state),
  selectedCardId: getSelectedCardId(state),
  isReviewAdded: getIsReviewAdded(state),

});

const mapDispatchToProps = (dispatch) => ({
  setDefaultReviewAdded: () => dispatch(ActionCreator.setDefaultReviewAdded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButtons);

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getFilteredCards, getShowingCardsAmount} from '../../reducers/card-list-state/selectors';
import ActionCreator from '../../actions/action-creator';


const ShowMoreButton = ({filteredCards, showingCardsAmount, changeShowingCardsAmount}) => {

  const showMoreButton = filteredCards.length > showingCardsAmount ? (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => changeShowingCardsAmount()}
      >
        Show more
      </button>
    </div>
  ) : null;

  return showMoreButton;
};

ShowMoreButton.propTypes = {
  filteredCards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  showingCardsAmount: PropTypes.number,
  changeShowingCardsAmount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filteredCards: getFilteredCards(state),
  showingCardsAmount: getShowingCardsAmount(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeShowingCardsAmount: (amount) => {
    dispatch(ActionCreator.changeShowingCardsAmount(amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);

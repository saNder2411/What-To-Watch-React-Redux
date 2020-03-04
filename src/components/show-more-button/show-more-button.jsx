import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../actions/action-creator.js';

const ShowMoreButton = ({filteredCardsLength, showingCardsAmount, changeShowingCardsAmount}) => {
  const showMoreButton = filteredCardsLength > showingCardsAmount ? (
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
  filteredCardsLength: PropTypes.number,
  showingCardsAmount: PropTypes.number,
  changeShowingCardsAmount: PropTypes.func.isRequired,
};

const mapStateToProps = ({filteredCardsLength, showingCardsAmount}) => ({filteredCardsLength, showingCardsAmount});

const mapDispatchToProps = (dispatch) => ({
  changeShowingCardsAmount: (amount) => {
    dispatch(ActionCreator.changeShowingCardsAmount(amount));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);

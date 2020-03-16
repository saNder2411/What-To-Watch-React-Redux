import ActionCreator from '../action-creator.js';

const FilterActions = {
  filtersCards: (dispatch) => (genre, filteredCards, showingCardsAmount) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.changeFilteredCards(filteredCards));
    dispatch(ActionCreator.changeShowingCardsAmount(showingCardsAmount));
  },
};

export default FilterActions;

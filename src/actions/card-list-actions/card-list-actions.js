import ActionCreator from '../action-creator.js';


const CardListActions = {

  filtersCards: (dispatch) => (genre, showingCardsAmount) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.changeShowingCardsAmount(showingCardsAmount));
  },
};

export default CardListActions;

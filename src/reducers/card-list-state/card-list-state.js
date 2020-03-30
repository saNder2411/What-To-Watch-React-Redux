import ActionTypes from '../../action-types/action-types';
import {extend} from '../../utils/utils';
import {DEFAULT_GENRE, ShowingCardsAmount} from '../../const';


const initialState = {
  cardListState: {
    genre: DEFAULT_GENRE,
    showingCardsAmount: ShowingCardsAmount.ON_START,
  }
};

const updateCardListState = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.SET_DEFAULT_CARD_LIST_STATE:
      return extend(state.cardListState,
          {
            genre: DEFAULT_GENRE,
            showingCardsAmount: ShowingCardsAmount.ON_START,
          });

    case ActionTypes.CHANGE_GENRE:
      return extend(state.cardListState, {genre: action.payload});

    case ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT:
      return extend(state.cardListState,
          {
            showingCardsAmount:
              action.payload ? action.payload : state.cardListState.showingCardsAmount + ShowingCardsAmount.BY_BUTTON,
          });

    default:
      return state.cardListState;
  }
};

export {updateCardListState};

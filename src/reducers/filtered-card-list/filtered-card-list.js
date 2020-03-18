import ActionTypes from '../../action-types/action-types.js';
import {extend} from '../../utils/utils.js';
import {DEFAULT_GENRE, ShowingCardsAmount} from '../../const.js';

const initialState = {
  filteredCardList: {
    genre: DEFAULT_GENRE,
    selectedCardId: -1,
    showingCardsAmount: ShowingCardsAmount.ON_START,
  }
};

const updateFilteredCardList = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CARDS_REQUEST:
      return extend(state.filteredCardList,
          {
            genre: DEFAULT_GENRE,
            selectedCardId: -1,
            showingCardsAmount: ShowingCardsAmount.ON_START,
          });

    case ActionTypes.CHANGE_GENRE:
      return extend(state.filteredCardList, {genre: action.payload});

    case ActionTypes.CHANGE_SELECTED_CARD:
      return extend(state.filteredCardList, {selectedCardId: action.payload});

    case ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT:
      return extend(state.filteredCardList,
          {
            showingCardsAmount:
              action.payload ? action.payload : state.filteredCardList.showingCardsAmount + ShowingCardsAmount.BY_BUTTON,
          });

    default:
      return state.filteredCardList;
  }
};

export {updateFilteredCardList};

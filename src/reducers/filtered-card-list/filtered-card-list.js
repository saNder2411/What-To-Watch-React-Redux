import ActionTypes from '../../action-types/action-types.js';
import {extend} from '../reducer.js';
import {DEFAULT_GENRE, ShowingCardsAmount} from '../../const.js';

const initialState = {
  filteredCardList: {
    filteredCards: [],
    genre: DEFAULT_GENRE,
    showingCardsAmount: ShowingCardsAmount.ON_START,
  }
};

const updateFilteredCardList = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CARDS_REQUEST:
      return extend(state.filteredCardList,
          {
            filteredCards: [],
            genre: DEFAULT_GENRE,
            showingCardsAmount: ShowingCardsAmount.ON_START,
          });

    case ActionTypes.FETCH_CARDS_SUCCESS:
      return extend(state.filteredCardList, {filteredCards: action.payload});

    case ActionTypes.FETCH_CARDS_FAILURE:
      return extend(state.filteredCardList, {filteredCards: []});

    case ActionTypes.CHANGE_GENRE:
      return extend(state.filteredCardList, {genre: action.payload});

    case ActionTypes.CHANGE_FILTERED_CARDS:
      return extend(state.filteredCardList, {filteredCards: action.payload});

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

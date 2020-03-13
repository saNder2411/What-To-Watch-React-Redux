import ActionTypes from '../action-types/action-types.js';
import {extend} from './reducer.js';
import {DEFAULT_GENRE, ShowingCardsAmount} from '../const.js';


const updateCardList = ({cardList}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CARDS_REQUEST:
      return extend(cardList,
          {
            cardsData: [],
            cardsLoading: true,
            cardsError: null,
            filteredCards: [],
            genre: DEFAULT_GENRE,
            showingCardsAmount: ShowingCardsAmount.ON_START,
          });

    case ActionTypes.FETCH_CARDS_SUCCESS:
      return extend(cardList,
          {
            cardsData: action.payload,
            cardsLoading: false,
            cardsError: null,
            filteredCards: action.payload,
          });

    case ActionTypes.FETCH_CARDS_FAILURE:
      return extend(cardList,
          {
            cardsData: [],
            cardsLoading: false,
            cardsError: action.payload,
            filteredCards: [],
          });

    case ActionTypes.CHANGE_GENRE:
      return extend(cardList, {genre: action.payload});

    case ActionTypes.CHANGE_FILTERED_CARDS:
      return extend(cardList, {filteredCards: action.payload});

    case ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT:
      return extend(cardList,
          {
            showingCardsAmount:
              action.payload ? action.payload : cardList.showingCardsAmount + ShowingCardsAmount.BY_BUTTON,
          });

    default:
      return cardList;
  }
};

export default updateCardList;

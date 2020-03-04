import ActionTypes from '../action-types/action-types.js';
import {DEFAULT_GENRE, ShowingCardsAmount} from '../const.js';

const extend = (a, b) => Object.assign({}, a, b);

const initialState = {
  promoCardData: {},
  genre: DEFAULT_GENRE,
  cardsData: [],
  filteredCardsLength: 0,
  showingCardsAmount: ShowingCardsAmount.ON_START,
  reviews: [],
  newReviews: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.CARDS_LOADED:
      return extend(state, {cardsData: action.payload});

    case ActionTypes.PROMO_CARD_LOADED:
      return extend(state, {promoCardData: action.payload});

    case ActionTypes.CHANGE_GENRE:
      return extend(state, {genre: action.payload});

    case ActionTypes.CHANGE_FILTERED_CARDS_LENGTH:
      return extend(state, {filteredCardsLength: action.payload});

    case ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT:
      return extend(state, {
        showingCardsAmount:
          action.payload ? action.payload : state.showingCardsAmount + ShowingCardsAmount.BY_BUTTON,
      });

    default:
      return state;
  }
};

export default reducer;

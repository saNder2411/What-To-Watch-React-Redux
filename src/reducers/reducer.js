import ActionTypes from '../action-types/action-types.js';
import Common from '../utils/common.js';
import {DEFAULT_GENRE} from '../const.js';

const initialState = {
  genre: DEFAULT_GENRE,
  cardsData: [],
  reviews: [],
  newReviews: [],
  promoCardData: {},
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.CARDS_LOADED:
      return Common.extend(state, {cardsData: action.payload});
    case ActionTypes.PROMO_CARD_LOADED:
      return Common.extend(state, {promoCardData: action.payload});
    case ActionTypes.CHANGE_GENRE:
      return Common.extend(state, {genre: action.payload});
    default:
      return state;
  }
};

export default reducer;

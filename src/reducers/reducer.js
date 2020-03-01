import ActionTypes from '../action-types/action-types.js';
import Common from '../utils/common.js';
import {DEFAULT_GENRE} from '../const.js';

const initialState = {
  genre: DEFAULT_GENRE,
  cards: [],
  filteredCards: [],
  reviews: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.CARDS_LOADED:
      return Common.extend(state, {cards: action.payload});
    default:
      return state;
  }
};

export default reducer;

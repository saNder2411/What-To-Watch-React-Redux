import ActionTypes from '../../action-types/action-types.js';
import {extend} from '../reducer.js';

const initialState = {
  cardList: {
    cardsData: [],
    cardsLoading: true,
    cardsError: null,
  }
};

const updateCardList = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CARDS_REQUEST:
      return extend(state.cardList,
          {
            cardsData: [],
            cardsLoading: true,
            cardsError: null,
          });

    case ActionTypes.FETCH_CARDS_SUCCESS:
      return extend(state.cardList,
          {
            cardsData: action.payload,
            cardsLoading: false,
            cardsError: null,
          });

    case ActionTypes.FETCH_CARDS_FAILURE:
      return extend(state.cardList,
          {
            cardsData: [],
            cardsLoading: false,
            cardsError: action.payload,
          });

    default:
      return state.cardList;
  }
};

export {updateCardList};

import ActionTypes from '../../action-types/action-types';
import {extend} from '../../utils/utils';


const initialState = {
  cardList: {
    cardsData: [],
    cardsLoading: true,
    cardsError: null,
    updatedCardLoading: false,
    updatedCardError: null,
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

    case ActionTypes.UPDATE_CARD_REQUEST:
      return extend(state.cardList,
          {
            updatedCardLoading: true,
            updatedCardError: null,
          });

    case ActionTypes.UPDATE_CARD_SUCCESS:
      const {payload: updatedCard} = action;
      const cardIndex = state.cardList.cardsData.findIndex(({id}) => id === updatedCard.id);

      return extend(state.cardList,
          {
            cardsData: [
              ...state.cardList.cardsData.slice(0, cardIndex),
              updatedCard,
              ...state.cardList.cardsData.slice(cardIndex + 1),
            ],
            updatedCardLoading: false,
            updatedCardError: null,
          });

    case ActionTypes.UPDATE_CARD_FAILURE:
      return extend(state.cardList,
          {
            updatedCardLoading: false,
            updatedCardError: action.payload,
          });

    default:
      return state.cardList;
  }
};

export {updateCardList};

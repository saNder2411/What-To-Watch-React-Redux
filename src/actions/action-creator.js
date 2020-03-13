import ActionTypes from '../action-types/action-types.js';

const ActionCreator = {
  promoCardRequested: () => ({
    type: ActionTypes.FETCH_PROMO_CARD_REQUEST,
  }),

  cardsRequested: () => ({
    type: ActionTypes.FETCH_CARDS_REQUEST,
  }),

  promoCardLoaded: (newPromoCard) => ({
    type: ActionTypes.FETCH_PROMO_CARD_SUCCESS,
    payload: newPromoCard,
  }),

  cardsLoaded: (newCards) => ({
    type: ActionTypes.FETCH_CARDS_SUCCESS,
    payload: newCards,
  }),

  promoCardError: (error) => ({
    type: ActionTypes.FETCH_PROMO_CARD_FAILURE,
    payload: error,
  }),

  cardsError: (error) => ({
    type: ActionTypes.FETCH_CARDS_FAILURE,
    payload: error,
  }),

  changeGenre: (genre) => ({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre,
  }),

  changeFilteredCards: (filteredCards) => ({
    type: ActionTypes.CHANGE_FILTERED_CARDS,
    payload: filteredCards,
  }),

  changeShowingCardsAmount: (amount) => ({
    type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT,
    payload: amount,
  }),
};

export default ActionCreator;

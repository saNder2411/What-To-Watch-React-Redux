import ActionTypes from '../action-types/action-types.js';

const ActionCreator = {
  promoCardRequested: () => ({
    type: ActionTypes.FETCH_PROMO_CARD_REQUEST,
  }),

  promoCardLoaded: (newPromoCard) => ({
    type: ActionTypes.FETCH_PROMO_CARD_SUCCESS,
    payload: newPromoCard,
  }),

  promoCardError: (error) => ({
    type: ActionTypes.FETCH_PROMO_CARD_FAILURE,
    payload: error,
  }),

  cardsRequested: () => ({
    type: ActionTypes.FETCH_CARDS_REQUEST,
  }),

  cardsLoaded: (newCards) => ({
    type: ActionTypes.FETCH_CARDS_SUCCESS,
    payload: newCards,
  }),

  cardsError: (error) => ({
    type: ActionTypes.FETCH_CARDS_FAILURE,
    payload: error,
  }),

  changeGenre: (genre) => ({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre,
  }),

  changeSelectedCard: (id) => ({
    type: ActionTypes.CHANGE_SELECTED_CARD,
    payload: id,
  }),

  changeShowingCardsAmount: (amount) => ({
    type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT,
    payload: amount,
  }),
};

export default ActionCreator;

import ActionTypes from '../action-types/action-types.js';
import {DataTypes} from '../const.js';

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

  changeFilteredCardsLength: (length) => ({
    type: ActionTypes.CHANGE_FILTERED_CARDS_LENGTH,
    payload: length,
  }),

  changeShowingCardsAmount: (amount) => ({
    type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT,
    payload: amount,
  }),

  fetchData: (cardsService, dispatch) => (dataType) => {
    switch (dataType) {
      case DataTypes.PROMO_DATA:
        dispatch(ActionCreator.promoCardRequested());
        cardsService.getPromoCardData()
          .then((promoCardData) => dispatch(ActionCreator.promoCardLoaded(promoCardData)))
          .catch((error) => dispatch(ActionCreator.promoCardError(error)));
        break;

      case DataTypes.CARDS_DATA:
        dispatch(ActionCreator.cardsRequested());
        cardsService.getCards()
          .then((cardsData) => dispatch(ActionCreator.cardsLoaded(cardsData)))
          .catch((error) => dispatch(ActionCreator.cardsError(error)));
        break;
    }
  },
};

export default ActionCreator;

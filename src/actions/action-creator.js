import ActionTypes from '../action-types/action-types.js';

const ActionCreator = {

  promoCardRequested: () => ({type: ActionTypes.FETCH_PROMO_CARD_REQUEST}),

  promoCardLoaded: (newPromoCard) => ({
    type: ActionTypes.FETCH_PROMO_CARD_SUCCESS,
    payload: newPromoCard,
  }),

  promoCardError: (error) => ({
    type: ActionTypes.FETCH_PROMO_CARD_FAILURE,
    payload: error,
  }),

  cardsRequested: () => ({type: ActionTypes.FETCH_CARDS_REQUEST}),

  cardsLoaded: (newCards) => ({
    type: ActionTypes.FETCH_CARDS_SUCCESS,
    payload: newCards,
  }),

  cardsError: (error) => ({
    type: ActionTypes.FETCH_CARDS_FAILURE,
    payload: error,
  }),

  reviewsRequested: () => ({type: ActionTypes.FETCH_REVIEWS_REQUEST}),

  reviewsLoaded: (newCards) => ({
    type: ActionTypes.FETCH_REVIEWS_SUCCESS,
    payload: newCards,
  }),

  reviewsError: (error) => ({
    type: ActionTypes.FETCH_REVIEWS_FAILURE,
    payload: error,
  }),

  setDefaultCardListState: () => ({type: ActionTypes.SET_DEFAULT_CARD_LIST_STATE}),

  changeGenre: (genre) => ({
    type: ActionTypes.CHANGE_GENRE,
    payload: genre,
  }),

  changeShowingCardsAmount: (amount) => ({
    type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT,
    payload: amount,
  }),

  changeSelectedCard: (id) => ({
    type: ActionTypes.CHANGE_SELECTED_CARD,
    payload: id,
  }),

  userDataRequested: () => ({type: ActionTypes.FETCH_USER_DATA_REQUEST}),

  userDataLoaded: (userData) => ({
    type: ActionTypes.FETCH_USER_DATA_SUCCESS,
    payload: userData,
  }),

  userDataError: (error) => ({
    type: ActionTypes.FETCH_USER_DATA_FAILURE,
    payload: error,
  }),

  userCardsRequested: () => ({type: ActionTypes.FETCH_USER_CARDS_REQUEST}),

  userCardsLoaded: (userCards) => ({
    type: ActionTypes.FETCH_USER_CARDS_SUCCESS,
    payload: userCards,
  }),

  userCardsError: (error) => ({
    type: ActionTypes.FETCH_USER_CARDS_FAILURE,
    payload: error,
  }),

  changeAppScreen: (screen) => ({
    type: ActionTypes.CHANGE_APP_SCREEN,
    payload: screen,
  }),
};

export default ActionCreator;

import ActionTypes from '../action-types/action-types.js';

const ActionCreator = {
  cardsLoaded: (newCards) => ({type: ActionTypes.CARDS_LOADED, payload: newCards}),

  promoCardLoaded: (newPromoCard) => ({type: ActionTypes.PROMO_CARD_LOADED, payload: newPromoCard}),

  changeGenre: (genre) => ({type: ActionTypes.CHANGE_GENRE, payload: genre}),
};

export default ActionCreator;

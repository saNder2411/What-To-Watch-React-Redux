import ActionTypes from '../action-types/action-types.js';
import {extend} from './reducer.js';

const updatePromoCard = ({promoCard}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROMO_CARD_REQUEST:
      return extend(promoCard,
          {
            promoCardData: {},
            promoLoading: true,
            promoError: null,
          });

    case ActionTypes.FETCH_PROMO_CARD_SUCCESS:
      return extend(promoCard,
          {
            promoCardData: action.payload,
            promoLoading: false,
            promoError: null,
          });

    case ActionTypes.FETCH_PROMO_CARD_FAILURE:
      return extend(promoCard,
          {
            promoCardData: {},
            promoLoading: false,
            promoError: action.payload,
          });

    default:
      return promoCard;
  }
};

export default updatePromoCard;

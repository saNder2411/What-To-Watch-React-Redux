import ActionTypes from '../../action-types/action-types.js';
import {extend} from '../../utils/utils.js';


const initialState = {
  promoCard: {
    promoCardData: {},
    promoLoading: true,
    promoError: null,
  }
};

const updatePromoCard = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FETCH_PROMO_CARD_REQUEST:
      return extend(state.promoCard,
          {
            promoCardData: {},
            promoLoading: true,
            promoError: null,
          });

    case ActionTypes.FETCH_PROMO_CARD_SUCCESS:
      return extend(state.promoCard,
          {
            promoCardData: action.payload,
            promoLoading: false,
            promoError: null,
          });

    case ActionTypes.FETCH_PROMO_CARD_FAILURE:
      return extend(state.promoCard,
          {
            promoCardData: {},
            promoLoading: false,
            promoError: action.payload,
          });

    default:
      return state.promoCard;
  }
};

export {updatePromoCard};

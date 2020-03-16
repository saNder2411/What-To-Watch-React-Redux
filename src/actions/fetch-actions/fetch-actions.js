import ActionCreator from '../action-creator.js';
import {DataTypes} from '../../const.js';

const FetchActions = {
  fetchData: (cardsService) => (dataType) => (dispatch) => {
    switch (dataType) {
      case DataTypes.PROMO_DATA:
        dispatch(ActionCreator.promoCardRequested());
        cardsService.getPromoCard()
          .then((promoCardData) => dispatch(ActionCreator.promoCardLoaded(promoCardData)))
          .catch((error) => dispatch(ActionCreator.promoCardError(error)));
        break;

      case DataTypes.CARDS_DATA:
        dispatch(ActionCreator.cardsRequested());
        cardsService.getCardList()
          .then((cardsData) => dispatch(ActionCreator.cardsLoaded(cardsData)))
          .catch((error) => dispatch(ActionCreator.cardsError(error)));
        break;
    }
  },
};

export default FetchActions;

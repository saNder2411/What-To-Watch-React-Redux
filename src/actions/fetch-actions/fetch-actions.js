import ActionCreator from '../action-creator.js';
import {DataTypes} from '../../const.js';

const FetchActions = {
  fetchData: (cardsService, selectedCardId) => (dataType) => (dispatch) => {
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

      case DataTypes.REVIEWS_DATA:
        dispatch(ActionCreator.reviewsRequested());
        cardsService.getReviews(selectedCardId)
        .then((reviewsData) => dispatch(ActionCreator.reviewsLoaded(reviewsData)))
        .catch((error) => dispatch(ActionCreator.reviewsError(error)));
        break;

      case DataTypes.CHECK_USER_AUTH:
        dispatch(ActionCreator.authorizationStatusRequested());
        cardsService.getAuthorizationStatus()
          .then((userInfo) => dispatch(ActionCreator.authorizationStatusLoaded(userInfo)))
          .catch((error) => dispatch(ActionCreator.authorizationStatusError(error)));
        break;
    }
  },
};

export default FetchActions;

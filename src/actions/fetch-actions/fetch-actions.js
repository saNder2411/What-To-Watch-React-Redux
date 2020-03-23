import ActionCreator from '../action-creator.js';
import {DataTypes} from '../../const.js';


const FetchActions = {

  fetchData: (cardsService, selectedCardId) => (dataType) => (dispatch) => {

    switch (dataType) {
      case DataTypes.FETCH_PROMO_DATA:
        dispatch(ActionCreator.promoCardRequested());
        cardsService.getPromoCard()
          .then((promoCardData) => dispatch(ActionCreator.promoCardLoaded(promoCardData)))
          .catch((error) => dispatch(ActionCreator.promoCardError(error)));
        break;

      case DataTypes.FETCH_CARDS_DATA:
        dispatch(ActionCreator.cardsRequested());
        cardsService.getCardList()
          .then((cardsData) => dispatch(ActionCreator.cardsLoaded(cardsData)))
          .catch((error) => dispatch(ActionCreator.cardsError(error)));
        break;

      case DataTypes.FETCH_REVIEWS_DATA:
        dispatch(ActionCreator.reviewsRequested());
        cardsService.getReviews(selectedCardId)
        .then((reviewsData) => dispatch(ActionCreator.reviewsLoaded(reviewsData)))
        .catch((error) => dispatch(ActionCreator.reviewsError(error)));
        break;

      case DataTypes.FETCH_CHECK_USER_AUTH:
        dispatch(ActionCreator.authRequested());
        cardsService.getAuthStatus()
          .then((userData) => dispatch(ActionCreator.authDataLoaded(userData)))
          .catch((error) => dispatch(ActionCreator.authDataError(error.response)));
        break;
    }
  },
};

export default FetchActions;

import ActionCreator from '../action-creator.js';
import {DataTypes} from '../../const.js';


const FetchActions = {

  fetchData: (cardsService, selectedCardId) => (dataType) => (dispatch) => {

    switch (dataType) {
      case DataTypes.FETCH_PROMO_DATA:
        dispatch(ActionCreator.promoCardRequested());
        cardsService.getPromoCard()
          .then((promoCardData) => dispatch(ActionCreator.promoCardLoaded(promoCardData)))
          .catch((error) => dispatch(ActionCreator.promoCardError(error.response)));
        break;

      case DataTypes.FETCH_CARDS_DATA:
        dispatch(ActionCreator.cardsRequested());
        cardsService.getCardList()
          .then((cardsData) => dispatch(ActionCreator.cardsLoaded(cardsData)))
          .catch((error) => dispatch(ActionCreator.cardsError(error.response)));
        break;

      case DataTypes.FETCH_REVIEWS_DATA:
        dispatch(ActionCreator.reviewsRequested());
        cardsService.getReviews(selectedCardId)
        .then((reviewsData) => dispatch(ActionCreator.reviewsLoaded(reviewsData)))
        .catch((error) => dispatch(ActionCreator.reviewsError(error.response)));
        break;

      case DataTypes.FETCH_CHECK_USER_AUTH:
        dispatch(ActionCreator.userDataRequested());
        cardsService.getUserAuthStatus()
          .then((userData) => dispatch(ActionCreator.userDataLoaded(userData)))
          .catch((error) => dispatch(ActionCreator.userDataError(error.response)));
        break;

      case DataTypes.FETCH_USER_CARDS_DATA:
        dispatch(ActionCreator.userCardsRequested());
        cardsService.getUserCardList()
          .then((userCardsData) => dispatch(ActionCreator.userCardsLoaded(userCardsData)))
          .catch((error) => dispatch(ActionCreator.userCardsError(error.response)));
        break;
    }
  },
};

export default FetchActions;

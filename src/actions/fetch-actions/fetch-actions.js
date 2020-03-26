import ActionCreator from '../action-creator.js';
import {DataTypes} from '../../const.js';


const FetchActions = {

  fetchData: (cardsService, selectedCardId) => (dataType) => (dispatch) => {

    switch (dataType) {

      case DataTypes.FETCH_CARDS_DATA:
        dispatch(ActionCreator.cardsRequested());
        cardsService.getCardList()
          .then((cardsData) => dispatch(ActionCreator.cardsLoaded(cardsData)))
          .catch((error) => dispatch(ActionCreator.cardsError(error)));

        dispatch(ActionCreator.promoCardRequested());
        cardsService.getPromoCard()
          .then((promoCardData) => {
            dispatch(ActionCreator.promoCardLoaded(promoCardData));
            dispatch(ActionCreator.changeSelectedCard(promoCardData.id));
          })
          .catch((error) => dispatch(ActionCreator.promoCardError(error)));
        break;

      case DataTypes.FETCH_REVIEWS_DATA:
        dispatch(ActionCreator.reviewsRequested());
        cardsService.getReviews(selectedCardId)
        .then((reviewsData) => dispatch(ActionCreator.reviewsLoaded(reviewsData)))
        .catch((error) => dispatch(ActionCreator.reviewsError(error)));
        break;

      case DataTypes.FETCH_CHECK_USER_AUTH:
        dispatch(ActionCreator.userDataRequested());
        cardsService.getUserAuthStatus()
          .then((userData) => dispatch(ActionCreator.userDataLoaded(userData)))
          .catch((error) => dispatch(ActionCreator.userDataError(error)));
        break;

      case DataTypes.FETCH_USER_CARDS_DATA:
        dispatch(ActionCreator.userCardsRequested());
        cardsService.getUserCardList()
          .then((userCardsData) => dispatch(ActionCreator.userCardsLoaded(userCardsData)))
          .catch((error) => dispatch(ActionCreator.userCardsError(error)));
        break;
    }
  },
};

export default FetchActions;

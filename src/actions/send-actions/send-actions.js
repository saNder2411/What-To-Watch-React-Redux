import ActionCreator from '../action-creator.js';
import {DataTypes} from '../../const.js';


const SendActions = {

  sendData: (cardsService, selectedCardId) => (dataType, sentData) => (dispatch) => {

    switch (dataType) {
      case DataTypes.SEND_USER_AUTH_DATA:
        dispatch(ActionCreator.authRequested());
        cardsService.sendAuthUserData(sentData)
          .then((userData) => dispatch(ActionCreator.authDataLoaded(userData)))
          .catch((error) => dispatch(ActionCreator.authDataError(error.response)));
        break;

      case DataTypes.SEND_REVIEW_DATA:
        dispatch(ActionCreator.reviewsRequested());
        cardsService.sendReview(selectedCardId, sentData)
          .then((reviewsData) => dispatch(ActionCreator.reviewsLoaded(reviewsData)))
          .catch((error) => dispatch(ActionCreator.reviewsError(error)));
        break;
    }

  }
};

export default SendActions;

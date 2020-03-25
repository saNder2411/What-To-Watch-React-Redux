import ActionCreator from '../action-creator.js';
import {DataTypes} from '../../const.js';


const SendActions = {

  sendData: (cardsService, selectedCardId) => (dataType, sentData) => (dispatch) => {

    switch (dataType) {
      case DataTypes.SEND_USER_AUTH_DATA:
        dispatch(ActionCreator.userDataRequested());
        cardsService.sendUserData(sentData)
          .then((userData) => dispatch(ActionCreator.userDataLoaded(userData)))
          .catch((error) => dispatch(ActionCreator.userDataError(error.response)));
        break;

      case DataTypes.SEND_REVIEW_DATA:
        dispatch(ActionCreator.reviewsRequested());
        cardsService.sendReview(selectedCardId, sentData)
          .then((reviewsData) => dispatch(ActionCreator.reviewsLoaded(reviewsData)))
          .catch((error) => dispatch(ActionCreator.reviewsError(error.response)));
        break;
    }

  }
};

export default SendActions;

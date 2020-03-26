import ActionCreator from '../action-creator.js';
import {DataTypes} from '../../const.js';


const SendActions = {

  sendData: (cardsService) => (dataType, sentData, selectedCardId) => (dispatch) => {

    switch (dataType) {
      case DataTypes.SEND_USER_AUTH_DATA:
        dispatch(ActionCreator.userDataRequested());
        cardsService.sendUserData(sentData)
          .then((userData) => dispatch(ActionCreator.userDataLoaded(userData)))
          .catch((error) => dispatch(ActionCreator.userDataError(error)));
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

import ActionCreator from '../action-creator.js';
import {AuthActionTypes} from '../../const.js';


const AuthActions = {

  authActionCreator: (cardsService) => (authActionType, formUserData) => (dispatch) => {

    switch (authActionType) {
      case AuthActionTypes.CHECK_USER_AUTH:
        dispatch(ActionCreator.authRequested());
        cardsService.getAuthStatus()
          .then((userData) => dispatch(ActionCreator.authDataLoaded(userData)))
          .catch((error) => dispatch(ActionCreator.authDataError(error.response)));
        break;

      case AuthActionTypes.USER_AUTH:
        dispatch(ActionCreator.authRequested());
        cardsService.setAuthUserData(formUserData)
          .then((userData) => dispatch(ActionCreator.authDataLoaded(userData)))
          .catch((error) => dispatch(ActionCreator.authDataError(error.response)));
        break;
    }

  }
};

export default AuthActions;

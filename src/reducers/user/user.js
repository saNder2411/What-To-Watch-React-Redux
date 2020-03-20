import ActionTypes from '../../action-types/action-types.js';
import {extend} from '../../utils/utils.js';
import {AuthorizationStatus} from '../../const.js';

const initialState = {
  user: {
    userInfo: {},
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authorizationLoading: true,
    authorizationError: null,
  }
};

const updateUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_AUTHORIZATION_REQUEST:
      return extend(state.user, {
        userInfo: {},
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationLoading: true,
        authorizationError: null,
      });

    case ActionTypes.FETCH_AUTHORIZATION_SUCCESS:
      return extend(state.user, {
        userInfo: action.payload,
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationLoading: false,
        authorizationError: null,
      });

    case ActionTypes.FETCH_AUTHORIZATION_FAILURE:
      return extend(state.user, {
        userInfo: {},
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationLoading: false,
        authorizationError: action.payload,
      });
  }

  return state.user;
};

export {updateUser};

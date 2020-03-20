import ActionTypes from '../../action-types/action-types.js';
import {extend} from '../../utils/utils.js';
import {AuthStatus} from '../../const.js';

const initialState = {
  user: {
    userData: {},
    authStatus: AuthStatus.NO_AUTH,
    authLoading: true,
    authError: null,
  }
};

const updateUser = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FETCH_AUTH_REQUEST:
      return extend(state.user, {
        userData: {},
        authStatus: AuthStatus.NO_AUTH,
        authLoading: true,
        authError: null,
      });

    case ActionTypes.FETCH_AUTH_SUCCESS:
      return extend(state.user, {
        userData: action.payload,
        authStatus: AuthStatus.AUTH,
        authLoading: false,
        authError: null,
      });

    case ActionTypes.FETCH_AUTH_FAILURE:
      return extend(state.user, {
        userData: {},
        authStatus: AuthStatus.NO_AUTH,
        authLoading: false,
        authError: action.payload,
      });
  }

  return state.user;
};

export {updateUser};

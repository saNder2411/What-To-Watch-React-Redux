import ActionTypes from '../../action-types/action-types.js';
import {extend} from '../../utils/utils.js';

const initialState = {
  user: {
    userData: {},
    isAuthorized: false,
    authLoading: true,
    authError: null,
  }
};

const updateUser = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FETCH_AUTH_REQUEST:
      return extend(state.user, {
        userData: {},
        isAuthorized: false,
        authLoading: true,
        authError: null,
      });

    case ActionTypes.FETCH_AUTH_SUCCESS:
      return extend(state.user, {
        userData: action.payload,
        isAuthorized: true,
        authLoading: false,
        authError: null,
      });

    case ActionTypes.FETCH_AUTH_FAILURE:
      return extend(state.user, {
        userData: {},
        isAuthorized: false,
        authLoading: false,
        authError: action.payload,
      });
  }

  return state.user;
};

export {updateUser};

import ActionTypes from '../../action-types/action-types';
import {extend} from '../../utils/utils';

const initialState = {
  user: {
    isAuthorized: false,
    userData: {},
    userDataLoading: true,
    userDataError: null,
  }
};

const updateUser = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FETCH_USER_DATA_REQUEST:
      return extend(state.user, {
        isAuthorized: false,
        userData: {},
        userDataLoading: true,
        userDataError: null,
      });

    case ActionTypes.FETCH_USER_DATA_SUCCESS:
      return extend(state.user, {
        isAuthorized: true,
        userData: action.payload,
        userDataLoading: false,
        userDataError: null,
      });

    case ActionTypes.FETCH_USER_DATA_FAILURE:
      return extend(state.user, {
        isAuthorized: false,
        userData: {},
        userDataLoading: false,
        userDataError: action.payload,
      });
  }

  return state.user;
};

export {updateUser};

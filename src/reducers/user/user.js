import ActionTypes from '../../action-types/action-types.js';
import {extend} from '../../utils/utils.js';
import {AuthorizationStatus} from '../../const.js';

const initialState = {
  user: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }
};

const updateUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUIRED_AUTHORIZATION:
      return extend(state.user, {authorizationStatus: action.payload});
  }

  return state.user;
};

export {updateUser};

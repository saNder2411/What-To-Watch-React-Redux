import ActionTypes from '../../action-types/action-types';
import {extend} from '../../utils/utils';

const initialState = {
  userCardList: {
    userCardsData: [],
    userCardsLoading: true,
    userCardsError: null,
  }
};

const updateUserCardList = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FETCH_USER_CARDS_REQUEST:
      return extend(state.userCardList, {
        userCardsData: [],
        userCardsLoading: true,
        userCardsError: null,
      });

    case ActionTypes.FETCH_USER_CARDS_SUCCESS:
      return extend(state.userCardList, {
        userCardsData: action.payload,
        userCardsLoading: false,
        userCardsError: null,
      });

    case ActionTypes.FETCH_USER_CARDS_FAILURE:
      return extend(state.userCardList, {
        userCardsData: [],
        userCardsLoading: false,
        userCardsError: action.payload,
      });
  }

  return state.userCardList;
};

export {updateUserCardList};

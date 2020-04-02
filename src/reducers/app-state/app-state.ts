import ActionTypes from '../../action-types/action-types';
import {extend} from '../../utils/utils';
import {Screens} from '../../types';

const initialState = {
  appState: {
    screen: Screens.MAIN,
    selectedCardId: -1,
  }
};

const updateAppState = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.CHANGE_APP_SCREEN:
      return extend(state.appState, {screen: action.payload});

    case ActionTypes.CHANGE_SELECTED_CARD:
      return extend(state.appState, {selectedCardId: action.payload});

    default:
      return state.appState;
  }
};

export {updateAppState};

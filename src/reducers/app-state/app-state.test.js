import {updateAppState as reducer} from './app-state.js';
import ActionTypes from '../../action-types/action-types.js';
import {Screens} from '../../const.js';

const initialState = {
  appState: {
    screen: Screens.MAIN,
    selectedCardId: -1,
  }
};

describe(`Reducer app-state work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      screen: Screens.MAIN,
      selectedCardId: -1,
    });
  });

  it(`Reducer should update app-state by action change app screen`, () => {
    expect(reducer(initialState, {type: ActionTypes.CHANGE_APP_SCREEN, payload: Screens.CARD}))
      .toEqual({
        screen: Screens.CARD,
        selectedCardId: -1,
      });
  });

  it(`Reducer should update app-state by action change selected cards`, () => {
    expect(reducer(initialState, {type: ActionTypes.CHANGE_SELECTED_CARD, payload: 1}))
      .toEqual({
        screen: Screens.MAIN,
        selectedCardId: 1,
      });
  });
});

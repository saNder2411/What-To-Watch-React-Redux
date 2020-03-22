import createAPI from '../../api.js';
import AuthActions from './auth-actions.js';
import CardsService from '../../services/cards-service.js';

import ActionTypes from '../../action-types/action-types.js';
import {AuthActionTypes} from '../../const.js';

const API = createAPI(() => {});
const cardsService = new CardsService(API);

describe(`AuthActions work correctly`, () => {
  it(`Should make a correct call to dispatch with arguments AuthActionTypes.CHECK_USER_AUTH`, () => {
    const authActionCreator = AuthActions.authActionCreator(cardsService)(AuthActionTypes.CHECK_USER_AUTH);
    const dispatch = jest.fn();

    authActionCreator(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.FETCH_AUTH_REQUEST,
    });
  });
});


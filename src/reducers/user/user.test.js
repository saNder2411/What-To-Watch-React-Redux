import {updateUser as reducer} from './user.js';
import ActionTypes from '../../action-types/action-types.js';
import {AuthStatus} from '../../const.js';

const mockUserDate = {
  id: 1,
  email: `vova@gmail.com`,
  name: `Vlad`,
  avatarSrc: `avatar_url`,
};


const mockError = {
  status: 400,
};

const initialState = {
  user: {
    userData: {},
    authStatus: AuthStatus.NO_AUTH,
    authLoading: true,
    authError: null,
  }
};

describe(`Reducer user work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      userData: {},
      authStatus: AuthStatus.NO_AUTH,
      authLoading: true,
      authError: null,
    });
  });

  it(`Reducer should update user state when request user data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_AUTH_REQUEST}))
      .toEqual({
        userData: {},
        authStatus: AuthStatus.NO_AUTH,
        authLoading: true,
        authError: null,
      });
  });

  it(`Reducer should update user state when loaded user data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_AUTH_SUCCESS, payload: mockUserDate}))
      .toEqual({
        userData: mockUserDate,
        authStatus: AuthStatus.AUTH,
        authLoading: false,
        authError: null,
      });
  });

  it(`Reducer should update user state when user data response return error`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_AUTH_FAILURE, payload: mockError}))
      .toEqual({
        userData: {},
        authStatus: AuthStatus.NO_AUTH,
        authLoading: false,
        authError: mockError,
      });
  });
});

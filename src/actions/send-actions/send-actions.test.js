import SendActions from './send-actions';

import ActionTypes from '../../action-types/action-types';
import {DataTypes} from '../../types';

describe(`SendActions work correctly`, () => {

  it(`Should make a correct sendData call to dispatch with arguments DataTypes.SEND_USER_AUTH_DATA`, () => {
    const mockCardsService = {
      sendUserData() {

        return new Promise((resolve) => resolve({fake: true}));
      }
    };
    const sendUserDataLoader = SendActions.sendData(mockCardsService)(DataTypes.SEND_USER_AUTH_DATA);
    const dispatch = jest.fn();

    return new Promise((resolve) => resolve(sendUserDataLoader(dispatch)))
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.FETCH_USER_DATA_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionTypes.FETCH_USER_DATA_SUCCESS,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct sendData call to dispatch with arguments DataTypes.SEND_REVIEW_DATA`, () => {
    const mockCardsService = {
      sendReview() {

        return new Promise((resolve) => resolve([{fake: true}]));
      }
    };
    const sendReviewsDataLoader = SendActions.sendData(mockCardsService)(DataTypes.SEND_REVIEW_DATA);
    const dispatch = jest.fn();

    return new Promise((resolve) => resolve(sendReviewsDataLoader(dispatch)))
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.FETCH_REVIEWS_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionTypes.FETCH_REVIEWS_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct sendData call to dispatch with arguments DataTypes.UPDATE_CARD`, () => {
    const mockCardsService = {
      updateFavoriteCard() {

        return new Promise((resolve) => resolve({fake: true}));
      }
    };
    const sendUserCardLoader = SendActions.sendData(mockCardsService)(DataTypes.UPDATE_CARD);
    const dispatch = jest.fn();

    return new Promise((resolve) => resolve(sendUserCardLoader(dispatch)))
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.UPDATE_CARD_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionTypes.UPDATE_CARD_SUCCESS,
          payload: {fake: true},
        });
      });
  });
});

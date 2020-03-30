import createAPI from '../../api';
import SendActions from './send-actions';
import CardsService from '../../services/cards-service';

import ActionTypes from '../../action-types/action-types';
import {DataTypes} from '../../const';

const API = createAPI(() => {});
const cardsService = new CardsService(API);

describe(`SendActions work correctly`, () => {

  it(`Should make a correct sendData call to dispatch with arguments DataTypes.SEND_USER_AUTH_DATA`, () => {
    const sendActionCreator = SendActions.sendData(cardsService)(DataTypes.SEND_USER_AUTH_DATA);
    const dispatch = jest.fn();

    sendActionCreator(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.FETCH_USER_DATA_REQUEST,
    });
  });

  it(`Should make a correct sendData call to dispatch with arguments DataTypes.SEND_REVIEW_DATA`, () => {
    const sendActionCreator = SendActions.sendData(cardsService)(DataTypes.SEND_REVIEW_DATA);
    const dispatch = jest.fn();

    sendActionCreator(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.FETCH_REVIEWS_REQUEST,
    });
  });

  it(`Should make a correct sendData call to dispatch with arguments DataTypes.UPDATE_CARD`, () => {
    const sendActionCreator = SendActions.sendData(cardsService)(DataTypes.UPDATE_CARD);
    const dispatch = jest.fn();

    sendActionCreator(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.UPDATE_CARD_REQUEST,
    });
  });
});

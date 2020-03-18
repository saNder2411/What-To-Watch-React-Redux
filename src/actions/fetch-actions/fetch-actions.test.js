import createAPI from '../../api.js';
import FetchActions from './fetch-actions.js';
import CardsService from '../../services/cards-service.js';

import ActionTypes from '../../action-types/action-types.js';
import {DataTypes} from '../../const.js';

const API = createAPI(() => {});
const cardsService = new CardsService(API);

describe(`FetchActions work correctly`, () => {
  it(`Should make a correct fetchData call to dispatch with arguments DataTypes.PROMO_DATA`, () => {
    const fetchDataLoader = FetchActions.fetchData(cardsService)(DataTypes.PROMO_DATA);
    const dispatch = jest.fn();

    fetchDataLoader(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.FETCH_PROMO_CARD_REQUEST,
    });
  });

  it(`Should make a correct fetchData call to dispatch with arguments DataTypes.CARDS_DATA`, () => {
    const fetchDataLoader = FetchActions.fetchData(cardsService)(DataTypes.CARDS_DATA);
    const dispatch = jest.fn();

    fetchDataLoader(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.FETCH_CARDS_REQUEST,
    });
  });

  it(`Should make a correct fetchData call to dispatch with arguments DataTypes.REVIEWS_DATA`, () => {
    const fetchDataLoader = FetchActions.fetchData(cardsService)(DataTypes.REVIEWS_DATA);
    const dispatch = jest.fn();

    fetchDataLoader(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.FETCH_REVIEWS_REQUEST,
    });
  });
});


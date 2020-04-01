import FetchActions from './fetch-actions';
import ActionTypes from '../../action-types/action-types';
import {DataTypes} from '../../types';

describe(`FetchActions work correctly`, () => {
  it(`Should make a correct fetchData call to dispatch with arguments DataTypes.FETCH_CARDS_DATA`, () => {
    const mockCardsService = {
      getCardList() {

        return new Promise((resolve) => resolve([{fake: true}]));
      },
      getPromoCard() {

        return new Promise((resolve) => resolve({fake: true}));
      }
    };

    const fetchDataLoader = FetchActions.fetchData(mockCardsService)(DataTypes.FETCH_CARDS_DATA);
    const dispatch = jest.fn();

    return new Promise((resolve) => resolve(fetchDataLoader(dispatch)))
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.FETCH_CARDS_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionTypes.FETCH_PROMO_CARD_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionTypes.FETCH_CARDS_SUCCESS,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionTypes.FETCH_PROMO_CARD_SUCCESS,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct fetchData call to dispatch with arguments DataTypes.FETCH_REVIEWS_DATA`, () => {
    const mockCardsService = {
      getReviews() {

        return new Promise((resolve) => resolve([{fake: true}]));
      }
    };
    const fetchDataLoader = FetchActions.fetchData(mockCardsService)(DataTypes.FETCH_REVIEWS_DATA);
    const dispatch = jest.fn();

    return new Promise((resolve) => resolve(fetchDataLoader(dispatch)))
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

  it(`Should make a correct call to dispatch with arguments DataTypes.FETCH_CHECK_USER_AUTH`, () => {
    const mockCardsService = {
      getUserAuthStatus() {

        return new Promise((resolve) => resolve({fake: true}));
      }
    };
    const authStatusLoader = FetchActions.fetchData(mockCardsService)(DataTypes.FETCH_CHECK_USER_AUTH);
    const dispatch = jest.fn();

    return new Promise((resolve) => resolve(authStatusLoader(dispatch)))
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

  it(`Should make a correct fetchData call to dispatch with arguments DataTypes.FETCH_USER_CARDS_DATA`, () => {
    const mockCardsService = {
      getUserCardList() {

        return new Promise((resolve) => resolve([{fake: true}]));
      }
    };
    const fetchDataLoader = FetchActions.fetchData(mockCardsService)(DataTypes.FETCH_USER_CARDS_DATA);
    const dispatch = jest.fn();

    return new Promise((resolve) => resolve(fetchDataLoader(dispatch)))
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.FETCH_USER_CARDS_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionTypes.FETCH_USER_CARDS_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
});


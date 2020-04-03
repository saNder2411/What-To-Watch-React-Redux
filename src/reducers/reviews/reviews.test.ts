import {updateReviews as reducer} from './reviews';
import ActionTypes from '../../action-types/action-types';

const mockReviewsData = [
  {
    id: 5,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: 1,
      name: `Kate Muir`,
    },
    rating: 10,
    date: `2567`,
  },
  {
    id: 2,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    user: {
      id: 3,
      name: `Kate`,
    },
    rating: 7,
    date: `1967`,
  }
];

const mockError = {
  message: `Error!`,
};

const initialState = {
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
    isReviewAdded: false,
    reviewsError: null,
  }
};

describe(`Reducer reviews work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      reviewsData: [],
      reviewsLoading: false,
      isReviewAdded: false,
      reviewsError: null,
    });
  });

  it(`Reducer should update reviews by request reviews data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_REVIEWS_REQUEST}))
      .toEqual({
        reviewsData: [],
        reviewsLoading: true,
        isReviewAdded: false,
        reviewsError: null,
      });
  });

  it(`Reducer should update reviews by loaded reviews data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_REVIEWS_SUCCESS, payload: mockReviewsData}))
      .toEqual({
        reviewsData: mockReviewsData,
        reviewsLoading: false,
        isReviewAdded: true,
        reviewsError: null,
      });
  });

  it(`Reducer should update reviews by error reviews data`, () => {
    expect(reducer(initialState, {type: ActionTypes.FETCH_REVIEWS_FAILURE, payload: mockError}))
      .toEqual({
        reviewsData: [],
        reviewsLoading: false,
        isReviewAdded: false,
        reviewsError: mockError,
      });
  });

  it(`Reducer should update is review added by set default review added`, () => {
    expect(reducer({
      reviews: {
        reviewsData: [],
        reviewsLoading: false,
        isReviewAdded: true,
        reviewsError: null,
      }
    }, {type: ActionTypes.SET_DEFAULT_REVIEW_ADDED}))
      .toEqual({
        reviewsData: [],
        reviewsLoading: false,
        isReviewAdded: false,
        reviewsError: null,
      });
  });
});

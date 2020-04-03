import ActionTypes from '../../action-types/action-types';
import {extend} from '../../utils/utils';


const initialState = {
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
    isReviewAdded: false,
    reviewsError: null,
  }
};

const updateReviews = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FETCH_REVIEWS_REQUEST:
      return extend(state.reviews,
          {
            reviewsData: [],
            reviewsLoading: true,
            isReviewAdded: false,
            reviewsError: null,
          });

    case ActionTypes.FETCH_REVIEWS_SUCCESS:
      return extend(state.reviews,
          {
            reviewsData: action.payload,
            reviewsLoading: false,
            isReviewAdded: true,
            reviewsError: null,
          });

    case ActionTypes.FETCH_REVIEWS_FAILURE:
      return extend(state.reviews,
          {
            reviewsData: [],
            reviewsLoading: false,
            isReviewAdded: false,
            reviewsError: action.payload,
          });

    case ActionTypes.SET_DEFAULT_REVIEW_ADDED:
      return extend(state.reviews, {isReviewAdded: false});

    default:
      return state.reviews;
  }
};

export {updateReviews};

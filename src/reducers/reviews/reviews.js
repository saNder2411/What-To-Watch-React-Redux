import ActionTypes from '../../action-types/action-types.js';
import {extend} from '../../utils/utils.js';


const initialState = {
  reviews: {
    reviewsData: [],
    reviewsLoading: false,
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
            reviewsError: null,
          });

    case ActionTypes.FETCH_REVIEWS_SUCCESS:
      return extend(state.reviews,
          {
            reviewsData: action.payload,
            reviewsLoading: false,
            reviewsError: null,
          });

    case ActionTypes.FETCH_REVIEWS_FAILURE:
      return extend(state.reviews,
          {
            reviewsData: [],
            reviewsLoading: false,
            reviewsError: action.payload,
          });

    default:
      return state.reviews;
  }
};

export {updateReviews};

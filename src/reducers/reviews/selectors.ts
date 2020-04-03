const getReviewsData = ({reviews: {reviewsData}}) => reviewsData;

const getReviewsLoading = ({reviews: {reviewsLoading}}) => reviewsLoading;

const getIsReviewAdded = ({reviews: {isReviewAdded}}) => isReviewAdded;

const getReviewsError = ({reviews: {reviewsError}}) => reviewsError;

export {getReviewsData, getReviewsLoading, getIsReviewAdded, getReviewsError};

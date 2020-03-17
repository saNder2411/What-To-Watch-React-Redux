const getReviewsData = ({reviews: {reviewsData}}) => reviewsData;

const getReviewsLoading = ({reviews: {reviewsLoading}}) => reviewsLoading;

const getReviewsError = ({reviews: {reviewsError}}) => reviewsError;

export {getReviewsData, getReviewsLoading, getReviewsError};

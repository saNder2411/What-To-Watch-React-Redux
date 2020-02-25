import React from 'react';
import PropTypes from 'prop-types';
import CardReview from '../card-review/card-review.jsx';
import mockReviews from '../../mocks/mock-reviews';
import Common from '../../utils/common.js';

const CardReviews = ({data: {reviewsId}}) => {
  const reviews = [];

  reviewsId.forEach((id) => {
    const review = mockReviews.find((it) => it.id === id);

    if (review) {
      reviews.push(review);
    }
  });

  const partsReviews = Common.dividedArrayInHalf(reviews);

  const firstColReviews = partsReviews[0].map((review) => {
    return (
      <CardReview
        key={`${review.id}-${review.rating}`}
        data={review}
      />
    );
  });

  const secondColReviews = partsReviews[1].map((review) => {
    return (
      <CardReview
        key={`${review.id}-${review.rating}`}
        data={review}
      />
    );
  });

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstColReviews}
      </div>
      <div className="movie-card__reviews-col">
        {secondColReviews}
      </div>
    </div>
  );
};

CardReviews.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    overviewData: PropTypes.shape({
      promoPoster: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      previewPoster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descriptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      rating: PropTypes.string.isRequired,
      amountVoice: PropTypes.number.isRequired,
    }).isRequired,
    detailsData: PropTypes.shape({
      director: PropTypes.string.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      runtime: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      release: PropTypes.number.isRequired,
    }).isRequired,
    reviewsId: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

export default CardReviews;

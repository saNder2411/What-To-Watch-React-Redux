import React from 'react';
import PropTypes from 'prop-types';
import CardDetailsReview from '../card-details-review/card-details-review.jsx';
import mockReviews from '../../mocks/mock-reviews';

const CardDetailsReviews = ({data}) => {
  const {reviewsId} = data;
  const reviews = [];

  reviewsId.forEach((id) => {
    const review = mockReviews.find((it) => it.id === id);
    if (review) {
      reviews.push(review);
    }
  });

  const amountFirstColReviews = ((reviews.length % 2) + reviews.length) / 2;
  const firstColReviews = reviews
    .slice()
    .splice(0, amountFirstColReviews);
  const secondColReviews = reviews
    .slice()
    .splice(amountFirstColReviews);
  const firstColElements = firstColReviews
    .map((review) => {
      return (
        <CardDetailsReview
          key={`${review.id}-${review.rating}`}
          data={review}
        />
      );
    });

  const secondColElements = secondColReviews
  .map((review) => {
    return (
      <CardDetailsReview
        key={`${review.id}-${review.rating}`}
        data={review}
      />
    );
  });

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstColElements}
      </div>
      <div className="movie-card__reviews-col">
        {secondColElements}
      </div>
    </div>
  );
};

CardDetailsReviews.propTypes = {
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

export default CardDetailsReviews;

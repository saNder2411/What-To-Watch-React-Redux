import React from 'react';
import PropTypes from 'prop-types';

import CardReview from '../card-review/card-review.jsx';

import {dividedArrayInHalf} from '../../utils/utils.js';


const CardReviews = ({reviewsData}) => {
  const partsReviews = dividedArrayInHalf(reviewsData);

  const firstColReviews = partsReviews[0].map((review) => {
    return (
      <CardReview
        key={`${review.id}-${review.rating}`}
        {...review}
      />
    );
  });

  const secondColReviews = partsReviews[1].map((review) => {
    return (
      <CardReview
        key={`${review.id}-${review.rating}`}
        {...review}
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
  reviewsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardReviews;

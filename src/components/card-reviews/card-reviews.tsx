import * as React from 'react';
import CardReview from '../card-review/card-review';
import {dividedArrayInHalf} from '../../utils/utils';
import {Review} from '../../types';


type Props = {reviewsData: Array<Review>}

const CardReviews: React.FC<Props> = ({reviewsData}: Props) => {

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

export default CardReviews;

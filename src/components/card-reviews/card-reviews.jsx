import React from 'react';
// import PropTypes from 'prop-types';
import CardReview from '../card-review/card-review.jsx';


const CardReviews = () => {
  // const reviews = [];

  // reviewsId.forEach((id) => {
  //   const review = mockReviews.find((it) => it.id === id);

  //   if (review) {
  //     reviews.push(review);
  //   }
  // });

  // const partsReviews = Common.dividedArrayInHalf(reviews);

  // const firstColReviews = partsReviews[0].map((review) => {
  //   return (
  //     <CardReview
  //       key={`${review.id}-${review.rating}`}
  //       {...review}
  //     />
  //   );
  // });

  // const secondColReviews = partsReviews[1].map((review) => {
  //   return (
  //     <CardReview
  //       key={`${review.id}-${review.rating}`}
  //       {...review}
  //     />
  //   );
  // });

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <CardReview/>
        {/* {firstColReviews} */}
      </div>
      <div className="movie-card__reviews-col">
        {/* {secondColReviews} */}
      </div>
    </div>
  );
};

CardReviews.propTypes = {
  // reviewsId: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default CardReviews;

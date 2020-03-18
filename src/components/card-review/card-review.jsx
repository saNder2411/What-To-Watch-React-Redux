import React from 'react';
import PropTypes from 'prop-types';
import {parseDateToStr} from '../../utils/utils.js';

const CardReview = ({user, rating, comment, date}) => {
  const dateToStr = parseDateToStr(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{dateToStr}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

CardReview.propTypes = {
  user: PropTypes.object.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default CardReview;

import React from 'react';
import PropTypes from 'prop-types';
import Common from '../../utils/common.js';

const CardReview = ({text, author, rating, date}) => {
  const dateToStr = Common.parseDateToStr(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{dateToStr}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

CardReview.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default CardReview;

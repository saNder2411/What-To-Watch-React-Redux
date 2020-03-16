import React from 'react';
// import PropTypes from 'prop-types';
import {parseDateToStr} from '../../utils/utils.js';

const CardReview = () => {
  const dateToStr = parseDateToStr();

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{}</p>

        <footer className="review__details">
          <cite className="review__author">{}</cite>
          <time className="review__date" dateTime="2016-12-24">{dateToStr}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{}</div>
    </div>
  );
};

CardReview.propTypes = {
  // text: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
  // rating: PropTypes.string.isRequired,
  // date: PropTypes.number.isRequired,
};

export default CardReview;

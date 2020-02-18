import React from 'react';
import PropTypes from 'prop-types';

const CardDetailsReview = ({data}) => {
  const {text, author, rating, date} = data;
  const year = new Date(date).getFullYear();

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">December 24, {year}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

CardDetailsReview.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardDetailsReview;

import React from 'react';
import PropTypes from 'prop-types';

const CardLevelValues = [3, 5, 8, 10];

const CardDetailsOverview = ({data}) => {
  const {
    overviewData: {
      descriptions: [descriptionsPartI, descriptionsPartII],
      rating,
      amountVoice,
    },
    detailsData: {
      director,
      actors,
    }
  } = data;

  const calcCardLevel = (ratingVal, levelValues) => {
    const [minVal, middleLowVal, middleVal, maxVal] = levelValues;
    const ratingNum = +ratingVal;
    let level = `Bad`;

    if (ratingNum >= minVal && ratingNum <= middleLowVal) {
      level = `Normal`;
    } else if (ratingNum >= middleLowVal && ratingNum <= middleVal) {
      level = `Good`;
    } else if (ratingNum >= middleVal && ratingNum < maxVal) {
      level = `Very good`;
    } else if (ratingNum >= maxVal) {
      level = `Awesome`;
    }

    return level;
  };

  const cardLevel = calcCardLevel(rating, CardLevelValues);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{cardLevel}</span>
          <span className="movie-rating__count">{amountVoice} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{descriptionsPartI}</p>

        <p>{descriptionsPartII}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actors.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

CardDetailsOverview.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    overviewData: PropTypes.shape({
      descriptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      rating: PropTypes.string.isRequired,
      amountVoice: PropTypes.number.isRequired,
    }).isRequired,
    detailsData: PropTypes.shape({
      director: PropTypes.string.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CardDetailsOverview;

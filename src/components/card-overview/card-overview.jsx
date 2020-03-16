import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Common from '../../utils/common.js';

const CardLevelValues = [3, 5, 8, 10];

const CardOverview = ({description, rating, scoresCount, director, starring}) => {
  const cardLevel = Common.calcCardLevel(rating, CardLevelValues);

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{cardLevel}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </Fragment>
  );
};

CardOverview.propTypes = {
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default CardOverview;

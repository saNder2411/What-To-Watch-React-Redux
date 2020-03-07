import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Common from '../../utils/common.js';

const CardLevelValues = [3, 5, 8, 10];

const CardOverview = ({descriptions, rating, amountVoice, director, actors}) => {
  const [descriptionsPartOne, descriptionsPartTwo] = descriptions;
  const cardLevel = Common.calcCardLevel(rating, CardLevelValues);

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{cardLevel}</span>
          <span className="movie-rating__count">{amountVoice} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{descriptionsPartOne}</p>

        <p>{descriptionsPartTwo}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actors.join(`, `)}</strong></p>
      </div>
    </Fragment>
  );
};

CardOverview.propTypes = {
  descriptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  rating: PropTypes.string.isRequired,
  amountVoice: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default CardOverview;

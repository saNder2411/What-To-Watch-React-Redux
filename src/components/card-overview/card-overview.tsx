import * as React from 'react';

import {calcCardLevel} from '../../utils/utils';

import {CardInPropsComponent} from '../../types';


const CardLevelValues = [3, 5, 8, 10];

const CardOverview: React.FC<CardInPropsComponent> = ({description, rating, scoresCount, director, starring}) => {

  const cardLevel = calcCardLevel(rating, CardLevelValues);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default CardOverview;

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {getTimeInHoursAndMinutes} from '../../utils/utils';


const CardDetails = ({director, starring, runtime, genre, released}) => {

  const formatRuntime = getTimeInHoursAndMinutes(runtime);

  const actorsList = starring.map((actor, i) => {
    const withTegBr = <Fragment key={actor}>{actor} <br/></Fragment>;
    const withoutTegBr = <Fragment key={actor}>{actor}</Fragment>;

    return i < starring.length - 1 ? withTegBr : withoutTegBr;
  });

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {actorsList}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formatRuntime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runtime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
};

export default CardDetails;

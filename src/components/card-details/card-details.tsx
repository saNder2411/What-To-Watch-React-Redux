import * as React from 'react';
import {getTimeInHoursAndMinutes} from '../../utils/utils';


type Props = {
  director: string;
  starring: Array<string>;
  runtime: number;
  genre: string;
  released: number;
}

const CardDetails: React.FC<Props> = ({director, starring, runtime, genre, released}: Props) => {

  const formatRuntime = getTimeInHoursAndMinutes(runtime);

  const actorsList = starring.map((actor, i) => {
    const withTegBr = <React.Fragment key={actor}>{actor} <br/></React.Fragment>;
    const withoutTegBr = <React.Fragment key={actor}>{actor}</React.Fragment>;

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

export default CardDetails;

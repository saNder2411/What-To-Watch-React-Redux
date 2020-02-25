import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const CardDetails = ({data: {detailsData: {director, actors, runtime, genre, release}}}) => {
  const yearRelease = new Date(release).getFullYear();
  const actorsList = actors.map((actor, i) => {
    const withTegBr = <Fragment key={actor}>{actor} <br/></Fragment>;
    const withoutTegBr = <Fragment key={actor}>{actor}</Fragment>;

    return i < actors.length - 1 ? withTegBr : withoutTegBr;
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
          <span className="movie-card__details-value">{runtime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{yearRelease}</span>
        </p>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    overviewData: PropTypes.shape({
      promoPoster: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      previewPoster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descriptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      rating: PropTypes.string.isRequired,
      amountVoice: PropTypes.number.isRequired,
    }).isRequired,
    detailsData: PropTypes.shape({
      director: PropTypes.string.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      runtime: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      release: PropTypes.number.isRequired,
    }).isRequired,
    reviewsId: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

export default CardDetails;

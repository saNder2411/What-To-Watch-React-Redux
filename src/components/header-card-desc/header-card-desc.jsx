import React from 'react';
import PropTypes from 'prop-types';

const HeaderCardDesc = ({title, genre, date, children}) => {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{date}</span>
      </p>
      {children}
    </div>
  );
};

HeaderCardDesc.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  date: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default HeaderCardDesc;

import React from 'react';
import PropTypes from 'prop-types';

const CardScreenTop = ({children}) => {
  const [CardScreenHeader, Poster, WrappedCardTabs] = children;

  return (
    <section className="movie-card movie-card--full">
      {CardScreenHeader}
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          {Poster}
          {WrappedCardTabs}
        </div>
      </div>
    </section>
  );

};

CardScreenTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default CardScreenTop;

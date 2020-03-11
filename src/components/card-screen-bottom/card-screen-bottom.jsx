import React from 'react';
import PropTypes from 'prop-types';

const CardScreenBottom = ({children}) => {
  const [WrappedPreviewCardsList, Footer] = children;

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        {WrappedPreviewCardsList}
      </section>
      {Footer}
    </div>
  );
};

CardScreenBottom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default CardScreenBottom;

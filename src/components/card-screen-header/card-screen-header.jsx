import React from 'react';
import PropTypes from 'prop-types';


const CardScreenHeader = ({children}) => {

  const [Header, HeaderCardDesc] = children;

  return (
    <div className="movie-card__hero">
      {Header}
      <div className="movie-card__wrap">
        {HeaderCardDesc}
      </div>
    </div>
  );
};

CardScreenHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default CardScreenHeader;

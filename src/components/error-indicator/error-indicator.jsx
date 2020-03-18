import React from 'react';
import PropTypes from 'prop-types';

const ErrorIndicator = ({message}) => {
  return (
    <div className="page-content">
      <h2 className="movie-card__title">{message}</h2>
    </div>
  );
};

ErrorIndicator.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorIndicator;

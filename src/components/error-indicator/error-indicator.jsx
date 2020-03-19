import React from 'react';
import PropTypes from 'prop-types';
import './error-indicator.css';

const ErrorIndicator = ({message}) => {
  return (
    <div className="page-content">
      <div className="error-indicator">
        <h2 className="movie-card__title">OOPS!</h2>
        <span className="error-indicator__message">Something has gone terribly wrong.</span>
        <span className="error-indicator__message">But we are already fixing it</span>
        <span>
        ({message})
        </span>
      </div>
    </div>
  );
};

ErrorIndicator.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorIndicator;

import * as React from 'react';
import './error-indicator.css';
import {Error} from '../../types';


type Props = {error: Error};


const ErrorIndicator: React.FC<Props> = ({error: {message}}: Props) => {

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

export default ErrorIndicator;

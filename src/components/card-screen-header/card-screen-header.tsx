import * as React from 'react';



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

export default CardScreenHeader;

import * as React from 'react';

type Props = {children: Array<React.ReactNode>}

const CardScreenHeader: React.FC<Props> = ({children}) => {

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

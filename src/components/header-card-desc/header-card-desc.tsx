import * as React from 'react';


type Props = {
  title: string;
  genre: string;
  released: number;
}

const HeaderCardDesc: React.FC<Props> = ({title, genre, released, children}) => {

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
      {children}
    </div>
  );
};

export default HeaderCardDesc;

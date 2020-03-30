import * as React from 'react';



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

export default CardScreenTop;

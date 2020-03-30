import * as React from 'react';



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


export default CardScreenBottom;

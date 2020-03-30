import * as React from 'react';



const MainContent = ({children}) => {

  const [WrappedGenreList, WrappedPreviewCardsList, ShowMoreButton, Footer] = children;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {WrappedGenreList}
        {WrappedPreviewCardsList}
        {ShowMoreButton}
      </section>
      {Footer}
    </div>
  );
};

export default MainContent;

import React from 'react';
import PropTypes from 'prop-types';

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

MainContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default MainContent;

import React from 'react';
import PropTypes from 'prop-types';
import GenresListItem from '../genres-list-item/genres-list-item.jsx';

const GenresList = ({labels, activeGenre}) => {
  const items = labels.map((label) => (
    <GenresListItem
      key={label}
      label={label}
      isActive={label === activeGenre}
    />
  ));

  return (
    <ul className="catalog__genres-list">
      {items}
    </ul>
  );
};

GenresList.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeGenre: PropTypes.string.isRequired,
  // onGenresListItemClick: PropTypes.func.isRequired,
};

export default GenresList;

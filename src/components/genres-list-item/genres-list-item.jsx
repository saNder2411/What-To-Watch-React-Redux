import React from 'react';
import PropTypes from 'prop-types';

const GenresListItem = ({label, isActive}) => {
  return (
    <li className={`catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link">{label}</a>
    </li>
  );
};

GenresListItem.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default GenresListItem;

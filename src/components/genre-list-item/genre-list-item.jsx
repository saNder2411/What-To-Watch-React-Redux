import React, {memo} from 'react';
import PropTypes from 'prop-types';

const GenreListItem = ({label, isActive, onGenreListItemClick}) => {
  return (
    <li className={`catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick={onGenreListItemClick}
      >
        {label}
      </a>
    </li>
  );
};

GenreListItem.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenreListItemClick: PropTypes.func.isRequired,
};

export default memo(GenreListItem);

import React, {memo} from 'react';
import PropTypes from 'prop-types';

const GenresListItem = ({label, isActive, onGenresListItemClick}) => {
  return (
    <li className={`catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick={onGenresListItemClick}
      >
        {label}
      </a>
    </li>
  );
};

GenresListItem.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenresListItemClick: PropTypes.func.isRequired,
};

export default memo(GenresListItem);

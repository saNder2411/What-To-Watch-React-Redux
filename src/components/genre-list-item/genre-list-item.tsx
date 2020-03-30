import React, {memo} from 'react';



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

export default memo(GenreListItem);

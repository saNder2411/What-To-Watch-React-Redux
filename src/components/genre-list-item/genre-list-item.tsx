import * as React from 'react';
import {HandleWithEvt} from '../../types';


type Props = {
  label: string;
  isActive: boolean;
  onGenreListItemClick: HandleWithEvt;
}

const GenreListItem: React.FC<Props> = ({label, isActive, onGenreListItemClick}) => {

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

export default React.memo(GenreListItem);

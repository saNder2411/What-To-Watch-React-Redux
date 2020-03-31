import * as React from 'react';

import GenreListItem from '../genre-list-item/genre-list-item';

import {connect} from 'react-redux';
import {getCardsData} from '../../reducers/card-list/selectors';
import {getGenre} from '../../reducers/card-list-state/selectors';

import {DEFAULT_GENRE} from '../../const';
import {Card, HandleWithEvt} from '../../types';


const MAX_AMOUNT_GENRES_LABEL = 9;

const createLabels = (cardsData) => {
  const genres = cardsData.slice().map(({genre}) => genre).sort();

  return [DEFAULT_GENRE, ...Array.from(new Set(genres)).slice(0, MAX_AMOUNT_GENRES_LABEL)];
};


type Props = {
  cardsData: Array<Card>;
  genre: string;
  onActiveItemClick: HandleWithEvt;
}

const GenreList: React.FC<Props> = ({cardsData, genre, onActiveItemClick}: Props) => {

  const labels = createLabels(cardsData);
  const items = labels.map((label) => (
    <GenreListItem
      key={label}
      label={label}
      isActive={label === genre}
      onGenreListItemClick={onActiveItemClick}
    />
  ));

  return (
    <ul className="catalog__genres-list">
      {items}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  cardsData: getCardsData(state),
  genre: getGenre(state),
});

export default connect(mapStateToProps)(GenreList);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GenreListItem from '../genre-list-item/genre-list-item.jsx';
import {DEFAULT_GENRE} from '../../const.js';

const MAX_AMOUNT_GENRES_LABEL = 9;

const createLabels = (cardsData) => {
  const genres = cardsData.slice().map((card) => card.genre).sort();

  return [DEFAULT_GENRE, ...Array.from(new Set(genres)).slice(0, MAX_AMOUNT_GENRES_LABEL)];
};

const GenreList = ({cardsData, genre, onActiveItemClick}) => {
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

GenreList.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  genre: PropTypes.string.isRequired,
  onActiveItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({cardList: {genre}}) => ({genre});

export default connect(mapStateToProps)(GenreList);
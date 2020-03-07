import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GenresListItem from '../genres-list-item/genres-list-item.jsx';
import {DEFAULT_GENRE} from '../../const.js';

const MAX_AMOUNT_GENRES_LABEL = 9;

const createLabels = (cardsData) => {
  const genres = cardsData.slice().map((card) => card.genre).sort();

  return [DEFAULT_GENRE, ...Array.from(new Set(genres)).slice(0, MAX_AMOUNT_GENRES_LABEL)];
};

const GenresList = ({cardsData, genre, onActiveItemClick}) => {
  const labels = createLabels(cardsData);
  const items = labels.map((label) => (
    <GenresListItem
      key={label}
      label={label}
      isActive={label === genre}
      onGenresListItemClick={onActiveItemClick}
    />
  ));

  return (
    <ul className="catalog__genres-list">
      {items}
    </ul>
  );
};

GenresList.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  genre: PropTypes.string.isRequired,
  onActiveItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({genre}) => ({genre});

export default connect(mapStateToProps)(GenresList);

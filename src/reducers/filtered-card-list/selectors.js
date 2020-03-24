import {createSelector} from 'reselect';
import {getCardsData} from '../card-list/selectors.js';
import {DEFAULT_GENRE} from '../../const.js';

const getGenre = ({filteredCardList: {genre}}) => genre;

const getSelectedCardId = ({filteredCardList: {selectedCardId}}) => selectedCardId;

const getShowingCardsAmount = ({filteredCardList: {showingCardsAmount}}) => showingCardsAmount;

const getFilteredCards = createSelector(
    getGenre, getSelectedCardId, getCardsData,
    (genre, cardId, cards) => {
      if (cardId === -1) {

        return genre === DEFAULT_GENRE ? cards : cards.filter((card) => card.genre === genre);
      }

      return cards.filter((card) => card.id !== cardId && card.genre === genre);
    }
);

const getFavoriteCards = createSelector(
    getCardsData,
    (cards) => cards.filter(({isFavorite}) => isFavorite)
);


export {getGenre, getSelectedCardId, getShowingCardsAmount, getFilteredCards, getFavoriteCards};

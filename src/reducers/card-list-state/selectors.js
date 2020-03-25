import {createSelector} from 'reselect';
import {getCardsData} from '../card-list/selectors.js';
import {DEFAULT_GENRE} from '../../const.js';

const getGenre = ({cardListState: {genre}}) => genre;

const getSelectedCardId = ({cardListState: {selectedCardId}}) => selectedCardId;

const getShowingCardsAmount = ({cardListState: {showingCardsAmount}}) => showingCardsAmount;

const getFilteredCards = createSelector(
    getGenre, getSelectedCardId, getCardsData,
    (genre, cardId, cards) => {
      if (cardId === -1) {

        return genre === DEFAULT_GENRE ? cards : cards.filter((card) => card.genre === genre);
      }

      return cards.filter((card) => card.id !== cardId && card.genre === genre);
    }
);

export {getGenre, getSelectedCardId, getShowingCardsAmount, getFilteredCards};

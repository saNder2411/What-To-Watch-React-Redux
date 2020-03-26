import {createSelector} from 'reselect';
import {getCardsData} from '../card-list/selectors.js';
import {getScreen} from '../app-state/selectors.js';
import {DEFAULT_GENRE, Screens} from '../../const.js';

const getGenre = ({cardListState: {genre}}) => genre;

const getSelectedCardId = ({cardListState: {selectedCardId}}) => selectedCardId;

const getShowingCardsAmount = ({cardListState: {showingCardsAmount}}) => showingCardsAmount;

const getFilteredCards = createSelector(
    getScreen, getGenre, getSelectedCardId, getCardsData,
    (screen, genre, cardId, cards) => {
      if (screen === Screens.MAIN) {

        return genre === DEFAULT_GENRE ? cards : cards.filter((card) => card.genre === genre);
      }

      return cards.filter((card) => card.id !== cardId && card.genre === genre);
    }
);

export {getGenre, getSelectedCardId, getShowingCardsAmount, getFilteredCards};

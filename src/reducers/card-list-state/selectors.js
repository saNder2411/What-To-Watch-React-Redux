import {createSelector} from 'reselect';
import {getCardsData} from '../card-list/selectors.js';
import {getScreen, getSelectedCardId} from '../app-state/selectors.js';
import {DEFAULT_GENRE, Screens} from '../../const.js';

const getGenre = ({cardListState: {genre}}) => genre;

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

export {getGenre, getShowingCardsAmount, getFilteredCards};

import {createSelector} from 'reselect';
import {getCardsData} from '../card-list/selectors';
import {getScreen, getSelectedCardId} from '../app-state/selectors';
import {DEFAULT_GENRE} from '../../const';
import {Screens} from '../../types';

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

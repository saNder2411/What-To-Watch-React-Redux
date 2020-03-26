import {createSelector} from 'reselect';
import {getCardsData} from '../card-list/selectors.js';

const getScreen = ({appState: {screen}}) => screen;

const getSelectedCardId = ({appState: {selectedCardId}}) => selectedCardId;

const getSelectedCard = createSelector(
    getCardsData, getSelectedCardId,
    (cards, cardId) => cards.find(({id}) => id === cardId)
);

export {getScreen, getSelectedCardId, getSelectedCard};

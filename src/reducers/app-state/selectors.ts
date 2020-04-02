import {createSelector} from 'reselect';
import {getCardsData} from '../card-list/selectors';
import {Card} from '../../types';

const getScreen = ({appState: {screen}}) => screen;

const getSelectedCardId = ({appState: {selectedCardId}}) => selectedCardId;

const getSelectedCard = createSelector(
    getCardsData, getSelectedCardId,
    (cards: Array<Card>, cardId: number) => cards.find(({id}) => id === cardId)
);

export {getScreen, getSelectedCardId, getSelectedCard};

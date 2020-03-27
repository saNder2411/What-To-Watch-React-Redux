import CardListActions from './card-list-actions.js';
import ActionTypes from '../../action-types/action-types.js';

const mockGenre = `All genre`;
const mockShowingCardsAmount = 8;

describe(`CardListActions work correctly`, () => {
  it(`Should make a correct filtersCards call to dispatch`, () => {
    const dispatch = jest.fn();

    CardListActions.filtersCards(dispatch)(mockGenre, mockShowingCardsAmount);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.CHANGE_GENRE,
      payload: mockGenre,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT,
      payload: mockShowingCardsAmount,
    });
  });
});


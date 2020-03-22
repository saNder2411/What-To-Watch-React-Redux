import FilterActions from './filter-actions.js';
import ActionTypes from '../../action-types/action-types.js';

const mockGenre = `All genre`;
const mockShowingCardsAmount = 8;
const mockSelectedCardId = 2;

describe(`FilterActions work correctly`, () => {
  it(`Should make a correct filtersCards call to dispatch without argument selectedCardId`, () => {
    const dispatch = jest.fn();

    FilterActions.filtersCards(dispatch)(mockGenre, mockShowingCardsAmount);

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

  it(`Should make a correct filtersCards call to dispatch with argument selectedCardId`, () => {
    const dispatch = jest.fn();

    FilterActions.filtersCards(dispatch)(mockGenre, mockShowingCardsAmount, mockSelectedCardId);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionTypes.CHANGE_GENRE,
      payload: mockGenre,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ActionTypes.CHANGE_SHOWING_CARDS_AMOUNT,
      payload: mockShowingCardsAmount,
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, {
      type: ActionTypes.CHANGE_SELECTED_CARD,
      payload: mockSelectedCardId,
    });
  });
});

